

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { Container,Row,Col} from "react-bootstrap";


// const App=()=>{
//     return(

//         <>
//         <Container className="text-center border p-3 bg-info">
//              <h1>Welcome to Cybrom</h1>
//         </Container>
//         <Container className="border p-5 text-center">
//             <Row>
//                 <Col className="border p-5 bg-info fs-1 text-white"  text-white>
//                     Hellow we are developer
//                 </Col>
//                 <Col className="border bg-danger p-5 fs-1 text-white">
//                   Welcome to Cybrom
//                 </Col>
//             </Row>
//         </Container>

//         <Container className="bg-info p-4 ">
//               <Row>
//                   <Col md={3} className="bg-danger fs-3 text-white border text-center p-5">
//                      I am from bhopal
//                   </Col>
//                   <Col className="bg-success fs-3 text-white border text-center p-5">
//                      I am from bhopal
//                   </Col>

//                   <Col className="bg-dark fs-3 text-white border text-center p-5">
//                      I am from bhopal
//                   </Col>

//               </Row>
//         </Container>

        
//         <Container className="bg-info p-4 ">
//               <Row>
//                   <Col md={3} className="bg-danger fs-3 text-white border text-center p-5">
                     
//                   </Col>
//                   <Col className="bg-success fs-3 text-white border text-center p-5">
                     
//                   </Col>

//                   <Col className="bg-dark fs-3 text-white border text-center p-5">
//                      I
//                   </Col>

//               </Row>
//               <br />
//               <Row>
//                   <Col md={6} className="bg-danger fs-3 text-white border text-center p-5">
                     
//                   </Col>
//                   <Col md={3} className="bg-success fs-3 text-white border text-center p-5">
                     
//                   </Col>

//                   <Col md={3} className="bg-dark fs-3 text-white border text-center p-5">
//                      I
//                   </Col>

//               </Row>
//         </Container>

       
//         </>
//     )
// }
// export default App;


//------------------------
import myimg1 from "./images/r1.jpg";
import myimg2 from "./images/r2.jpg";
import myimg3 from "./images/r3.jpg";



const App=()=>{
    return(
        <>
        {/* <img src={myimg1} width="300" />
        <img src={myimg2} width="250" />
        <img src={myimg3} width="250" />
        <br />
        <img src="public/a1.jpg" width="300" />
        <img src="public/a2.jpg" width="300" />
        <img src="public/a3.jpg" width="300" /> */}
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Carousel>
      <Carousel.Item>
      <img src="public/b1.avif" width="100%" height="600"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/b2.avif" width="100%" height="600" />
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="public/b3.avif" width="100%" height="600"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<br />
<br />


    <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
<img src="public/b1.avif" width="100%" height="300"/>
<Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
<img src="public/b2.avif" width="100%" height="300"/>
<Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
<img src="public/b3.avif" width="100%" height="300"/>
<Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        
      </Row>
    </Container>

        </>
    )
}

export default App;