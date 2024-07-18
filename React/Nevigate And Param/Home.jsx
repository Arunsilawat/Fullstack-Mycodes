import {useNavigate } from "react-router-dom";
const Home=()=>{
    const Navigate=useNavigate()
    const gotoabout=()=>{
        Navigate("/contact")
    }
    return(
        <>
        <h1>Home</h1>
        <button onClick={gotoabout}>Contact</button>
        </>
    )
}

export default Home;