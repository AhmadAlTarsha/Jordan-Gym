// Navbar.js
import {React,useContext} from 'react';
import "./nav.css"
import { Link } from 'react-router-dom';
import { AppContext } from "../../App"

const Navbar = () => {
  
  const { user_role ,loggedIn,setLoggedIn,setToken,setUserId} = useContext(AppContext)
 console.log(loggedIn);
 console.log(user_role);
  return (
  
    <nav className="navbar">
      <div className="container">
        <div className="logo">GymLogo</div>

         <ul className="nav-links">
      <Link to="/login">login</Link>
     {loggedIn? <Link to="/gympost">go to the gym page</Link>:null}
  {loggedIn&&user_role=="Gym_owner"? <Link to="/addGym">add my gym</Link> :null}
  {loggedIn&&user_role=="Gym_owner"? <Link to="/myGym"> my gym</Link> :null}
  {loggedIn? <Link to ="/home"
   onClick={() => {
      setLoggedIn(false)
      console.log(loggedIn);
      setToken(null);
      setUserId(null)
      localStorage.clear();
    }}
   >logout</Link>:null}
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 //onClick={() => {
//   setIsLoggedIn(false);
//   setShow(false)
//   setToken(null);
//   localStorage.clear();
// }}
