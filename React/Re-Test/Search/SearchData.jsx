import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

import React from 'react';
const SearchData=()=>{
    
  const [myproduct,setmyproduct]=useState("")
  const [mydata,setmydata]=useState([])

  const handlesearch =()=>{
    let url=`http://localhost:3000/data/?productqty=${myproduct}`
    axios.get(url).then((res)=>{
      setmydata(res.data)
    })
  }

  let ans;
  if(mydata.length>0){
   ans=mydata.map((key)=>{
    return(
      <>
            <tr style={{border:'2px solid black'}}>
            <td style={{border:'2px solid black'}}>{key.productname}</td>
            <td style={{border:'2px solid black'}}>{key.productqty}</td>
            <td style={{border:'2px solid black'}}>{key.netprice}</td>
            <td style={{border:'2px solid black'}}>{key.cousname}</td>
        </tr>
      </>
    )
  })}
  else{
     ans= <h1>Do data Found</h1>
  }

  return(
    <>
     <h1>Search My Data</h1>
     <input type="text" value={myproduct} onChange={(e)=>{setmyproduct(e.target.value)}} />
     <button onClick={handlesearch} style={{marginLeft:"10px",borderRadius:"10px",backgroundColor:"skyblue",marginBottom:"20px"}}>Search</button>
     <table style={{border:'2px solid black'}}>
            <tr style={{border:'2px solid black'}}>
                <th style={{border:'2px solid black'}}>Product Name</th>
                <th style={{border:'2px solid black'}}>Product QTY</th>
                <th style={{border:'2px solid black'}}>Net Price</th>
                <th style={{border:'2px solid black'}}>Customer Name</th>
            </tr>
            {ans}
        </table>
    </>
    )
}
export default  SearchData;