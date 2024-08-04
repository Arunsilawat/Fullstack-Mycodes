import { useState } from "react"
import { addtask ,deletetask} from "./Add Task and Delete/ToDoSlice";
import { useSelector,useDispatch } from "react-redux";
const App=()=>{
   const [myinput,setMyinput]=useState("");
   const mytodo=useSelector((state)=>state.todo.task);
   const mydic=useDispatch();
   const Submitdata=()=>{
       mydic(addtask({id:Date.now(),task:myinput}))
       setMyinput("")
   }
   const deletedata=(id)=>{
      mydic(deletetask(id))
   }
   let sno=0;
   const ans=mytodo.map((key)=>{
            sno++
      return(
         <>
         <tr>
            <td>{sno}</td>
            <td>{key.task}</td>
            <a href="#">
            <button onClick={()=>{deletedata(key.id)}}>Delete</button>
            </a>
           
          </tr>
         </>
      )
   })
   return(
      <>
      <h1>Welcome to Our World</h1>
      Enter Data : <input type="text" value={myinput} onChange={(e)=>{setMyinput(e.target.value)}} />
      <button onClick={Submitdata}>Done</button>
      <hr />
      <table>
         <tr>
            <th>S NO</th>
            <th>Task</th>
            <th>Delete</th>
         </tr>
         {ans}
      </table>
      </>
   )
}
export default App;