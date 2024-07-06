import { useState,useEffect } from "react";
import axios from "axios";


const App=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let url="https://jsonplaceholder.typicode.com/todos/";
        axios.get(url).then((res)=>{
        setMydata(res.data)
        });
    }
    useEffect(()=>{
        loadData();
    },[])
    let status="";

    const ans=mydata.map((key)=>{
        if(key.complated==true){
            status="True"
        }
        else{
            status="False"
        }
        return(
            <>
         <tr style={{border:'2px solid black'}}>
            <td style={{border:'2px solid black'}}>{key.userId}</td>
            <td style={{border:'2px solid black'}}>{key.id}</td>
            <td style={{border:'2px solid black'}}>{key.title}</td>
            <td style={{border:'2px solid black'}}>{status}</td>
        </tr>
            </>
        )
    })


    return(
        <>
        <h1>Welcome to Cybrom</h1>
        <table style={{backgroundColor:'pink',border:'2px solid black'}}>
            <tr style={{border:'2px solid black'}}>
            <th style={{border:'2px solid black'}}>User ID</th>
            <th style={{border:'2px solid black'}}>ID</th>
            <th style={{border:'2px solid black'}}>Title</th>
            <th style={{border:'2px solid black'}}>Complated</th>
            </tr>
                {ans}
        </table>
        </>
    )
}
export default App;