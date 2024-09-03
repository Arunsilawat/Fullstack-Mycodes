import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Update=()=>{
  const [mydata,setmydata]=useState([])
  const [editData, setEditData]=useState({});
  const loadData=()=>{
    let url="http://localhost:3000/employee";
    axios.get(url).then((res)=>{
      setmydata(res.data)
    })
  }
  useEffect(()=>{
    loadData()
  },[])
  const mydel=(myid)=>{
    let url=`http://localhost:3000/employee/${myid}`

    axios.delete(url).then((res)=>{
      alert("DATA Deleted")
      loadData()
    })
  }
  const myEdit=(myid)=>{
    let url=`http://localhost:3000/employee/${myid}`
    axios.get(url).then((res)=>{
      setEditData(res.data);
      // console.log(res.data);
    });
  }
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setEditData(values=>({...values, [name]:value}));
  }

  const handleSubmit=()=>{
    let url=`http://localhost:3000/employee/${editData.id}`
    axios.put(url,editData).then(()=>{
      alert("Record Successfully updated!!!");
      loadData();
    })
  }

  const ans=mydata.map((key)=>{
    return(
      <>
         <tr>
          <td>{key.emp_id}</td>
          <td>{key.name}</td>
          <td>{key.department}</td>
          <td>{key.salary}</td>
          <td width="10px"><button style={{backgroundColor:"gray",color:"white",borderRadius:"20px"}} onClick={()=>{mydel(key.id)}}>Delete</button></td>
          <td width="10px"><button style={{backgroundColor:"red",color:"white",borderRadius:"20px"}} onClick={()=>{myEdit(key.id)}}>Edit</button></td>
         </tr>
      </>
    )
  })
    return(
        <>
          <h1> Update Employee Record</h1>
          <Table striped bordered hover>
          <thead>
             <tr>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
             </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>

          </Table>
          <br />
          <div style={{marginBottom:"20px"}}>
          Employee ID<input type="text" name="emp_id" value={editData.emp_id} onChange={handleInput}></input>
          Name<input type="text" name="name" value={editData.name} onChange={handleInput}></input>
          Department<input type="text" name="department" value={editData.department} onChange={handleInput}></input>
          Salary<input type="text" name="salary" value={editData.salary} onChange={handleInput}></input>

          <button onClick={handleSubmit} style={{marginLeft:"20px",backgroundColor:"red",color:"white"}}>Update Save!!</button>
          </div>
          
        </>
    )
}
export default Update;



 