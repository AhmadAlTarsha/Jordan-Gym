import React from 'react'
import "./homescreen.css"
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
const Homescreen = () => {
    const navigate=useNavigate()
const goToHomePage=()=>{
navigate("/login")
}

    
  return (
    <div className='homepage-container'>
      <div className='homepage' >  <h1>This website is a platform for assembling gyms in Jordan, and its aim is to facilitate searching and knowing the details of the gym, buying and paying through the website, and a lot of features that you will get to know once you log in</h1>
        <div className='join' ><button className= "Join-Now-button" onClick={goToHomePage} >Join Now</button></div></div>
    </div>
  )
}

export default Homescreen