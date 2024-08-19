
import { delcart } from "./cartSlice";
import Table from 'react-bootstrap/Table';
import { useSelector ,useDispatch} from "react-redux";
import { Button } from "react-bootstrap";
const CartProduct = () => {
    const mydata = useSelector((state)=>state.mycart.cart);
    const Dispatch=useDispatch();
    const cartdel=(id)=>{
        Dispatch(delcart(id))
    }
    let totalAmount=0;
    const ans = mydata.map((key) => {
        totalAmount+=key.price
        return (
            <>
                <tr>
                    <td> <img src={"src/images/"+key.images} idth="100" height="80" /></td>
                    <th>{key.name}</th>
                    <td>{key.description}</td>
                    <td>{key.price}</td>
                    <td>
                    <Button variant="primary" size="sm" onClick={()=>{cartdel(key.id)}}>Delete</Button>  
                    </td>
                </tr>

            </>
        )
    })
    return (
        <>
           <br /> <br /><h1 align="center">Your Cart Products</h1><br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Images</th>
                        <th> Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Total Amount : </th>
                        <th>{totalAmount}</th>
                        <th></th>
                    </tr>
                </tbody>
            </Table>

                </>
                )
}
export default CartProduct;