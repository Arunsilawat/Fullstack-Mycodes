import axios from "axios";
import { useState } from "react";
const Product=()=>{
    const [myinput,setInput]=useState({})
    const handleInput=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setInput(values=>({...values,[name]:value}))
    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/data"
        axios.post(api,myinput).then((ress)=>{
            alert("Successfully Submited")
        })
    }
    return(
        <>
        <h1>Insert Data</h1>
        Enter Product Name : <input type="text" name="productname" value={myinput.productname} onChange={handleInput} /><br /><br />
        Enter Product Qty : <input type="text" name="productqty" value={myinput.productqty} onChange={handleInput} /><br /><br />
        Enter Net Price : <input type="text" name="netprice" value={myinput.netprice} onChange={handleInput} /><br /><br />
        Enter Customer Name : <input type="text" name="cousname" value={myinput.cousname} onChange={handleInput} /><br /><br />
        <button onClick={handleSubmit}>Submit</button>
         </>
    )
}
export default Product;