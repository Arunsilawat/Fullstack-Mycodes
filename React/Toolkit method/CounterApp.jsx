import { useSelector,useDispatch } from "react-redux";
import { increment,dicrement } from "./CounterSlice";
const CounterApp=()=>{
    const result=useSelector((state)=>state.counter.cnt);
    const mydic=useDispatch();
    return(
        <>
        <h1>Counter App</h1>
        <button onClick={()=>{mydic(increment())}}>Increment</button>
        <h1>{result}</h1>
        <button onClick={()=>{mydic(dicrement())}}>Dicrement</button>
        </>
    )
}
export default CounterApp;