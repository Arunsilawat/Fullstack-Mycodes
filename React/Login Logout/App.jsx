import { useContext } from "react";
import { myLoginContext } from "./Login Logout/LoginContext";
import UnauthUser from "./Login Logout/UnauthUser";
import AuthUser from "./Login Logout/AuthUser";
const App=()=>{
    const {user}=useContext(myLoginContext)
    return(
        <>
        <h1>My Login App</h1>
       
         {user.auth ?  <AuthUser/> : <UnauthUser/>}
        </>
    )
}
export default App;