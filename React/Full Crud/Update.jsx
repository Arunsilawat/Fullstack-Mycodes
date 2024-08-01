import axios from "axios";
import { useState,useEffect } from "react";

const Update=()=>{
    const [mydata,setMydata]=useState([])
    const [editData,setEditData]=useState({})

    const Display=()=>{
        let url="http://localhost:3000/ragesrer"
        axios.get(url).then((res)=>{
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        Display()
    })
    const mydelete=(id)=>{
       let url= `http://localhost:3000/ragesrer/${id}`
       axios.delete(url).then((res)=>{
             alert("Successfully Deleted")
             Display()
       })
    } 
    const myedit=(id)=>{
      let url= `http://localhost:3000/ragesrer/${id}`
      axios.get(url).then((res)=>{
        setEditData(res.data)
        Display()
      })
    }
    const handleInput=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setEditData(values=>({...values,[name]:value}))
    }
    const handlesubmit=()=>{
        let url= `http://localhost:3000/ragesrer/${editData.id}`
        axios.put(url,editData).then((res)=>{
            alert("Successfully Updated")
            Display()
        })
    }
    const ans=mydata.map((key)=>{
          return(
            <>
            <tr style={{border:'1px solid black'}}>
                <td style={{border:'1px solid black'}}>{key.userid}</td>
                <td style={{border:'1px solid black'}}>{key.name}</td>
                <td style={{border:'1px solid black'}}>{key.email}</td>
                <td style={{border:'1px solid black'}}>{key.pass}</td>
                <td style={{border:'1px solid black'}}>{key.repass}</td>
               
                <td>
                <a href="#">
                    <button onClick={()=>{myedit(key.id)}}>Edit</button>
                </a>
                </td>
                <td>
                <a href="#">
                    <button onClick={()=>{mydelete(key.id)}}>Delete</button>
                </a>
                </td>
              
            </tr>
            </>
          )
    })
    return(
        <>
        <h1>Update Function</h1>
         <table style={{border:'1px solid black',width:'90%'}}>
            <tr style={{border:'1px solid black'}}>
                <th style={{border:'1px solid black'}}>User Id</th>
                <th>Name</th>
                <th style={{border:'1px solid black'}}>Email</th>
                <th style={{border:'1px solid black'}}>Pass</th>
                <th style={{border:'1px solid black'}}>Re-Pass</th>
                <th style={{border:'1px solid black'}}>Update</th>
            </tr>
            {ans}
         </table>

         <hr />
         Enter User Id : <input type="text" name="userid" value={editData.userid} onChange={handleInput} /><br /><br />
         Enter Name    : <input type="text" name="name" value={editData.name} onChange={handleInput}/><br /><br />
         Enter Email   : <input type="text" name="email" value={editData.email} onChange={handleInput}/><br /><br />
         Enter Pass    : <input type="text" name="pass" value={editData.pass} onChange={handleInput}/><br /><br />
         Enter Re-Pass : <input type="text" name="repass" value={editData.repass} onChange={handleInput}/><br /><br />
         <button onClick={handlesubmit}>Update</button>
        </>
    )
}
export default Update;