import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import deling from "../images/delete.webp"
import eding from "../images/update1.jpg"

const Update = () => {
    const [mydata, setMydata] = useState([])
    const [Editdata,setEditdata]=useState({})
    const handledata = () => {
        let url = "http://localhost:3000/cybrom"
        axios.get(url).then((res) => {
            setMydata(res.data)
        })
    }
    useEffect(() => {
        handledata()
    }, [])
    const mydel=(myid)=>{
      let url=`http://localhost:3000/cybrom/${myid}`
      axios.delete(url).then(()=>{
        alert("Succesfully Deleted !!!")
        handledata()
      })
    }
    const myEd=(myid)=>{
        let url=`http://localhost:3000/cybrom/${myid}`
        axios.get(url).then((res)=>{
            setEditdata(res.data)
            console.log(res.data)
        });
     }

     const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setEditdata(values=>({...values,[name]:value}));
     }
     
     const handlesubmit=()=>{
      let url=`http://localhost:3000/cybrom/${Editdata.id}`
      axios.put(url.Editdata).then(()=>{
        alert("Successfully Updated !!")
        handledata()
      })
     }

    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                    <th>
                    <a href="">
                       <img src={eding} alt="" width={35}  onClick={()=>{myEd(key.id)}}/>
                        </a>                        
                       <a href="">
                       <img src={deling} alt="" width={40} onClick={()=>{mydel(key.id)}} />
                        </a>                        
                    </th>
                </tr>
            </>
        )
    })
    return (
        <>
            <h1>Update</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
                <br />
                <input type="hidden" name="recid" value={myEd.id} />
                <br />
                Enter Roll No: <input type="text" name="rollno" value={myEd.rollno} onChange={handleInput} />
                <br />
                Enter Name: <input type="text" name="name" value={myEd.name} onChange={handleInput} />
                <br />
                Enter City: <input type="text" name="city" value={myEd.city} onChange={handleInput} />
                <br />
                Enter Fees: <input type="text" name="fees" value={myEd.fees} onChange={handleInput} />
                <br />
                <button onClick={handlesubmit}>Update Data</button>
            </Table>
        </>
    )
}
export default Update;