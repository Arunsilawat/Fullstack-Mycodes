import { useContext } from "react";
import { myLoginContext } from "./LoginContext";

const AuthUser=()=>{
    const {user,logout}=useContext(myLoginContext);
    return(
        <>
           <h1>Welcome : {user.name}</h1>
           <button onClick={()=>{logout()}}>Logout</button>
        </>
    )
}
export default AuthUser;