import { useSelector,useDispatch } from "react-redux";
import { addtask } from "./To Do List/Second/Todoslice";
import { useState } from "react";
const App=()=>{
    const mydata=useSelector((state)=>state.todolist.mytask);
    const mydic=useDispatch();
    const [myinput,setMyinput]=useState("");
    const submitdata=()=>{
        mydic(addtask({id:Date.now(),mytask:myinput}))
    }
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.mytask}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        Enter Task : <input type="text" value={myinput} onChange={(e)=>{setMyinput(e.target.value)}} />
        <button onClick={submitdata}>Done</button>
        <hr />
        <table>
            <tr>
                <th>S No</th>
                <th>Task</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default App;