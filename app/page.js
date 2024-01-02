import React from 'react';
import CreateBills from './components/createBills/CreateBills';
import { prisma } from '@/config/dbPrisma';
import DeleteButton from './components/deleteButton/DeleteButton';
import UpdateButton from './components/updateButton/UpdateButton';


const fetchBills = async () => {
  try {
    const bills = await prisma.bills.findMany();
    return bills;
  } catch (error) {
    console.log("error", error);
  }
}



const BillTable =async () => {
  const bills = await fetchBills();

  return (
    <>
    <div>
      <h1 className='text-4xl mb-4 pl-[40%] h-[70px] pt-2 font-extrabold bg-green-900'>Create Bills App</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Customer Number</th>
            <th className="border border-gray-300 p-2">Address</th>
            <th className="border border-gray-300 p-2">Units</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Delete</th>
            {/* <th className="border border-gray-300 p-2">Update</th> */}
          </tr>
        </thead>
        <tbody>
          {bills?.map((bill, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{bill.customerNumber}</td>
              <td className="border border-gray-300 p-2">{bill.address}</td>
              <td className="border border-gray-300 p-2">{bill.units}</td>
              <td className="border border-gray-300 p-2">{bill.status ? "Paid" : "UnPaid"}</td>
              <td className="border border-gray-300 p-2"> <DeleteButton  id={ bill.id } title="Delete"/> </td>
              {/* <td className="border border-gray-300 p-2"> <UpdateButton id={bill.id}/> </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <CreateBills />
    </div>
    </>
  );
};

export default BillTable;








