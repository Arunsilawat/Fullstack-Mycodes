const box1={
    backgroundColor:'pink',
    width: '300px',
    height: '200px',
    border:'2px solid black',
    borderRadius:'30px',
    margin: 'auto',
   
    
 }
 const box2={
    backgroundColor:'green',
    width: '240px',
    height: '160px',
    border:'2px solid black',
    borderRadius:'30px',
    margin: 'auto',
     marginTop: 15
  
 }
 const box3={
    backgroundColor:'yellow',
    width: '200px',
    height: '100px',
    border:'2px solid black',
    borderRadius:'30px',
    margin: 'auto',
     marginTop: 25
 }
 const box4={
    width: '70px',
    margin: 'auto',
    marginTop: 27,
    
 }

const App=()=>{
    return(
        <>
        <div  style={box1}>
             <div style={box2}>
                <div style={box3}>
                    <div style={box4}>CYBROM</div>
                </div>
             </div>
        </div>
        </>
    )
}
export default App;
