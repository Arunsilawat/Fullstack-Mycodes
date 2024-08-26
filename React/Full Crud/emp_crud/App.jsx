import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Display from "./Pages/Display";
import Insert from "./Pages/Insert";
import Update from "./Pages/Update";
const App=()=>{
   return(
      <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="display" element={<Display/>}/>
         <Route path="insert" element={<Insert/>}/>
         <Route path="update" element={<Update/>}/>
         </Route>
      </Routes>
      </BrowserRouter>
      </>
   )
}
export default App;