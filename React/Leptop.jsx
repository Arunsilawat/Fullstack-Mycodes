// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// //----------------------- Navbar ---------------------------------------
// import Carousel from 'react-bootstrap/Carousel';
// /* ---------------------------------carousel end ------------------------------------- */
// import Card from 'react-bootstrap/Card';
// //--------------------------- card end-----------------------------------
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// //-----------------------------------------------------------------
// // import Button from 'react-bootstrap/Button';
// // import Col from 'react-bootstrap/Col';
// // import Form from 'react-bootstrap/Form';
// // import Row from 'react-bootstrap/Row';




// const App=()=>{
//   return(
//     <>
//           <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Arun Silawat</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
// {/* ----------------------------Navbar end ---------------------------------------- */}
// <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//       <img src="public/lep1.jpg"  width="100%" height="500"/>
//         <Carousel.Caption>
//           <h5>HP Leptop</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="public/lep2.jpg"  width="100%" height="500"/>        <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="public/nav.avif"  width="100%" height="500"/>
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     <br />
//     <br />
// {/* ---------------------------------carousel end ------------------------------------- */}




//     <Container fluid="md">
//       <Row>
//       <Col>
//          <Card style={{ width: '18rem' }}>
//          <img src="public/card1.jpg"  width="100%" height="200"/>
//          <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//           Some quick example text to build.
//          </Card.Text>
//          </Card.Body>
//          <Card.Body>
//          <Card.Link href="#">Card Link</Card.Link>
//          <Card.Link href="#">Another Link</Card.Link>
//          </Card.Body>
//          </Card>
//        </Col>

//        <Col>
//          <Card style={{ width: '18rem' }}>
//          <img src="public/card2.png"  width="100%" height="200"/>
//          <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//           Some quick example text to build.
//          </Card.Text>
//          </Card.Body>
//          <Card.Body>
//          <Card.Link href="#">Card Link</Card.Link>
//          <Card.Link href="#">Another Link</Card.Link>
//          </Card.Body>
//          </Card>
//        </Col>


//        <Col>
//          <Card style={{ width: '18rem' }}>
//          <img src="public/card3.webp"  width="100%" height="200"/>
//          <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//           Some quick example text to build.
//          </Card.Text>
//          </Card.Body>
//          <Card.Body>
//          <Card.Link href="#">Card Link</Card.Link>
//          <Card.Link href="#">Another Link</Card.Link>
//          </Card.Body>
//          </Card>
//        </Col>
  
//        <Col>
//          <Card style={{ width: '18rem' }}>
//          <img src="public/card4.jpeg"  width="100%" height="200"/>
//          <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//           Some quick example text to build.
//          </Card.Text>
//          </Card.Body>
//          <Card.Body>
//          <Card.Link href="#">Card Link</Card.Link>
//          <Card.Link href="#">Another Link</Card.Link>
//          </Card.Body>
//          </Card>
       </Col>

       <Col>
         <Card style={{ width: '18rem' }}>
         <img src="public/card5.jpg"  width="100%" height="200"/>
         <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
          Some quick example text to build.
         </Card.Text>
         </Card.Body>
         <Card.Body>
         <Card.Link href="#">Card Link</Card.Link>
         <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
         </Card>
       </Col>

       <Col>
         <Card style={{ width: '18rem' }}>
         <img src="public/card6.webp"  width="100%" height="200"/>
         <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
          Some quick example text to build.
         </Card.Text>
         </Card.Body>
         <Card.Body>
         <Card.Link href="#">Card Link</Card.Link>
         <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
         </Card>
       </Col>
      </Row>
      
    </Container>
    <br />
    <br />
    {/* --------------------------------card end ----------------------------- */}

     <Container>
     <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
//         </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

     </Container>
     
    </>
  )
}
export default App;


//----------------------------------------------

