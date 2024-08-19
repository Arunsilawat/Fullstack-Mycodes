

import logo from "../images/logo.png"



const Footer=()=>{
    return(
        <>
           <section className="section">
            <div  className="maindiv">
                <div className="Foot1">
                    <img className="Foot2" src={logo} alt="" style={{width:'200px'}} />
                    <div>16501 Collins Ave,Sunny Isles Beach, <br />FL 33160,United States</div>
                    <div>arunsilawat722362@gmail.com</div>
                    <div>7223-8162-94</div>
                </div>
                <div className="Foot1">
                     <div className="Foot">Shopping & Categories</div>
                     <div><a href="">Men's Shopping</a></div>
                     <div><a href="">Women's Shopping</a></div>
                     <div><a href="">Kid's Shopping</a></div>
                </div>
                <div className="Foot1">
                     <div className="Foot">Useful Links</div>
                     <div><a href="">Home Page</a></div>
                     <div><a href="">About Us</a></div>
                     <div><a href="">Help</a></div>
                     <div><a href="">Contact Us</a></div>
                </div>
                <div className="Foot1">
                     <div className="Foot">Help & Information</div>
                     <div><a href="">Help</a></div>
                     <div><a href="">FAQ's</a></div>
                     <div><a href="">Shipping</a></div>
                     <div><a href="">Tracking ID</a></div>
                </div>             
            </div>
           </section>
           
        </>
    )
  }
  export default Footer;
  
  
  
  
  
  
  
  
  