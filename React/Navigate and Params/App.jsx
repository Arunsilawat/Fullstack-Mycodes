
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Navigate and Params/Layout";
import Home from "./Navigate and Params/Home";
import About from "./Navigate and Params/About";
import Contact from "./Navigate and Params/Contact";
const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact/:myid" element={<Contact/>}/>

        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;