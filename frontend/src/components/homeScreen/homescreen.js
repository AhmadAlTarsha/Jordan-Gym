import React from 'react'
import "./homescreen.css"
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
const logo = require("../../image/logo.jpg")
const Homescreen = () => {
    const navigate=useNavigate()
const goToHomePage=()=>{
navigate("/login")
}

    
  return (
    <div className="homepage-container">
    <header className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button className="Join-Now-button" onClick={goToHomePage}>
              Join Now
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <div className="homepage">
      <h1>
        This website is a platform for assembling gyms in Jordan, and its aim
        is to facilitate searching and knowing the details of the gym, buying
        and paying through the website, and a lot of features that you will
        get to know once you log in
      </h1>
    </div>
  </div>
);
};
export default Homescreen