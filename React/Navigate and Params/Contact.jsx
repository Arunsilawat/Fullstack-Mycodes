import { useNavigate,useParams } from "react-router-dom";


const Contact=()=>{
    const {myid}=useParams()
    const Navigate=useNavigate()
    setTimeout(()=>{
        Navigate("/about")
    },5000)
    return(
        <>
        <h1>Contact{myid}</h1>
        </>
    )
}

export default Contact;