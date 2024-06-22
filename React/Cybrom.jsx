

const Cybrom=(props)=>{
    return(
        <>
        <tr>
            <td>{props.nm}</td>
            <td>{props.roll}</td>
            <td>{props.ct}</td>
            <td>{props.fee}</td>
        </tr>
        </>
    )
}

export default Cybrom;

//-------------------------------------------------------------------------
import Stu from "./Stu";
import Cybrom from "./Cybrom";


const ans=Stu.map((key)=><Cybrom nm={key.name} roll={key.rollno} ct={key.city} fee={key.fees}/>)

const App=()=>{
  return(
    <>
    <table bgcolor="yellow" border="1" align="center" width="900" height="200">
      <tr bgcolor="pink">
        <th>Name</th>
        <th>Roll number</th>
        <th>City</th>
        <th>Fees</th>
      </tr>
      {ans}
    </table>
    </>
  )
}

export default App;