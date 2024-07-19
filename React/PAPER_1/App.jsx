import Box from "./Box";
import About from "./Components/About";
import Home from "./Components/Home";
import Layout from "./Components/Layout";

//-------------------------------------
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Services from "./Components/Services";
import Placement from "./Components/Placement";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Display from "./Display";
import Counter from "./Counter";
import UseEff from "./UseEffect";
import Insert from "./Insert";
import Formdesi from "./Formdesi";

const App=()=>{
  return(
      <>
        {/* <Box/> */}
{/* ---------------------------- */}
        {/* <BrowserRouter>
             <Routes>
                 <Route path="/" element={<Layout/>}>
                      <Route index element={<Home/>}/>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/services" element={<Services/>}/>
                      <Route path="/placement" element={<Placement/>}/>
                      <Route path="/gallery" element={<Gallery/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                 </Route>
             </Routes>
        </BrowserRouter> */}
{/* ----------------------------------- */}
       {/* <Display/> */}
{/* ---------------------------------- */}
      {/* <Counter/> */}
{/* ----------------------------------- */}
     {/* <UseEff/> */}
 {/* ---------------------------------- */}
     {/* <Insert/> */}
{/* ---------------------------------------------------- */}
    {/* <Formdesi/> */}
      </>
  )
}
export default App;