import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const [mysearch,setSearch]=useState([])
    const [rno,setRno]=useState("")
    const Searchin=()=>{
        let api=`http://localhost:3000/ragesrer/?userid=${rno}`
        axios.get(api).then((res)=>{
            setSearch(res.data)
            console.log(res.data)
        })
    }
    console.log(rno)
    const ans=mysearch.map((key)=>{
          return(
            <>
            <tr>
                <td>{key.userid}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.pass}</td>
                <td>{key.repass}</td>
            </tr>
            </>
          )
    })
    return(
        <>
        <h1>Search Data</h1>
        Enter User Id : <input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
        <button onClick={Searchin}>Search</button>

        <table>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Pass</th>
                <th>Re-Pass</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Search;
