import React from 'react'
import "../components/info.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee, faFaceSmileWink} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'

function Info() {
 
  return (
    <div className="container">
         <div className="gradient-bg"></div>
      <div className="glass-card" style={{maxWidth: '600px', width: '100%' , textAlign: 'center'}}>
        <h1 className="gradient-text pulse" style={{marginBottom: '40px'}}>
          ROCKY CUTZ
        </h1>

             <h2 style={{ marginBottom: '40px'}}>INFO</h2>
             <div  style={{margin: '40px 0'}}>
              <p style={{margin: '25px 0'}}>
           <p> <FontAwesomeIcon icon={faMailBulk} /> <a href="mailto:augusdavik@gmail.com">  <span>wateva@gmail.com</span> </a></p> 
 <p style={{margin: '25px 0'}}><FontAwesomeIcon icon={faPhone} /> <a href="tel: +2348157896621"> <span>+234 815 789 6621</span></a></p>

             </p>
           <br></br>
           <div style={{marginTop: '50px'}}>
            
           <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Social Media</h2>
           <div style={{fontSize: '1.5rem'}}>
                  <a href="#"><FontAwesomeIcon icon={faFacebook} />Facebook </a>
               <a href="#"><FontAwesomeIcon icon={faWhatsapp} />Whatsapp </a>
               <a href="#"><FontAwesomeIcon icon={faTwitter} />Twitter </a>
               <a href="#"><FontAwesomeIcon icon={faDiscord} />Discord </a> 
               
               </div>
               
               </div>
                </div>
       </div>
    </div>
  )
}

export default Info
