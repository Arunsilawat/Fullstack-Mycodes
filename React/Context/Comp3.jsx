import Comp4 from "./Comp4";

import { useContext } from "react";
 import { myContext } from "./CourseComponent";


const Comp3=()=>{
    const {course,setMycourse}=useContext(myContext)
    return(
        <>
        <h1>Comp 3 : {course}</h1>
        <button onClick={()=>{setMycourse("HTML")}}>HTML</button>
        <Comp4 />
        </>
    )
}
export default Comp3;