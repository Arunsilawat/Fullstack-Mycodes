import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const App = () => {

    const [mydata, setMydata] = useState([]);

    const loadData = () => {
        let api = "http://localhost:3000/student";
        axios.get(api).then((res) => {
            setMydata(res.data)
        })
    }

    useEffect(() => {
        loadData()
    }, [])

    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                </tr>
            </>
        )
    })

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                    </tr>
                    {ans}
                </thead>
            </Table>
        </>
    )
}
export default App;