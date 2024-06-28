
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contant from "./Contant";
import NoPage from "./NoPage";
const App=()=>{
    return(
        <>
          <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}></Route>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/contant" element={<Contant/>}/>
                            <Route path="*" element={<NoPage/>}/>
                      </Route>
                  </Routes>
           </BrowserRouter>       
        </>
    )
}

export default App;