

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';




const Layout=()=>{
    return(
        <>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cybrom</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={(Link)} to="home">Home</Nav.Link>
            <Nav.Link as={(Link)} to="display">Display</Nav.Link>
            <Nav.Link as={(Link)} to="insert">Insert</Nav.Link>
            <Nav.Link as={(Link)} to="contact">Contact Us</Nav.Link>
            <Nav.Link as={(Link)} to="search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='maindiv'> 
        <Outlet/>
      </div>
       <hr color='red' />
       <div className='footer'>
        Footer

       </div>
        </>
    )
}
export default Layout;