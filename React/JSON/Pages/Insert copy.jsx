
import { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Insert=()=>{
 
  const [myinput,setMyinput]=useState({});
  const handalInput=(e)=>{
       let name=e.target.name
       let value=e.target.value
       setMyinput(values=>({...values,[name]:value}))
  }
  const  InputSubmit=()=>{
         let url="http://localhost:3000/cybrom"
         axios.post(url,myinput).then((res)=>{
              alert("Posted")
         }).catch((err)=>{
             alert("Error")
         })
  }

  return(
    <>
    <h1>Insert Data</h1>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Roll No</Form.Label>
        <Form.Control type="text" name="rollno" value={myinput.rollno} onChange={handalInput} placeholder="Enter Roll No" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={myinput.name} onChange={handalInput} placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city" value={myinput.city} onChange={handalInput}  placeholder="Enter City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fees</Form.Label>
        <Form.Control type="text" name="fees" value={myinput.fees} onChange={handalInput} placeholder="Enter Fees" />
      </Form.Group>
      <Button variant="primary" onClick={InputSubmit} >Submit</Button>
    
    </>
  )
}

export default Insert ;