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
        <div className="logo">Jordan Gym</div>
         <ul className="nav-links">
      {/* {!loggedIn?<Link to="/login">login</Link>:null} */}
     {loggedIn? <Link to="/gympost">Go To The Gym Page</Link>:null}
  {loggedIn&&user_role=="Gym_owner"? <Link to="/addGym">Add Your Gym</Link> :null}
  {loggedIn&&user_role=="Gym_owner"? <Link to="/myGym"> Your Gym Profile </Link> :null}
  {loggedIn? <Link to ="/"
   onClick={() => {
      setLoggedIn(false)
      console.log(loggedIn);
      setToken(null);
      setUserId(null)
      localStorage.clear();
    }}
   >Logout</Link>:null}
         
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
