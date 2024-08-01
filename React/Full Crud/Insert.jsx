import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const Insert = () => {
    const [myinput,setInput]=useState({});
    const handleInput=(e)=>{
       let name=e.target.name
       let value=e.target.value
       setInput(values=>({...values,[name]:value}))
    }
    const handlesubmit=()=>{
        let api="http://localhost:3000/ragesrer"
        axios.post(api,myinput).then((res)=>{
            alert("Data Successfully Saved !!")
        })
    }
    return (
        <>
            <Container style={{ width: "50%" }}>
                <h1>Insert User Data</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>User Id</Form.Label>
                    <Form.Control type="text" name="userid" value={myinput.userid} onChange={handleInput} placeholder="Enter User Id" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={myinput.name} onChange={handleInput} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="email" name="email" value={myinput.email} onChange={handleInput} placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="passward" name="pass" value={myinput.pass} onChange={handleInput} placeholder="Enter Passward" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control type="password" name="repass" value={myinput.repass} onChange={handleInput} placeholder="Re-Password" />
                </Form.Group>
                <Button variant="warning" onClick={handlesubmit}>Submit</Button>
            </Container>
        </>
    )
}
export default Insert;
