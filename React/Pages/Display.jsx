import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from 'axios';
const Display = () => {
    const [mydata, setMydata] = useState([])
    const DisplayData = () => {
        let url = "http://localhost:3000/employee"
        axios.get(url).then((res) => {
            setMydata(res.data)
        })
    }
    useEffect(() => {
        DisplayData()
    })
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.emp_id}</td>
                    <td>{key.name}</td>
                    <td>{key.department}</td>
                    <td>{key.salary}</td>
                </tr>
            </>
        )
    })
    return (
        <>
            <br />
            <center>
                <h1>Our Data Display</h1>
            </center>
            {/* ---------------------------------------------------------------------------------------------------------- */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </Table>
        </>
    )
}
export default Display;