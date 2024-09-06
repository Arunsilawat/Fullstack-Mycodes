import { useSelector,useDispatch } from "react-redux";
import { changecolor } from "./ThemeChangeSlice";
import { useState } from "react";
const ThemeChangeApp=()=>{
    const result=useSelector((state)=>state.themechange.bgcolor);
    const mydic=useDispatch();
    const [myclr,setMyclr]=useState("");
    return(
        <>
        <h1>Theme Change App</h1>
        <div style={{width:"400px",height:"300px",backgroundColor:result}}></div>
        Enter Color : <input type="text" value={myclr} onChange={(e)=>{setMyclr(e.target.value)}} />
        <button onClick={()=>{mydic(changecolor(myclr))}}>Change Theme </button>
        </>
    )
}
export default ThemeChangeApp;