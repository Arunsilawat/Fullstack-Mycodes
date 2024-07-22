import Comp2 from "./Comp2";

import { useContext } from "react";
import { myContext } from "./CourseComponent";
const Comp1=()=>{
    const {setMycourse}=useContext(myContext)
    return(
        <>
        <h1>Comp 1 : </h1>
        <button onClick={()=>{setMycourse("React")}}>React</button>
        <Comp2 />
        </>
    )
}
export default Comp1;