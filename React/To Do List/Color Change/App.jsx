import { useSelector,useDispatch } from "react-redux";
import { changecolor } from "./Colorslice";
import { useState } from "react";
const App=()=>{
    const finalcolor=useSelector((state)=>state.mycolorlist.mycolor);
    const mydic=useDispatch();
    const [clr,setClr]=useState("")
    return(
        <>
        <h1>Change Color</h1>
        <div style={{width:"500px",height:'200px',backgroundColor:finalcolor}}></div><br /><br />
        Enter Color : <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/>
        <button onClick={()=>{mydic(changecolor(clr))}}>Change color</button>
        </>
    )
}
export default App;