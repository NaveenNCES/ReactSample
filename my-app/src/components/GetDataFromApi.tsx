import React, { useState } from 'react'
import axios from 'axios'
import { Student } from '../models/studentDetailsDTO'

function GetDataFromApi() {
    const [dataList, setDataList] = useState([])
    const [student, setStudentData] = useState({
        id: '',
        firtName: '',
        lastName: '',
        rollNumber: '',
        dateOfBirth: '',
        class: '',
        bloodGroup: '',
        address: ''
    })
    let dataListSample
    let modelData: Student
    const getStudentData = async () => {
        await axios.get("http://localhost:22275/api/getStudentDetails")
            .then((response: any) => setDataList(response.data))
            .catch((error: any) => console.log(error));
    }

    dataListSample = dataList.map((x: Student) => <div><h1 key={x.id}  onClick={(e: any) => console.log(e)}>{x.firstName} {x.rollNumber}<span style={{display: "flex", alignItems: "center"}}>
        <button> Delete</button>
        </span></h1> </div>)

    const postStudentDetails = async () => {
        await axios.post("http://localhost:22275/api/postStudentDetails", student)
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error));
    }

    const deleteStudentDetail = async (id: string) => {
        await axios.delete(`http://localhost:22275/api/deleteStudentDetails/${id}`)
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error));
    }

    return (
        <div>
            <button onClick={() => getStudentData()}>GetData </button>
            <div>{dataListSample}</div>
            <form onSubmit={postStudentDetails}>
                <div>
                    <label>First Name: </label>
                    <input onChange={(e: any) => setStudentData({
                        ...student, firtName: e.target.value
                    })}></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input onChange={(e: any) => setStudentData({
                        ...student, lastName: e.target.value
                    })}></input>
                </div>
                <div>
                    <label>Roll Number: </label>
                    <input onChange={(e: any) => setStudentData({
                        ...student, rollNumber: e.target.value
                    })}></input>
                </div>
                <div>
                    <label>Class: </label>
                    <input onChange={(e: any) => setStudentData({
                        ...student, class: e.target.value
                    })}></input>
                </div>
                <div>
                    <label>Blood group: </label>
                    <input onChange={(e: any) => setStudentData({
                        ...student, bloodGroup: e.target.value
                    })}></input>
                </div>
                <div>
                    <label>DateOfBirth: </label>
                    <input onChange={(e: any) => setStudentData({
                        ...student, dateOfBirth: e.target.value
                    })}></input>
                </div>
                <div>
                    <label>Address: </label>
                    <input onChange={(e: any) => setStudentData({
                        ...student, address: e.target.value
                    })}></input>
                </div>
                <button type='submit'>Submit</button>
            </form >
        </div >
    )
}

export default GetDataFromApi