import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const NavbarComp = () => {
    const mycart=useSelector((state)=>state.mycart.cart);
    let datalength=mycart.length
    const navigate=useNavigate()
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{position:'sticky',top:'0',zIndex:'1'}}>
                <Container fluid >
                <Navbar.Brand href="#" ><img src={logo} alt="" style={{width:'150px'}} /></Navbar.Brand>
                
                    <Navbar.Collapse id="navbarScroll" > 
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px',margin:"auto",fontWeight:'bold',fontSize:'19px'}}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="shop">Shop</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link> 
                            <Nav.Link as={Link} to="about">About Us</Nav.Link>
                        </Nav>
                        <Form className="d-flex" >
                            <FaShoppingCart style={{fontSize:"20px",margin:'8px'}} onClick={()=>{navigate("/cartproduct")}} /> 
                            
                            {datalength>=1? <span id="tokri"> {datalength} </span>: ""}
                            <FaHeart style={{fontSize:"20px",margin:'8px'}} />
                         </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavbarComp;