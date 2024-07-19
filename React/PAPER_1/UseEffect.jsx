import { useEffect,useState } from "react"


const UseEff=()=>{
    const [mydata,setMydata]=useState(0)
    const inc=()=>{
        setMydata(mydata+1)
    }
    useEffect(()=>{
        inc()
    })
    return(
        <>
        <h1>UseEffect</h1>
         <h1>{mydata}</h1> 
        </>
    )
}

export default UseEff;





 