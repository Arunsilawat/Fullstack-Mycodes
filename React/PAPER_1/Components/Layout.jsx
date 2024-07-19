import { Navbar } from "react-bootstrap";
import { Link,Outlet } from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <div style={{backgroundColor:'blue',padding:10}}>
        <Link Link to="home" style={{textDecoration:'none' ,color:'white'}}>Home |</Link> 
        <Link Link to="about" style={{textDecoration:'none' ,color:'white'}} > About |</Link> 
        <Link Link to="services" style={{textDecoration:'none' ,color:'white'}} > Services |</Link> 
        <Link Link to="placement" style={{textDecoration:'none' ,color:'white'}} > Placemenet</Link> |
        <Link Link to="gallery" style={{textDecoration:'none' ,color:'white'}} > Gallery |</Link> 
        <Link Link to="contact" style={{textDecoration:'none' ,color:'white'}} > Contact Us</Link>
        </div>
        <hr size="3" color="red" />
        <Outlet/>
        <hr size="3" color="red" />
        <h1>www.arunsilawat.com</h1>
       
       
    
       
        </>
    )
}
export default Layout;