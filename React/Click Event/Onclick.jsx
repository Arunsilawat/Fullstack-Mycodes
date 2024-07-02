const App=()=>{
    const display=()=>{
      alert("This is alere box")
    }
    const display1=(nm)=>{
      alert("My Name :"+nm+" from Bhopal");
    }
    const display2=(nm,snm)=>{
      alert("My Name :"+nm+" "+snm+" from Bhopal");
    }
  const App=()=>{
  
    const sum=(a,b)=>{
      alert(a+b);
    }
    const dispaly=(nm,b)=>{
      alert(nm+" Event tpye: "+b.type);
    }
    const element=(e)=>{
        alert("Event Tpye : "+e.type)
    }
    const myval=(e)=>{
       let nm=e.target.name;
       let tpy=e.target.type;
       let val=e.target.value;
       alert("Name : "+nm+" Type : "+tpy+ " Value: "+val)
    }
    return(
        <>
        <button onClick={display}>Click here</button>
        <button onClick={()=>{display2("Arun","Silawat")}}>Click here</button>
        <button onClick={()=>{sum(50,30)}}>Click here</button>
        <button onClick={(e)=>{dispaly("Arun",e)}}>Click here</button>
  
         <button onClick={element}>Click Here</button>
         <button type="button" name="btn1" value="myval" onClick={myval}>Click Here</button>
  
        </>
    )
  }
  
  export default App;