
import Header from "./Header";
import Footer from "./Footer";
import Data from "./Data";
import Employee from "./Employee";
import Collage from "./Collage";
import Cybrom from "./Cybrom";

// react components----------------------------
const App=()=>{
  return(
    <>
     {/* <h1>Welcome To Cybrom Bhopal</h1>
     <h1>This is a first page</h1> */}
     {/* <Cybrom/> */}
     <Header/>
     <Middle/>
     <Footer/>
    </>
  
  )
}
export default App;
// ---------------------------------------------------
const age =29;
const name="Arun";
const App=()=>{
  return(
    <>
     <h1>hello i am {name} i am {age*2} year old</h1>
    </>
  
  )
}
export default App;
// -----------------------------------------------------------------

const sub = <ul>
    <li>PHP</li>
    <li>Hava</li>
    <li>Asp</li>
    <li>Oracle</li>
</ul>
const App=()=>{
  return(
    <>
     <h1><h1>Hello my sub is :{sub}</h1></h1>
    </>
  
  )
}
export default App;
// ------------------------------------------------------------
 
 
const App=()=>{
  return(
    <>
    <h1>Application from</h1>
    Enter Name: <input type="text" />
    <br />
    Enter City: <input type="text" />
    </>
  )
}
export default App;
// ----------------------------------------------------------------
// ========================component==============================
  
const App=()=>{
  return(
    <>
     <Header/>
     <Data/>
     <Footer/>
    </>
  
  )
}
export default App;

// ----------------employeeeee-------------
const App=()=>{
  return(
    <>
     <Employee nm="Arun" num="E233" sal="60000"/>
    </>
  
  )
}
export default App;
//-------------------------------------------------------------------
//---------------collage--------------

const nm="Sachin";
const clg="Mtech";
const fees=30000;

const App=()=>{
  return(
    <>
     <Collage nm={nm} clg={clg} fee={fees}/>
    </>
  
  )
}
export default App;
//--------------------------------------------[ Map ]--------------------------------------------------------------
const student={
  "rollnum":121,
  "name":"Arun",
  "city":"Bhopal"
}

const App=()=>{
  return(
    <>
    <Cybrom roll={student.rollnum} nm={student.name} ct={student.city}/>
    </>
  
  )
}
export default App;

// ------------------------------map-------------

const App=()=>{
  const name=["ram","syaam","mohan","Arun"];
  const ans=name.map((key)=>{
    return(
      <>
      <h1>{key}</h1>
      </>
    )
  })
  return(
    <>
    {ans}
    </>
  
  )
}
export default App;
// ----------------------------------------------------
const age=[23,343,33,35,67,8,98];
const myage=age.map((key)=>{
  return(
    <>
    <h1>{key*2}</h1>
    </>
  )
})

const App=()=>{
  return(
    <>
    {myage}
    </>
  
  )
}
export default App;
// -----------------------------

const city=["Bhopal","Indore","Jabalpur","Ujjain","Gwaliyar"];
const mycity=city.map((key)=>{
  return(
    <>
    <option>{key}</option>
    </>
  )
})
const App=()=>{
  return(
    <>
    <select>
      {mycity}
    </select>
    </>
  
  )
}
export default App;

const subject=["java","c++","Python","React","pd","Html"];
const App=()=>{

   const mysub=subject.map((key)=>{
    return(
      <>
      <li>{key}</li>
      </>
    )
   })
  return(
    <>
     <ul>{mysub}</ul>
    </>
  
  )
}
export default App;