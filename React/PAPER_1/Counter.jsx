

import { useState } from "react";


const Counter=()=>{
    const [mydata,setMydata]=useState(0)
    const inc=()=>{
        setMydata(mydata+15)
    }
    const dic=()=>{
        setMydata(mydata-15)
    }
    return(
        <>
        <h1>{mydata}</h1>
        <button onClick={inc}>increment</button>
        <button onClick={dic}>dicrement</button>
        </>
    )
  }
  export default Counter;