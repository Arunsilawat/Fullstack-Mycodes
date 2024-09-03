
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { changecolor } from "./ColorSlice";
const App=()=>{
   const result=useSelector((state)=>state.mycolor.bgcolor);
   const mydic=useDispatch();
   const [clr,setMyclr]=useState("");
   return(
      <>
      <h1>App</h1>
      Enter Color : <input type="text" onChange={(e)=>{setMyclr(e.target.value)}} />
      <button onClick={()=>{mydic(changecolor(clr))}}>Change</button>
      <div style={{width:"400px",height:"300px",backgroundColor:result}}></div>
      </>
   )
}
export default App;
