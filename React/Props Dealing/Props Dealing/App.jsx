import Comp1 from "./Props Deling/Comp1";
import { useState } from "react";
import { createContext } from "react";
const myContext=createContext();
const App=()=>{
    const [user, setUser]=useState("ARUN")
    return(
        <>
        <h1>WelCome {user} </h1>
         
         <myContext.Provider value={{user}}>
         <Comp1 />
         </myContext.Provider>
        </>
    )
}
export default App;
export {myContext};