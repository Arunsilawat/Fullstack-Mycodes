

// const App=()=>{
//   const getval=(e)=>{
//     let nm=e.target.name;
//     let val=e.target.value;
//     alert("Name : " +nm +" Value :"+val)
//   }
//    return(
//       <>
//         enter name: <input type="text" name="stuname" value="Bhopal" onClick={getval} />
//       </>
//    )
// }
// export default App;
//--------------------------------------------
import { useState } from "react";
// const App=()=>{
//    const [name,setName]=useState("Arun");
//    return(
//       <>
//       <h1>Hello We are Cybrom Student : {name}</h1>
//       <button onClick={()=>{setName("Trun")}}>Click</button>
//        </>
//    )
// }
// export default App;

// const App=()=>{
//   const [color,setColor]=useState("Red");
//   const myColor=()=>{
//     setColor("Green")
//   }
//   return(
//      <>
//      <h1>My Favrite Color : {color}</h1>
//      <button onClick={myColor}>Click</button>
//       </>
//   )
// }
// export default App;
//--------------------------------------

// const App=()=>{
//   const [color,setColor]=useState("Red");

//   return(
//      <>
//      <h1 style={{color:color}}>My Favrite Color : {color}</h1>
//      <button onClick={()=>{setColor("Green")}}>Green</button>
//      <button onClick={()=>{setColor("black")}}>Black</button>
//      <button onClick={()=>{setColor("pink")}}>Pink</button>
//      <button onClick={()=>{setColor("blue")}}>Blue</button>
//      <button onClick={()=>{setColor("orange")}}>Orange</button>

//       </>
//   )
// }
// export default App;

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