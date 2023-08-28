// Navbar.js
import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">GymLogo</div>
        <ul className="nav-links">
      <Link to="/login">login</Link>
      <Link to="/">go to the gym page</Link>
    
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 //