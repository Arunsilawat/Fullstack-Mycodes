import { Outlet } from "react-router-dom";
import Top from "./Pages/Navbar";


const Layout=()=>{
    return(
        <>
        <Top/>
        <Outlet/>
        
        </>
    )
}
export default Layout;