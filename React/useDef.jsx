

const Collage=(props)=>{
    if(props.myVal){
        return(
            <>
            <h1>I am From Bhopal True</h1>
            </>
        )
    }
    else{
        return(
            <>
        <h1>I am Web Developer False</h1>            
            </>
        )
    } 
}
export default Collage;

//-------------------------------------------------------
//  import Collage from "./Collage";

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to React </h1>
//     <Collage myVal={true}/>
//     </>
//   )
// }
// export default App;

// const App=()=>{
//   const subjects=["php","html","React","java script","Pyhton"];
//   return(
//     <>
//    { subjects.length>0 && 
//     subjects.map((key)=>{
//       return(
//         <>
//         <li>{key}</li>
//         </>
//       )
//     })
//    }
//    </>
//   )
// }
// export default App;

//-------------------------------------------
// import { useRef } from "react";
// const App=()=>{
//   const myRef=useRef(0)
//   const Display=()=>{
//     myRef.current.style.backgroundColor="yellow"
//   }
//   return(
//     <>
//     <h1>Welcome </h1>
//     <input type="text" ref={myRef} />
//     <button onClick={Display}>Click Here</button>
//     </>
//   )
// }
// export default App;

//--------------------------------------------------------------
import { useRef,useState,useEffect } from "react";
const App=()=>{
   const [mydata,setMydata]=useState("")
   const myRef=useRef(0)
   const mytxt=useRef(0)
   useEffect(()=>{
    myRef.current=myRef.current+1
   })
   const Show=()=>{
    mytxt.current.style.backgroundColor="pink"
   }
  return(
    <>
    <h1>Welcome </h1>
    <textarea value={mydata} ref={mytxt} onChange={(e)=>{setMydata(e.target.value)}}/>
      <h1>Total Count : {myRef.current}</h1>
      <button onClick={Show}>Color Change</button>
    </>
  )
}
export default App;