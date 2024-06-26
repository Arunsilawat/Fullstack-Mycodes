import { Container,Row,Col} from "react-bootstrap";


const App=()=>{
    return(

        <>
        <Container className="text-center border p-3 bg-info">
             <h1>Welcome to Cybrom</h1>
        </Container>
        <Container className="border p-5 text-center">
            <Row>
                <Col className="border p-5 bg-info fs-1 text-white"  text-white>
                    Hellow we are developer
                </Col>
                <Col className="border bg-danger p-5 fs-1 text-white">
                  Welcome to Cybrom
                </Col>
            </Row>
        </Container>

        <Container className="bg-info p-4 ">
              <Row>
                  <Col md={3} className="bg-danger fs-3 text-white border text-center p-5">
                     I am from bhopal
                  </Col>
                  <Col className="bg-success fs-3 text-white border text-center p-5">
                     I am from bhopal
                  </Col>

                  <Col className="bg-dark fs-3 text-white border text-center p-5">
                     I am from bhopal
                  </Col>

              </Row>
        </Container>

        
        <Container className="bg-info p-4 ">
              <Row>
                  <Col md={3} className="bg-danger fs-3 text-white border text-center p-5">
                     
                  </Col>
                  <Col className="bg-success fs-3 text-white border text-center p-5">
                     
                  </Col>

                  <Col className="bg-dark fs-3 text-white border text-center p-5">
                     I
                  </Col>

              </Row>
              <br />
              <Row>
                  <Col md={6} className="bg-danger fs-3 text-white border text-center p-5">
                     
                  </Col>
                  <Col md={3} className="bg-success fs-3 text-white border text-center p-5">
                     
                  </Col>

                  <Col md={3} className="bg-dark fs-3 text-white border text-center p-5">
                     I
                  </Col>

              </Row>
        </Container>

       
        </>
    )
}
export default App;