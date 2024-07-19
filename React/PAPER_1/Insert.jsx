import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const Insert=()=>{

const [input, setInput]= useState({})



const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);

}


const handleSubmit=(e)=>{
    e.preventDefault();
    let url="http://localhost:3000/Employee";

   axios.post(url, input).then((res)=>{
    alert("Data succesfully submited!!!");
   }).catch((err)=>{
    console.log("Error in Inserting!!")
   });

}

    return(
        <>
        <div className='divcenter'>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>emp_id</Form.Label>
        <Form.Control type="text" name="rollno" value={input.emp_id}   onChange={handleInput} placeholder="Enter emp_id" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name}  onChange={handleInput} placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>designation</Form.Label>
        <Form.Control type="text" name="city" value={input.designation}  onChange={handleInput} placeholder="Enter designation" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>department </Form.Label>
        <Form.Control type="text" name="department" value={input.fees}  onChange={handleInput} placeholder="Enter department" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>department </Form.Label>
        <Form.Control type="text" name="salary" value={input.salary}  onChange={handleInput} placeholder="Enter salary" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}
 
export default Insert;