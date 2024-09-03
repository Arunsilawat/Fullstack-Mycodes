import { useSelector,useDispatch } from "react-redux";
import { increment,dicrement } from "./CounterSlice";

const App=()=>{
   const result=useSelector((state)=>state.mycounter.cnt);
   const mydic=useDispatch();
   return(
      <>
      <h1>Increment And dicrement</h1>
      <button onClick={()=>{mydic(increment())}}>Increment</button>
      <h1>{result}</h1>
      <button onClick={()=>{mydic(dicrement())}}>Dicrement</button>
      </>
   )
}
export default App;