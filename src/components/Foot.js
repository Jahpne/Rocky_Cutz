import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee, faFaceSmileWink} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import "./Footer.css"
function Foot() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faFaceSmileWink} />
        <FontAwesomeIcon icon={faInstagram} />  
   <p>&copy; 2025 rockycutz.com</p>
    </div>
    </div>
  )
}

export default Foot
