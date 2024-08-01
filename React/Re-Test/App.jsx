import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Insert from "./Components/Insert";
import Display from "./Components/Display";
import Search from "./Components/Search";
import Update from "./Components/Update";
import Total from "./Components/Total_QTY";
import Contact from "./Components/Contact";
import Product from "./Json Server/Product";
import Datadisplay from "./Display/Datadisplay";
import Delete from "./Update/Delete";
import SearchData from "./Search/SearchData";



const App=()=>{
  return(
    <>
     {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="update" element={<Update/>}/>
            <Route path="total" element={<Total/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="display" element={<Display/>}/>
            </Route>
        </Routes>
     </BrowserRouter> */}

{/* ------------------------------------------------------------------------------- */}
     {/* <Product/> */}
{/* ------------------------------------------------------------------------------- */}
     {/* <Datadisplay/> */}
{/* ------------------------------------------------------------------------------- */}
    {/* <Delete/> */}
{/* ------------------------------------------------------------------------------- */}
     {/* <SearchData/> */}
    </>
  )
}

export default App;