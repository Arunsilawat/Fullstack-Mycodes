import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "./ColoreSlice";
const App=()=>{
    const mycllr=useSelector((state)=>state.mycolor.bgcolor)
    const mydic=useDispatch();
    const [clr,setClr]=useState("");
    return(
        <>
        Enter Your Color <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/>
        <button onClick={()=>{mydic(changeColor(clr))}}>Change Color</button>
        <div style={{width:"500px",height:"300px",backgroundColor:mycllr}}></div>
        </>
    )
}
export default App;