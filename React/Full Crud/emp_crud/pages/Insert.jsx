import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
const Insert = () => {

    const [input, setInput] = useState({})



    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let url = "http://localhost:3000/employee"

        axios.post(url, input).then((res) => {
            alert("Data succesfully submited!!!");
        }).catch((err) => {
            alert("Error in Inserting!!")
        });

    }

    return (
        <>
        <br />
        <Container style={{width:'500px'}}>
            <h1>Insert Our Data</h1><br />
            <div className='divcenter'>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Employee Id</Form.Label>
                        <Form.Control type="text" name="emp_id" value={input.emp_id} onChange={handleInput} placeholder="Enter emp_id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} placeholder="Enter name" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Department </Form.Label>
                        <Form.Control type="text" name="department" value={input.department} onChange={handleInput} placeholder="Enter department" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary </Form.Label>
                        <Form.Control type="text" name="salary" value={input.salary} onChange={handleInput} placeholder="Enter salary" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
            </Container>
        </>
    )
}

export default Insert;