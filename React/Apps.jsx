import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Dropdown from 'react-bootstrap/Dropdown';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Spinner from 'react-bootstrap/Spinner';

import Table from 'react-bootstrap/Table';



 

 import Collage from "./Collage";
const App=()=>{
  return(
    <>
 <h1>Cybrom Student </h1>
  <Collage/>
   </>
  )
}

export default App;


//----------------------------
const App=()=>{
  return(
    <>
 <h1>Welcome to Cybrom</h1>
 <div id="box1">
  <div id="box2">
    <div id="box3">
      <h1>Cybrom</h1>
    </div>
  </div>
 </div>
  
   </>
  )
}
//------------------------------


const App=()=>{
  return(
    <>
 <Button variant="primary">Primary</Button>
 <br />
 <Button variant="secondary">Secondary</Button>
 <br />
      <Button variant="success">Success</Button>
      <br />
      <Button variant="warning">Warning</Button>
      <br />
      <Button variant="danger">Danger</Button>
      <br />
      <Button variant="info">Info</Button>
      <br />
      <Button variant="light">Light</Button>
      <br />
      <Button variant="dark">Dark</Button>
   </>
  )
}


export default App;

// ----------------------------------------------
const App=()=>{
  return(
    <>
      
      <Container>
        <Alert variant='primary' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='danger' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='dark' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='info' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='primary' dismissible>
          This is a alert—check it out!
        </Alert>

        <Alert variant='primary' dismissible>
          This is a alert—check it out!
        </Alert>

      </Container>
       
   </>
  )
}

// ------------------------------------
const App=()=>{
  return(
    <>
    <h1>
     Example heading <Badge bg="secondary">New</Badge>
    </h1> 
    <h1>
        Example heading <Badge bg="dark">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="info">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="success">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="danger">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="info">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>

   </>
  )
}


export default App;
// ----------------------------------
const App=()=>{
  return(
    <>
<ButtonGroup aria-label="Basic example">
<Button variant="dark">Left</Button>
<Button variant="success">Middle</Button>
<Button variant="info">Right</Button>
</ButtonGroup>
   </>
  )
}


export default App;


// ----------------------------------------------

const App=()=>{
  return(
    <>
       <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </>
  )
}


export default App;

// ----------------------------------------------
const App=()=>{
  return(
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
         <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default App;

// -----------------------------------
const App=()=>{
  return(
    <>
     
<Spinner animation="border" variant="primary" />
<Spinner animation="border" variant="secondary" />
<Spinner animation="border" variant="success" />
<Spinner animation="border" variant="danger" />
<Spinner animation="border" variant="warning" />
<Spinner animation="border" variant="info" />
<Spinner animation="border" variant="light" />
<Spinner animation="border" variant="dark" />
<Spinner animation="grow" variant="primary" />
<Spinner animation="grow" variant="secondary" />
<Spinner animation="grow" variant="success" />
<Spinner animation="grow" variant="danger" />
<Spinner animation="grow" variant="warning" />
<Spinner animation="grow" variant="info" />
<Spinner animation="grow" variant="light" />
<Spinner animation="grow" variant="dark" />

    </>
  )
}

export default App;

//-------------------------------------------
const App=()=>{
  return(
    <>
       <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default App;