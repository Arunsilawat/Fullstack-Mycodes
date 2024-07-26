import { useContext } from "react";
import AuthApp from "./Login Logout/AuthApp";
import UnAuthApp from "./Login Logout/UnAuthApp";
import { LoginContaxt } from "./Login Logout/UserContaxt";
const App=()=>{
    const {user}=useContext(LoginContaxt)
    return(
        <>
        {/* <h1>Welcome : {user.name}</h1> */}
        {user.auth ? <AuthApp/> : <UnAuthApp/>}
        </>
    )
}
export default App;