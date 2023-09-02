import React, { useState,useContext } from 'react';
import './register.css'; // Import your CSS file for styling
import axios from 'axios'
import { AppContext } from "../../App";
import {useNavigate,Route,Link} from 'react-router-dom'
const RegistrationForm = () => {
const navigate=useNavigate
  const [firstName, setFirsName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const {setRegister,register,setRole,role}=useContext(AppContext)


  
  return (<>
   <div className="registration-form">
      <h2>Registration</h2>
      <form >
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={(e) => {
            setFirsName(e.target.value)
          }}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value)
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
        />
        <select onClick={(e)=>{
        
            setRole(e.target.value)
         console.log(role);
        }}>
          <option value='64f27110b4c647371db0d38f'>User</option>
          <option value='64f270ddb4c647371db0d38d'  >Gym Owner</option>
        </select>
        <button onClick={() => {
       const newuser=  {firstName,lastName,age,email,password,role}
console.log(newuser);

axios.post("http://localhost:5000/users/register",newuser).then((res)=>{


setRegister(res.data.message)



}).catch((error)=>{

  console.log(error.response.data.message);
    setRegister(error.response.data.message)
})

    }} >Register</button>
  
      </form>
       <p className='registerMessage'>{register}</p>
       <p  className="loginMessage">already have an account <Link className='login_link' to="/login">login now</Link></p>
    </div>
  </>
   
  );
};

export default RegistrationForm;
