import { Children, createContext,useState } from "react";
const myLoginContext=createContext();
const LoginContext=({children})=>{
    const [user,setUser]=useState({name:"",auth:false})
    const login=(nm)=>{
        setUser({name:nm,auth:true})
    }
    const logout=(nm)=>{
        setUser({name:"",auth:false})
    }
    return(
        <>
        <myLoginContext.Provider value={{user,login,logout}}>
            {children}
        </myLoginContext.Provider>
           
        </>
    )
}
export default  LoginContext;
export {myLoginContext};