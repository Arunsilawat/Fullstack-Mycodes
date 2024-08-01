import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask } from "./Todoapp";
const App=()=>{
    const result=useSelector((state)=>state.todo.task);
    const mydic=useDispatch();
    const [myinput,setMyinput]=useState("");
    const datasubmit=()=>{
       mydic(addtask({id: Date.now(),task:myinput}))
    }
    let sno=0;
    const ans=result.map((key)=>{
        sno++
          return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.task}</td>
            </tr>
            
            </>
          )
    })
    return(
        <>
         Enter Data : <input type="text" value={myinput} onChange={(e)=>{setMyinput(e.target.value)}} />
         <button onClick={datasubmit}>Done</button><br /><br />
         <table>
            <tr>
                <th>S.No</th>
                <th>Task</th>
            </tr>
            {ans}
         </table>
        </>
    )
}
export default App;