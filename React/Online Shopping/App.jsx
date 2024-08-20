import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import CartProduct from "./Pages/CartProduct";


const App = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout/>}>
               <Route index element={<Home/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/cartproduct" element={<CartProduct/>}/>
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}
export default App;