


//-------------------------- props ----------------------------------
const Cybrom=(props)=>{
    return(
        <>
        <h1>Student Roll : {props.roll}</h1>
        <h1>Student Name : {props.nm}</h1>
        <h1>Student City: {props.ct}</h1>
        </>
    )
}

export default Cybrom;
//------------------------------------------ props ----------------------------------------------

const Collage=(props)=>{
    return(
        <>
        <h1>Student Name : {props.nm}</h1>
        <h1>Student Class : {props.clg}</h1>
        <h1>Student Fees: {props.fee}</h1>

        </>
    )
}

export default Collage;

//-----------------------------------------------------------------------------------------------

const BottamData=()=>{
    return(
        <>
        <h1>This is my BottamData </h1>
    <h1>-------------------------------</h1>
        </>
    )
}
export default BottamData;

//------------------------------------------------------------------------------------------------

const BottomHeader=()=>{
    return(
        <>
        <h1>This is my BottomHeader </h1>
  <h1>--------------------------------------</h1>
        </>
    )
}
export default BottomHeader;
//--------------------------------------------------------------------------------------------------
const Copyrightinfo=()=>{
    return(
        <>
        <h1>This is my Copyrightinfo</h1>
<h1>---------------------------------------</h1>
        </>
    )
}

export default Copyrightinfo;
//---------------------------------------------------------------------------------------------------
import TopData from "./TopData";
import MiddleData from "./MiddleData";
import BottamData from "./BottomData";


const Data=()=>{
    return(
      <>
    <h1>THIS IS MY DATA</h1>
 <h1>-------------------------</h1>
       <TopData/>
       <MiddleData/>
       <BottamData/>
     </>
  
    
    )
  }
  export default Data;
  //---------------------------------------------------------------------------------------------------
  const Employee=(props)=>{
    return(
        <>
        <h1>Employee Name : {props.nm}</h1>
        <h1>Employee Num : {props.num}</h1>
        <h1>Employee Salary: {props.sal}</h1>

        </>
    )
}

export default Employee;
//-------------------------------------------------------------------------------------------------
import Copyrightinfo from "./Copyrightinfo";

const Footer=()=>{
    return(
        <>
        <h1>THIS IS MY FOOTER </h1>
<h1>---------------------------------</h1>
         <Copyrightinfo/>
        </>
    )
}
export default Footer;
//------------------------------------------------------------------------------------------------

import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const Header=()=>{
    return(
        <>
        <h1>THIS IS MY HEADER </h1>
    <h1>---------------------------</h1>
         <TopHeader/>
         <BottomHeader/>
        </>
    )
}
export default Header;
//------------------------------------------------------------------------------------------------

const MiddleData=()=>{
    return(
      <>
    <h1>This is my MiddleData</h1>
  <h1>---------------------------</h1>
      </>
    
    )
  }
  export default MiddleData;
  //-----------------------------------------------------------------------------------------------
  
const TopData=()=>{
    return(
      <>
      <h1>This is my TopData</h1>
  <h1>-----------------------------</h1>
     
      </>
    )
  }
  export default TopData;
  //----------------------------------------------------------------------------------------------
  
const TopHeader=()=>{
    return(
      <>
    <h1>This is my TopHeader</h1>
 <h1>---------------------------</h1>
      </>
    
    )
  }
  export default TopHeader;
  //----------------------------------------------------------------------------------------------
  