
import { useContext } from "react";
import { myContext } from "../App";

const Comp5=()=>{
    const {user}=useContext(myContext)
    return(
        <>
        <h1>Comp 5 : Welcome {user} </h1>
        </>
    )
}
export default Comp5;