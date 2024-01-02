"use client"
import React, { useState } from 'react';


const CreateBills = () => {

    const componentStyle = {
        // backgroundColor: "blue",
        // width: "150px"
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [customerNumber, setCustomerNumber] = useState('')
    const [units, setUnits] = useState('')
    const [address, setAddress] = useState('')
    const [status, setStatus] = useState('')

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const savaHandler = async () => {

        if (!customerNumber && !units && !address && !status) {
            alert("all params are required")
        } else {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "customerNumber": customerNumber,
                "units": parseInt(units),
                "address": address,
                "status": false
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            await fetch("http://localhost:3000/api/bills", requestOptions);
             
            alert("bills successfully created")
            }
        catch (error) {
            console.log("error", error);
        }
    } }

    return (
        <div style={componentStyle} className="container">
            <button className='btn' onClick={openModal}>Generate Bill</button>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2 className='text-xl mb-[10px] font-bold'>Generated Bill</h2>
                        {/* Bill details go here */}
                        <div className='my-4'>
                        <div>

                            <label >consumerNumber :</label>
                            <br />
                            <input className="border border-gray-300 p-2" value={customerNumber} placeholder="enter consumer number" onChange={(e) => setCustomerNumber(e.target.value)} />
                            <br />
                        </div>

                        <div>
                            <label >Units :</label>
                            <br />
                            <input className="border border-gray-300 p-2" value={units} placeholder="enter consume units" onChange={(e) => setUnits(e.target.value)} />
                            <br />
                        </div>

                        <div>
                            <label >Address :</label>
                            <br />
                            <input className="border border-gray-300 p-2" value={address} placeholder="enter Address" onChange={(e) => setAddress(e.target.value)} />
                            <br />
                        </div>

                        <div>
                            <label >Status :</label>
                            <br />
                            <input
                                className="border border-gray-300 p-2"
                                value={status} placeholder="enter status" onChange={(e) => setStatus(e.target.value)} />
                            <br />
                        </div>
                        <div>
                            <button style={{margin:"20px"}} className='btn' onClick={savaHandler}>Submit</button>
                            <button style={{margin:"20px"}} className='btn1' onClick={closeModal}>Canel</button>
                        </div>

                    </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default CreateBills;

