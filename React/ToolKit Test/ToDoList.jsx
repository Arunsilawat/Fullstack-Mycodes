import { useSelector, useDispatch } from "react-redux";
import { addtask, deltask, comptask, uncomptask, saveedit } from "./ToDoSlice";
import { useState } from "react";
const ToDoList = () => {
    const result = useSelector((state) => state.todo.task);
    const mydic = useDispatch();
    const [mydata, setMydata] = useState("");
    const [myid, setMyid] = useState("")
    const [mybtn, setMybtn] = useState(true)
    const dataAdd = () => {
        mydic(addtask({ id: Date.now(), task: mydata,complate:false }))
        setMydata("")
    }
    const dataDel = (id) => {
        mydic(deltask(id))
    }
    const taskcom = (id) => {
        mydic(comptask(id))
    }
    const taskuncom = (id) => {
        mydic(uncomptask(id))
    }
    const edittask = (id, task) => {
        setMyinput(task)
        setMyid(id)
        setMybtn(false)
    }
    const editsave = (myid, task) => {
        setMybtn(true)
        mydic(saveedit({ id: myid, task: task }))
        setMyinput("")
    }
    const ans = result.map((key) => {
        return (
            <>
                <tr>
                    <td>
                        {key.complate ? <span style={{ textDecoration: "line-through", color: 'red' }}>{key.task}</span> : key.task}
                    </td>
                    <td>
                        <button onClick={() => (dataDel(key.id))}>Delete</button>
                    </td>
                    <td>
                        <button onClick={() => { taskcom(key.id) }}>Complate</button>
                    </td>
                    <td>
                        <button onClick={() => { taskuncom(key.id) }}>Uncomplate</button>
                    </td>
                    <td>
                        <button onClick={() => { edittask(key.id, key.task) }}>Edit</button>
                    </td>
                </tr>

            </>
        )
    })
    return (
        <>
            <h1>ToDoList</h1>
            Enter Task : <input type="text" value={mydata} onChange={(e) => { setMydata(e.target.value) }} />
            {/* <button onClick={dataAdd}>Add Task</button> */}

            {mybtn ? <button onClick={dataAdd}>Add</button> :
                <button onClick={() => { editsave(myid, mydata) }}>Edit Save</button>}
            <table>
                <tr>
                    <th>Task</th>
                </tr>
                {ans}
            </table>
        </>
    )
}
export default ToDoList;