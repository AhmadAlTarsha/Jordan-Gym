// Navbar.js
import {React,useContext} from 'react';
import "./style.css"
import { Link,useNavigate } from 'react-router-dom';
import { AppContext } from "../../App"

const Navbar = () => {
  const navigate=useNavigate()
  const { role2,user_role ,loggedIn,setLoggedIn,setToken,setUserId} = useContext(AppContext)
  console.log(user_role);
  return (
  
    <nav className="navbar">
      <div className="container">
        <div className="logo">GymLogo</div>

        
      {user_role=="user"?  <ul className="nav-links">
     
      <Link to="/">go to the gym page</Link>
    
         
        </ul>:  <ul className="nav-links">
      <Link to="/login">login</Link>
      <Link to="/gympost">go to the gym page</Link>
   <button onClick={()=>{
navigate("/addGym")
   }}>add my gym</button>
   <Link to path="/"
   onClick={() => {
      setLoggedIn(false)
      setToken(null);
      setUserId(null)
      localStorage.clear();
    }}
   >logout</Link>
         
        </ul>}
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
