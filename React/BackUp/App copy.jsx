import Collage from "./Collage";


const student={
    name:"Arun Silawat",
    rollno:12221
}

const App=()=>{
    return(
        <>
        <h1>Welcome Bhopal</h1>
        <Collage nm={student.name} rno={student.rollno}/>
        </>
    )
}
export default App;
  