// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Pages/Home";
// import Display from "./Pages/Display";
// import Contact from "./Pages/Contact";
// import Insert from "./Pages/Insert";
// import Search from "./Pages/Search";
// import Update from "./Pages/Update";



// const App=()=>{
//     return(
//         <>
//         <BrowserRouter>
//            <Routes>
//                <Route path="/" element={<Layout/>}>
//                 <Route index element={<Home/>} />
//                 <Route path="/home" element={<Home/>} />
//                 <Route path="/display" element={<Display/>} />
//                 <Route path="/contact" element={<Contact/>} />
//                 <Route path="/insert" element={<Insert/>} />
//                 <Route path="/search" element={<Search/>} />
//                 <Route path="/update" element={<Update/>}/>
//                </Route>
//            </Routes>
//         </BrowserRouter>
//         </>
//     )
// }
// export default App;
// ========================================end=========================================================
// import { useState } from "react";
// import Collage from "./Collage";

// const App=()=>{
//     const [mydata,setMydata]=useState("")
//     setTimeout(()=>{
//      setMydata(true)
//     },3000)
// // --------------------------------------------------
// const subjects=["Java","Python","C++","Java script","Git","Html"]
//     return(
//         <>
//         <Collage myVal={mydata}/>
// {/* ---------------------------------------------------- */}
//          {subjects.length>0 && 
//          subjects.map((key)=>{
//              return(
//                 <>
//                 <li>{key}</li>
//                 </>
//              )
//          })}
//         </>
//     )
// }
// export default App;

//------------------------------------------------------------
// import { useRef } from "react";
// const App=()=>{
//     const myRef=useRef("")
//     const red=useRef("")
//     const yellow=useRef("")
//     const blue=useRef("")
//     const Display=()=>{
//         myRef.current.style.backgroundColor="blue"
//     }
//     const Displayred=()=>{
//         red.current.style.backgroundColor="red"
//     }
//     const Displayyellow=()=>{
//         yellow.current.style.backgroundColor="yellow"
//     }
//     const Displayblue=()=>{
//         blue.current.style.backgroundColor="blue"
//     }
//     return(
//         <>
//         <h1>Welcome to React </h1>
//          <input type="text"  ref={yellow} />
//          <button onClick={Display}>Pink</button>
//          <button onClick={Displayred}>Red</button>
//          <button onClick={Displayyellow}>Yellow</button>
//          <button onClick={Displayblue}>Blue</button>
//         </>
//     )
// }
// export default App;

//------------------------------------------------------------------------------------
import Comp1 from "./Props Deling/Comp1";
import { useState } from "react";
const App=()=>{
    const [user, setUser]=useState("ARUN")
    return(
        <>
        <h1>WelCome {user} </h1>
         <Comp1 user={user} />
        </>
    )
}
export default App;