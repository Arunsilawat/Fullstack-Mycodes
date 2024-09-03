
import { useSelector,useDispatch } from "react-redux";
import { addtask ,deltask} from "./ToDoSlice";
import { useState } from "react";
const App=()=>{
   const result=useSelector((state)=>state.ToDoList.task);
   const mydic=useDispatch();
   const [mydata,setMydata]=useState("");
   const addData=()=>{
      mydic(addtask({id:Date.now(),task:mydata}))
      setMydata("")
   }
   const ans=result.map((key)=>{
      return(
         <>
          <tr>
            <td>{key.task}</td>
            <td>
               <button onClick={()=>{mydic(deltask(key.id))}}>Delete</button>
            </td>
          </tr>
         </>
      )
   })
   return(
      <>
      <h1>TO DO Slice</h1>
      Add Task : <input type="text" value={mydata} onChange={(e)=>{setMydata(e.target.value)}}/>
      <button onClick={addData}>Add Task</button>
      <table>
         <tr>
            <th>Task</th>
            <th>Delete</th>
         </tr>
         {ans}
      </table>
      </>
   )
}
export default App;