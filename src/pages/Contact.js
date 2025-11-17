import React from 'react'
import "../helpers/Contact.css"
import Logo from "../assets/banner.jpg.jpg"

function Contact() {
  const nav = () =>{
  if (true){
    alert("Thanks for your Message😊, we'll reach out to you as soon as possible (❁´◡`❁)")
  }
}
  return (
    <div className="contact-container">
      <form className="contact-form">
      <h2>Contact</h2>
      <input type="text" placeholder="Your Name" required /><br></br><br></br>
       <input type="email" placeholder="Your Email" required /><br></br><br></br>
       <textarea placeholder="Message" rows="5" required></textarea><br></br>
     <button className="oka"  onClick={ nav }type="submit">Send Message</button>
     </form>
    
      <div className="contact-section">
    <div className="contact-info">
<img  className="imgg" src={Logo} alt="gmail" />

    </div>
  </div>
    </div>
  )
}

export default Contact
