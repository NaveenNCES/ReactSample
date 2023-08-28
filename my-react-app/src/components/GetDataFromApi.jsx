import React, { Component } from 'react'
import axios from 'axios'

class GetDataFromApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            rollNumber: ''
        }
    }


    getStudentData() {
        let studentDetails
        axios.get("http://localhost:5139/api/getStudentDetails")
            .then(data => studentDetails = data)
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <h2></h2>
                <button onClick={() => this.getStudentData()}>GetData</button>
            </div>
        )
    }
}

export default GetDataFromApi
