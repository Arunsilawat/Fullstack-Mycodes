import { createContext } from "react";
import { useState } from "react";

const myContext=createContext()
const CourseComponent=({children})=>{
    const [course,setMycourse]=useState("Java")
    return(
        <>
        <h1>CourseComponent</h1>
        <myContext.Provider value={{course,setMycourse}}>
            {children}
        </myContext.Provider>
        </>
    )
}
export default CourseComponent;
export {myContext};