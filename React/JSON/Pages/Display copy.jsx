
import { useState, useEffect } from "react";
import axios from "axios";

import Table from 'react-bootstrap/Table';


const Display = () => {
  const [mydata, setMydata] = useState([]);
  const loaddata = () => {
    let url = "http://localhost:3000/cybrom";
    axios.get(url).then((res) => {
      setMydata(res.data);
    })
  }
  useEffect(() => {
    loaddata()
  })
  let ans = mydata.map((key) => {
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
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