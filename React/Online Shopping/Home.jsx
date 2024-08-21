import Carousel from 'react-bootstrap/Carousel';
import vid from "../images/v2.mp4"
import h1 from "../images/h5.jpg"
import h2 from "../images/h6.jpg"
import h3 from "../images/h2.avif"
import { useState,useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 
 
import { addcart } from './cartSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const Dispatch=useDispatch();
    const [mydata, setMydata] = useState([]);
    const loadData = () => {
        let api = "http://localhost:3000/product";
        axios.get(api).then((res) => {
            setMydata(res.data)
        })
    }
    useEffect(() => {
        loadData()
    })
    const addData=(eid,nm,dis,price,img)=>{
        Dispatch(addcart({id: eid, name:nm, images:img, description:dis, price:price}))
    }
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
            <marquee direction="left" height="20" style={{color:"red",fontWeight:"bold"}}>
                "Unlock incredible savings with our exclusive online shopping offer! For a limited time only, enjoy up to 50% off on select items. Plus, get free shipping on all orders over 1000 Rupes Don't miss out—shop now and treat yourself to the best deals of the season. Hurry, before it's too late!"
            </marquee>
            <Carousel>
                <Carousel.Item>
                    <img src={h1} alt="" style={{ width: "100%", height: "550px" }} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={h2} alt="" style={{ width: "100%", height: "550px" }} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={h3} alt="" style={{ width: "100%", height: "550px" }} />    
                     <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel><br /><br />
            <h1 align="center"> Our Top Brands</h1><br /><br />
            <div id="cartdata">
                {ans}
            </div>
            {/* <video width="100%" height="500px" controls autoplay muted >
                <source src={vid} type="video/mp4" />
            </video> */}
        </>
    )
}
export default Home;