import { useContext } from "react";
import { myColorContaxt } from "./ColorContaxt";
import { useState } from "react";
const App=()=>{
    const {color,setColor}=useContext(myColorContaxt)
    const [txt,setText]=useState("")
    return(
        <>
        <h1>Hello App</h1>
        Enter Color: <input type="text" value={txt} onChange={(e)=>{setText(e.target.value)}} />
        <button onClick={()=>{setColor(txt)}}>Change</button><br /><br />
        <div style={{width:400,border:'2px solid black',height:200,backgroundColor:color}}>

        </div>
        </>
    )
}
export default App;