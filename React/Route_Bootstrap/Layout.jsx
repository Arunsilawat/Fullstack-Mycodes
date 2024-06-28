
import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
      <>
       <Link to="home">Home</Link>
       <Link to="about">About Us</Link>
       <Link to="contant">Contant</Link>

       <hr size="3" color="red"/>
       <Outlet/>
       <hr size="3" color="red"/>
       www.mycompny.com 2024
      </>
    )
  }
  
  export default Layout;