import { createContext,useState } from "react";


const myColorContaxt=createContext();
const ColorContact=({children})=>{
    const [color,setColor]=useState("pink")
    return(
        <>
           <h1>Color</h1>
           <myColorContaxt.Provider value={{color,setColor}}>
               {children}
           </myColorContaxt.Provider>
        </>
    )
}
export default ColorContact;
export {myColorContaxt};