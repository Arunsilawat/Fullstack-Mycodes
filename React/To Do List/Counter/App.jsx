import { useSelector,useDispatch } from "react-redux";
import { increment,dicrement } from "./IncDicSlice";
const App=()=>{
    const myCount=useSelector((state)=>state.counter.cnt);
    const dic=useDispatch();
    return(
        <>
        <h1>Increment And Dicrement </h1>
        <button onClick={()=>{dic(increment())}}>Increment</button>
        <button onClick={()=>{dic(dicrement())}}>Dicrement</button>
        <h1>{myCount}</h1>
        </>
    )
}
export default App;