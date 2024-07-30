import { useSelector,useDispatch } from "react-redux"
import { myinc,mydic } from "./Increment Dic With Tools/CounterSlice";

const App=()=>{
    const Counter1=useSelector((state)=>state.mycounter.cnt)
    const mydis=useDispatch();
    return(
        <>
        <h1>My Counter </h1>
        <button onClick={()=>{mydis(myinc())}}>Increment</button>
        <h1>{Counter1}</h1>
        <button onClick={()=>{mydis(mydic())}}>Dicrement</button>
        </>
    )
}
export default App;