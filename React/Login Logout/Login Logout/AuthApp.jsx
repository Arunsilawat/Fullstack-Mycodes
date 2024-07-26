import { useContext } from "react";
import { LoginContaxt } from "./UserContaxt";
const AuthApp=()=>{
    const {user,Logout}=useContext(LoginContaxt)
    return(
        <>
        <h1>Welcome : {user.name}</h1>
        <button onClick={()=>{Logout()}}>Logout</button>
        </>
    )
}
export default AuthApp;