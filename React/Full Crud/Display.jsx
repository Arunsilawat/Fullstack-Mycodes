import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Display = () => {
    const [mydata, setMydata] = useState([]);
    const handledata = () => {
        let api = "http://localhost:3000/ragesrer"
        axios.get(api).then((res) => {
            setMydata(res.data)
        })
    }
    useEffect(() => {
        handledata()
    }, [])
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.userid}</td>
                    <td>{key.name}</td>
                    <td>{key.email}</td>
                    <td>{key.pass}</td>
                    <td>{key.repass}</td>
                </tr>
            </>
        )
    })
    return (
        <>
            <h1>Our Data Display</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pass</th>
                        <th>Repass</th>
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
