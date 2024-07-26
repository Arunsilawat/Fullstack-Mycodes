import { createContext,useState } from "react";


const LoginContaxt=createContext()
const UserContaxt=( {children})=>{
    const [user,setUser]=useState({name:"",auth:false})
    const Login=(nm)=>{
        setUser({name:nm,auth:true})
    }
    const Logout=()=>{
        setUser({name:"",auth:false})
    }
    return(
        <>
          <LoginContaxt.Provider value={{user,Login,Logout}}>
            {children}
          </LoginContaxt.Provider>
        </>
    )
}
export default UserContaxt;
export {LoginContaxt};