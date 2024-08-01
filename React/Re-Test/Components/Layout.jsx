import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <div style={{backgroundColor:'blue'}}>
        <Link to="home" style={{textDecoration:'none',color:'white'}}>Home</Link> |
          <Link to="insert" style={{textDecoration:'none',color:'white'}}> Insert </Link> |
          <Link to="display" style={{textDecoration:'none',color:'white'}}> Display</Link> |
          <Link to="search" style={{textDecoration:'none',color:'white'}}> Search</Link> |
          <Link to="update" style={{textDecoration:'none',color:'white'}}> Update</Link> |
          <Link to="total" style={{textDecoration:'none',color:'white'}}> Total QTY</Link> |
          <Link to="contact" style={{textDecoration:'none',color:'white'}}> Contact Us</Link>
        </div>


          <Outlet/>
          <hr size="3" color="Black"/>
        </>
    )
}

export default Layout;