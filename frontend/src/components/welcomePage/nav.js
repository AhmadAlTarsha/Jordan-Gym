// Navbar.js
import {React,useContext} from 'react';
import "./style.css"
import { Link,useNavigate } from 'react-router-dom';
import { AppContext } from "../../App"

const Navbar = () => {
  const navigate=useNavigate()
  const { role2} = useContext(AppContext)
  console.log("from nav:",role2);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">GymLogo</div>
      {role2=="user"?  <ul className="nav-links">
      <Link to="/login">login</Link>
      <Link to="/">go to the gym page</Link>
    
         
        </ul>:  <ul className="nav-links">
      <Link to="/login">login</Link>
      <Link to="/">go to the gym page</Link>
   <button onClick={()=>{
navigate("/addGym")
   }}>add my gym</button>
         
        </ul>}
      </div>
    </nav>
  );
};

export default Navbar;
 //