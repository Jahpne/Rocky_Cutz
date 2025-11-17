import React from 'react'
import Images from "../assets/banner.jpg.jpg"
import '../components/home.css'
import { useNavigate } from 'react-router-dom'
//import {Make} from "../components/Make"

function Home() {
  const navigate = useNavigate();
  return (
 <div className="header" style={{backgroundImage: `url(${Images})`}}>
    <div className="headerContainer">
        <div className="be">
      <h1>ROCKY CUTZ💇‍♂️💇‍♀️</h1>
      <p>Your hair Deserves the <span>BEST</span> look 😎</p>
  <button onClick={ ()=>navigate('/contact') }>GET APPOINTMENT NOW!!</button>
</div>
</div>
</div>
  )
}

export default Home
