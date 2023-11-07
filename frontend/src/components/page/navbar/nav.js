// Navbar.js
import {React,useContext} from 'react';
import "./nav.css"
import { Link } from 'react-router-dom';
import { AppContext } from "../../../App"

const Navbar = () => {
  
  const { user_role ,loggedIn,setLoggedIn,setToken,setUserId} = useContext(AppContext)
  return (
  
    <nav className="navbar">
      <div className="container">
        <div className="logo">Jordan Gym</div>
         <ul className="nav-links">
      {/* {!loggedIn?<Link to="/login">login</Link>:null} */}
     {loggedIn? <Link to="/gympost">Gym’s Page</Link>:null}
  {loggedIn&&user_role=="Gym_owner"? <Link to="/addGym">Add Your Gym</Link> :null}
  {loggedIn&&user_role=="Gym_owner"? <Link to="/myGym"> Your Gym Profile </Link> :null}
  {loggedIn&&user_role=="user"? <Link to="/favouret">  Favouret</Link> :null}
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
