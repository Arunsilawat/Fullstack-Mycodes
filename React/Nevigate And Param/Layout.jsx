import { Outlet,Link } from "react-router-dom";



const Layout=()=>{
    return(
        <>

        <Link to="home" style={{textDecoration:'none',color:'black'}}>Home | </Link>
        <Link to="about" style={{textDecoration:'none',color:'black'}}>About Us | </Link>
        <Link to="contact/500" style={{textDecoration:'none',color:'black'}}>Contact Us</Link>
        <hr color="pink" size="3"/>
        <Outlet/>
        <hr color="pink" size="3"/>
        <h1>www.arunsilawat.com</h1>
        </>
    )
}

export default Layout;