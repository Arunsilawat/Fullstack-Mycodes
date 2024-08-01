import axios from "axios"
import { useState,useEffect } from "react"

const Datadisplay=()=>{
    const [mydata,setMydata]=useState([])
    const Getdata=()=>{
        let api="http://localhost:3000/data"
        axios.get(api).then((res)=>{
            setMydata(res.data)
        })
    }
    let total=0;
    let sum=0;
    useEffect(()=>{
        
        Getdata()
       
    })
    const ans=mydata.map((key)=>{
        total=total+1
         sum=sum+key.netprice
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
            </tr>
            {ans}
        </table>
        <hr size="2" color="black"/>
        <h1>Total Product : {total}</h1>
        <h1>Total Price : {sum}</h1>
        </>
    )
}
export default Datadisplay