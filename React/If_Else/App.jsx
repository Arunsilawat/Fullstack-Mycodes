//  import Collage from "./Collage";

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome to React </h1>
//     <Collage myVal={true}/>
//     </>
//   )
// }
// export default App;

const App=()=>{
  const subjects=["php","html","React","java script","Pyhton"];
  return(
    <>
   { subjects.length>0 && 
    subjects.map((key)=>{
      return(
        <>
        <li>{key}</li>
        </>
      )
    })
   }
   </>
  )
}
export default App;