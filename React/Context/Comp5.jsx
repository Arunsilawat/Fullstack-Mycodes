import { useContext } from "react";
 import { myContext } from "./CourseComponent";
const Comp5=()=>{
    const {course,setMycourse}=useContext(myContext)
    return(
        <>
        <h1>Comp 5 : {course}</h1>
        <button onClick={()=>{setMycourse("Python")}}>Python</button>
        </>
    )
}
export default Comp5;