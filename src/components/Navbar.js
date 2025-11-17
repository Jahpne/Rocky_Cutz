import React from "react"
import {Link} from "react-router-dom"
import Logos from "../assets/banner.jpg.jpg"
import "./Navbar.css"

function Navbar() {

  return (
<div className="Navbar">
  <div className="leftSide" >
 <img src={Logos} className="App-logos" alt="logos"/>
 </div>
 <div className="rock"><h1 className="rocky">Rocky<span className="rock">Cutz</span></h1>
</div>
<div className="rightSide">
<Link to="/" className="rs" id="we">Home</Link>
<Link to="/about" className="rs" id="wr">About</Link>
<Link to="/Contact" className="rs" id="wt">Contact</Link>
<Link to="/info" className="rs" id="wy">Info</Link>

</div>
</div>
   
    
  )
}

export default Navbar;
