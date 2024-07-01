import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import About from "./Pages/About";
import NoPage from "./Pages/NoPage";
import Contact from "./Pages/Contact";
import CompanyService from "./Pages/CompanyService";
import ProductService from "./Pages/Productservice";
import SellsService from "./Pages/SellsService";

const App=()=>{
    return(
        <>
          <BrowserRouter>
             <Routes>
                  <Route path="/" element={<Layout/>}>
                       <Route index element={<Home/>}/>
                       <Route path="/home" element={<Home/>}/>
                       <Route path="/service" element={<Service/>} >
                          <Route path="companyservice" element={<CompanyService/>}/>
                          <Route path="productservice" element={<ProductService/>}/>
                          <Route path="sellsservice" element={<SellsService/>}/>
                       </Route>
                       <Route path="/about" element={<About/>}/>
                       <Route path="/contact" element={<Contact/>}/>
                       <Route path="*" element={<NoPage/>}/>
                  </Route>
             </Routes>
          </BrowserRouter>
        </>
    )
}

export default App;