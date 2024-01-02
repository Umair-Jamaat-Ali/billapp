"use client"
import React from 'react'

export default function DeleteButton({ id, title }) {

  const deleteHandler = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "id": id
      });

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      await fetch("http://localhost:3000/api/bills", requestOptions)
      alert("sucessfully deleted")
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <button className='btn1' style={{marginLeft:"10px"}} onClick={deleteHandler}> {title} </button>
  )
}
