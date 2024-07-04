

const App=()=>{
    const getval=(e)=>{
      let nm=e.target.name;
      let val=e.target.value;
      alert("Name : " +nm +" Value :"+val)
    }
     return(
        <>
          enter name: <input type="text" name="stuname" value="Bhopal" onClick={getval} />
        </>
     )
  }
  export default App;
  //--------------------------------------------
  import { useState } from "react";
  const App=()=>{
     const [name,setName]=useState("Arun");
     return(
        <>
        <h1>Hello We are Cybrom Student : {name}</h1>
        <button onClick={()=>{setName("Trun")}}>Click</button>
         </>
     )
  }
  export default App;
  
  const App=()=>{
    const [color,setColor]=useState("Red");
    const myColor=()=>{
      setColor("Green")
    }
    return(
       <>
       <h1>My Favrite Color : {color}</h1>
       <button onClick={myColor}>Click</button>
        </>
    )
  }
  export default App;
  //--------------------------------------
  
  const App=()=>{
    const [color,setColor]=useState("Red");
  
    return(
       <>
       <h1 style={{color:color}}>My Favrite Color : {color}</h1>
       <button onClick={()=>{setColor("Green")}}>Green</button>
       <button onClick={()=>{setColor("black")}}>Black</button>
       <button onClick={()=>{setColor("pink")}}>Pink</button>
       <button onClick={()=>{setColor("blue")}}>Blue</button>
       <button onClick={()=>{setColor("orange")}}>Orange</button>
  
        </>
    )
  }
  export default App;
  
  //-------------------------------------------------
  const App=()=>{
    const [cnt,setCnt]=useState(0);
  const myinc=()=>{
    setCnt(cnt+1)
  }
  const mydec=()=>{
    setCnt(cnt-1)
  }
  const myrec=()=>{
    setCnt(0)
  }
    return(
       <>
       <center>
            <h1>My Count : {cnt}</h1>
            <button onClick={myinc}>Increment</button>
            <button onClick={mydec}>Decrement</button>
            <button onClick={myrec}>Reset</button>
       </center>
  
  
  
        </>
    )
  }
  export default App;
   import { useState } from "react"
  const App=()=>{
    const [name,setName]= useState("");
    const [city,setCity]= useState("");
    const submitHandle=()=>{
      let inputVal={name:name,city:city}
      console.log(inputVal);
    }
    return(
      <> 
      <h1>I Am Arun </h1>
       Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
       <br />
       Enter City: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
       <br />
       <button onClick={submitHandle}>Data Save</button>
      </>
    )
  }
  export default App;
  
  const App=()=>{
    const [empno,setEmpno]= useState("");
    const [name,setName]= useState("");
    const [city,setCity]= useState("");
    const [salary,setSalary]= useState("");
    const submitHandle=()=>{
      let inputVal={Empno:empno,Name:name,city:city,salary:salary}
      console.log(inputVal);
    }
    return(
      <> 
      <h1>I Am Arun </h1>
       Enter Empno: <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
      <br />
       Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
       <br />
       Enter City: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
       <br />
       Enter Salary: <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}} />
       <br />
       <button onClick={submitHandle}>Data Save</button>
      </>
    )
  }
  export default App;
  //================================================================================================================
  
  //----------------------( Main Form )---------------------------
  import { useState } from "react";
const App=()=>{
  const [input, setInput]=useState({});
  const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values,[name]:value}));
       console.log(input);
  }
  const handlesubmit=()=>{
    console.log(input)  
  }

  return(
    <>
    Enter Empno  : <input type="text" name="empno" onChange={handleInput}/>
    <br />
    Enter Name   : <input type="text" name="name" onChange={handleInput}/>
    <br />
    Enter City   : <input type="text" name="city" onChange={handleInput} />
    <br />
    Enter Salary : <input type="text" name="salary" onChange={handleInput}/>
    <br />
    <button onClick={handlesubmit}>Save</button>
    </>
  )
}
export default App;