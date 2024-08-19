import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import hero from "../images/h1.webp"
import hero1 from "../images/h2.jpg"
import hero2 from "../images/h3.jpg"
import ss1 from "../images/s1.jpg"
import ss2 from "../images/s2.jpg"
import ss3 from "../images/s3.webp"
import ss4 from "../images/s4.webp"



import Card from 'react-bootstrap/Card';
import { TbBackground } from 'react-icons/tb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdPayment } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { GrDeliver } from "react-icons/gr";
import { IoTimerOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { addcart } from './cartSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const Dispatch=useDispatch();
    const [mydata, setMydata] = useState([]);
    const addData=(eid,nm,dis,price,img)=>{
        Dispatch(addcart({id: eid, name:nm, images:img, description:dis, price:price}))
    }
    const loadData = () => {
        let api = "http://localhost:3000/product";
        axios.get(api).then((res) => {
            setMydata(res.data)
        })
    }
    useEffect(() => {
        loadData()
    })
    const ans = mydata.map((key) => {
        return (
            <>
                <Card style={{ width: "250px", marginLeft: "10px", marginRight: "10px", marginBottom: "20px" }}>
                    <Card.Img variant="top" src={"src/images/"+key.images} style={{ height: "250px" }} />
                    <Card.Body>
                        <Card.Title style={{ color: "blue", fontSize: "14px" }}></Card.Title>
                        <Card.Text>
                            {key.description}
                            <h5 style={{ color: "red" }}> Price : {key.price} </h5>
                        </Card.Text>
                        <Button variant="primary" onClick={()=>{addData(key.id,key.name,key.description,key.price,key.images)}} >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </>
        )
    })
    return (
        <>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img src={hero2} alt="" style={{ width: '100%', height: '500px' }} />
                    <Carousel.Caption>
                        <h1>I PHONE PRO</h1>

                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="primary">SHOW NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={hero1} alt="" style={{ width: '100%', height: '500px' }} />
                    <Carousel.Caption >
                        <h3 style={{ color: 'black', fontWeight: 'bold' }}>And Then The Pro Comes</h3>
                        <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant="primary">SHOW NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={hero} alt="" style={{ width: '100%', height: '500px' }} />
                    <Carousel.Caption>
                        <h1 style={{ color: 'black', fontWeight: 'bold' }}>I PHONE 15</h1>
                        <p style={{ color: 'black' }}>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        <Button variant="primary">SHOW NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel><br /><br />
            {/* ------------------------------------------------hero end------------------------------------------------------------- */}


            <Container>
                <Row>
                    <Col>
                        <Card
                            style={{ width: '250px', height: '200px', backgroundColor: "white" }}
                            className="mb-2"
                        >

                            <center>
                                <Card.Header></Card.Header><br />
                                <MdPayment style={{ fontSize: "30px", fontWeight: "bold" }} />
                                <Card.Body>
                                    <Card.Title> Safe Payment </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on  the card title <br />
                                        bulk of the <br />
                                    </Card.Text>
                                </Card.Body>
                            </center>

                        </Card>
                    </Col>

                    <Col>
                        <Card
                            style={{ width: '250px', height: '200px', backgroundColor: "white" }}
                            className="mb-2"
                        >

                            <center>
                                <Card.Header></Card.Header><br />
                                <LuShoppingBag style={{ fontSize: "30px", fontWeight: "bold" }} />

                                <Card.Body>
                                    <Card.Title> Shop With Confidence
                                    </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on  the card title <br />
                                        bulk of the <br />
                                    </Card.Text>
                                </Card.Body>
                            </center>

                        </Card>
                    </Col>
                    <Col>
                        <Card
                            style={{ width: '250px', height: '200px', backgroundColor: "white" }}
                            className="mb-2"
                        >

                            <center>
                                <Card.Header></Card.Header><br />
                                <GrDeliver style={{ fontSize: "30px", fontWeight: "bold" }} />
                                <Card.Body>
                                    <Card.Title> World Wide Delivery </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on  the card title <br />
                                        bulk of the <br />
                                    </Card.Text>
                                </Card.Body>
                            </center>

                        </Card>
                    </Col>
                    <Col>
                        <Card
                            style={{ width: '250px', height: '200px', backgroundColor: "white" }}
                            className="mb-2"
                        >

                            <center>
                                <Card.Header></Card.Header> <br />
                                <IoTimerOutline style={{ fontSize: "30px", fontWeight: "bold" }} />
                                <Card.Body>
                                    <Card.Title> 24/6 Help Center </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on  the card title <br />
                                        bulk of the <br />
                                    </Card.Text>
                                </Card.Body>
                            </center>

                        </Card>
                    </Col>
                </Row>
            </Container><br /><br />
            {/* ------------------------------------------ two card------------------------------------------------------- */}
            <Container>
                <Row>
                    <Col>
                        <Card className="bg-dark text-white" >
                            <Card.Img src={ss4} alt="Card image" style={{ width: "100%", height: '246px' }} />
                            <Card.ImgOverlay>
                                <Card.Title>GET 50% OFF</Card.Title>
                                <Card.Text> <h2>Apple Smart <br />
                                    Speaker</h2>

                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                <Button variant="primary">Shop Now</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white" >
                            <Card.Img src={hero2} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>GET 50% OFF</Card.Title>
                                <Card.Text> <h2>Apple Smart <br />
                                    Speaker</h2>

                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                <Button variant="primary">Shop Now</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container><br /><br />
            {/* ------------------------------------------ data json start ------------------------------------------------ */}
            <h1 align="center"> Our Top Brands</h1><br /><br />
            <div id="cartdata">
                {ans}
            </div>

        </>
    )
}
export default Home;