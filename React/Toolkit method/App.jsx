import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import CounterApp from "./CounterApp";
import ThemeChangeApp from "./ThemeChangeApp";
import ToDoList from "./ToDoList";
import Contact from "./Contact";


const App=()=>{
    return(
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="counter" element={<CounterApp/>}/>
            <Route path="theme" element={<ThemeChangeApp/>}/>
            <Route path="todo" element={<ToDoList/>}/>
            <Route path="contact" element={<Contact/>}/>
            </Route>
         </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;