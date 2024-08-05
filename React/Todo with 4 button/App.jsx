import { useSelector,useDispatch } from "react-redux";
import { addtask ,deltask,comptask,uncomptask,saveedit} from "./TodoSlice";
import { useState } from "react";
const App=()=>{
   const mydata=useSelector((state)=>state.todo.task);
   const mydic=useDispatch();
   const [myinput,setMyinput]=useState("");
   const [myid,setMyid]=useState("")
   const [mybtn,setMybtn]=useState(true)
   const addData=()=>{
      mydic(addtask({id:Date.now(),task:myinput,complate:false}))
      setMyinput("")
   }
   const deleteTask=(id)=>{
      mydic(deltask(id))
   }
   const taskcom=(id)=>{
      mydic(comptask(id))
   }
   const taskuncom=(id)=>{
      mydic(uncomptask(id))
   }
   const edittask=(id,task)=>{
      setMyinput(task)
      setMyid(id)
      setMybtn(false)
   }
   const editsave=(myid,task)=>{
       setMybtn(true)
      mydic(saveedit({id:myid,task:task}))
      setMyinput("")
   }
   let sno=0;
   const ans=mydata.map((key)=>{
      sno++
         return(
            <>
            <tr>
               <td>{sno}</td>
               <td>
                  {key.complate ? <span style={{textDecoration:"line-through",color:'red'}}>{key.task}</span>:key.task}
               </td>
               <th>
                  <button onClick={()=>{deleteTask(key.id)}} >Delete</button>
               </th>
               <td>
                  <button onClick={()=>{taskcom(key.id)}}>Complate</button>
               </td>
               <td>
                  <button onClick={()=>{taskuncom(key.id)}}>Uncomplate</button>
               </td>
               <td>
                  <button onClick={()=>{edittask(key.id,key.task)}}>Edit</button>
               </td>
            </tr>
            </>
         )
   })
   return(
      <>
      <h1>Cybrom</h1>
      Enter Data : <input type="text" value={myinput} onChange={(e)=>{setMyinput(e.target.value)}}/>
     
      {mybtn ?  <button onClick={addData}>Add</button>:
      <button onClick={()=>{editsave(myid,myinput)}}>Edit Save</button>}
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