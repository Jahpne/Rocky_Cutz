import { faPerson, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
const And = () => {
const [action, setAction] = useState("Sign Up")
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <FontAwesomeIcon icon={faPerson} />
          <input type="text" />
        </div>
            <div className="input">
       <FontAwesomeIcon icon={faMailBulk} />
          <input type="email" />
        </div>
      <div className="input">
       <FontAwesomeIcon icon={faPerson} />
          <input type="password" />
        </div>
      </div>
    </div>
  )
}

export default And
