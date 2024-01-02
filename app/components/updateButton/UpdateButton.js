"use client"
import React, { useState } from 'react'

export default function UpdateButton() {

    const [updateModel, setUpdateModel] = useState(false)

    const openModel = () => {
        setUpdateModel(true);
    }

    const closeModel = () => {
        setUpdateModel(false);
    }

    const updateHandler = async ({id}) => {
        try {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "id": id,
                "status": body.status
            });

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            await fetch("http://localhost:3000/api/bills", requestOptions)

            alert("bill successfully updated")
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
        <button onClick={openModel}> Bill Update </button>
        {openModel && (
            <div >
                <h1>Update Bill</h1>

            </div>
        )}
        </>
    )
}
