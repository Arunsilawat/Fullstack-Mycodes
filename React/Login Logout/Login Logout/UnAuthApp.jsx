import { useState } from "react";
import { useContext } from "react";
import { LoginContaxt } from "./UserContaxt";
const UnAuthApp=()=>{
    const {Login}=useContext(LoginContaxt)
    const [nm,setNm]=useState("")
    return(
        <>
        Enter Name : <input type="text" value={nm} onChange={(e)=>{setNm(e.target.value)}} />
        <button onClick={()=>{Login(nm)}}>Login</button>
        </>
    )
}
export default UnAuthApp;