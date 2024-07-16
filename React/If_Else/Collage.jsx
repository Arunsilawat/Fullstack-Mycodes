import Bhopal from "./Bhopal";
import Cybrom from "./Cybrom";



const Collage=(props)=>{
  if(props.myVal){
    return(
        <>
        <Bhopal/>
        </>
    )
  }
    
    else{
        return(
            <>
            <Cybrom/>
            </>
        )

    }
      
}

export default Collage;