
 import Student from "./Student";
 const App=()=>{
    const ans=Student.map((key)=>{
        return(
            <>
            <tr style={{border:'1px solid black',backgroundColor:'pink'}}>
                <td style={{border:'1px solid black'}}>{key.empid}</td>
                <td style={{border:'1px solid black'}}>{key.name}</td>
                <td style={{border:'1px solid black'}}>{key.salary}</td>
                <td style={{border:'1px solid black'}}>{key.city}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <table style={{border:'1px solid black',width:'60%',margin:'auto'}}> 
            <tr style={{backgroundColor:'yellow'}}>
                <td style={{border:'1px solid black'}}>Emp ID </td>
                <td style={{border:'1px solid black'}}>Name </td>
                <td style={{border:'1px solid black'}}>Salary </td>
                <td style={{border:'1px solid black'}}>City </td>
            </tr>
            {ans}
        </table>
        
        </>
    )
 }
 export default App;