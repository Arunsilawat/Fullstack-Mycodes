


import axios from "axios"
import { useState,useEffect } from "react"

const Delete=()=>{
    const [mydata,setMydata]=useState([])
    const Getdata=()=>{
        let api="http://localhost:3000/data"
        axios.get(api).then((res)=>{
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        Getdata()
    })
    const del=(id)=>{
        let api=`http://localhost:3000/data/${id}`
        axios.delete(api).then(()=>{
            alert("Successfully Deleted")
            Getdata()
        })
    }
    const ans=mydata.map((key)=>{
       return(
        <> 
        <tr style={{border:'2px solid black'}}>
            <td style={{border:'2px solid black'}}>{key.productname}</td>
            <td style={{border:'2px solid black'}}>{key.productqty}</td>
            <td style={{border:'2px solid black'}}>{key.netprice}</td>
            <td style={{border:'2px solid black'}}>{key.cousname}</td>
            <button onClick={()=>{del(key.id)}}>Delete</button>
        </tr>
        
        </>
       )
    })
    return(
        <>
        <h1>Data Display</h1>
        <table style={{border:'2px solid black'}}>
            <tr style={{border:'2px solid black'}}>
                <th style={{border:'2px solid black'}}>Product Name</th>
                <th style={{border:'2px solid black'}}>Product QTY</th>
                <th style={{border:'2px solid black'}}>Net Price</th>
                <th style={{border:'2px solid black'}}>Customer Name</th>
                <th>Delete</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Delete;