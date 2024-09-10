
import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
      <>
       <div style={{backgroundColor:"blue",color:"white",height:'30px'}}>
       <Link to="home" style={{color:"white",textDecoration:"none"}}>Home</Link> |
       <Link to="counter" style={{color:"white",textDecoration:"none"}}> Counter App</Link> |
       <Link to="theme" style={{color:"white",textDecoration:"none"}}> Theme Change App</Link> |
       <Link to="todo" style={{color:"white",textDecoration:"none"}}> ToDoList App</Link> |
       <Link to="contact" style={{color:"white",textDecoration:"none"}}> Contact Us</Link>
       </div>
       <hr size="3" color="red"/>
       <Outlet/>
       <hr size="3" color="red"/>
       www.mycompny.com 2024
      </>
    )
  }
  
  export default Layout;