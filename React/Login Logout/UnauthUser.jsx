import { useState,useContext } from "react";
import { myLoginContext } from "./LoginContext";
const UnauthUser=()=>{
    const {login}=useContext(myLoginContext)
    const [nm,setNm]=useState("");
    return(
        <>
           <h3>User Login System</h3>
           Enter Name :  
           <input type="text" value={nm} onChange={(e)=>{setNm(e.target.value)}}/>
           <button onClick={()=>{login(nm)}}>Login</button>
        </>
    )
}
export default UnauthUser;