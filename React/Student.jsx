


const ans=Student.map((key)=><Collage nm={key.name} roll={key.rollno} ct={key.city} fee={key.fees}/>);
const App=()=>{
    return(
      <>
      <h1>Table List</h1>
      <table border="1" align="center" width="1200" height="400" bgcolor="pink" >
        <tr bgcolor="yellow">
          <th>Name</th>
          <th>Roll no</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
        {ans}
      </table>
      </>
    )
}

export default App;


//--------------------------------------------------------------------------------------
const Student=[
    {
        "name":"Arun Silawat",
        "rollno":101,
        "city":"Bhopal",
        "fees":10000
    },
    {
        "name":"Rahul",
        "rollno":102,
        "city":"Indore",
        "fees":23232
    },
    {
        "name":"Subham",
        "rollno":103,
        "city":"hanuman nagar",
        "fees":1043434
    },
    {
        "name":"Radha",
        "rollno":104,
        "city":"pipariya",
        "fees":1090
    },
    {
        "name":"abhi",
        "rollno":105,
        "city":"Bhopal",
        "fees":10220
    },
    {
        "name":"Yashi",
        "rollno":106,
        "city":"Bhopal",
        "fees":10000
    },
    {
        "name":"Arun ",
        "rollno":107,
        "city":"Bhopal",
        "fees":10000
    },
    {
        "name":" Silawat",
        "rollno":108,
        "city":"Bhopal",
        "fees":10000
    },
    {
        "name":"Arun Silawat",
        "rollno":109,
        "city":"Bhopal",
        "fees":10000
    },
    {
        "name":"Neeraj",
        "rollno":110,
        "city":"Mp nagar",
        "fees":10000
    }
]
export default Student;