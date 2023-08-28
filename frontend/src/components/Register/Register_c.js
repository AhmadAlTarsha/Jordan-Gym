import React, { useState,useContext } from 'react';
import './style.css'; // Import your CSS file for styling
import axios from 'axios'
import { AppContext } from "../../App";
import {useNavigate} from 'react-router-dom'
const RegistrationForm = () => {

  const [firstName, setFirsName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 // const [role, ] = useState("64e4f00a4eafc1ed54ea4b38")
const {setRegister,register,setRole,role}=useContext(AppContext)


  
  return (
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
        <select onChange={(e)=>{
           console.log(role);
            setRole(e.target.value)
        }}>
          <option value="64e4f00a4eafc1ed54ea4b38">User</option>
          <option  value="64e4efe74eafc1ed54ea4b36">Gym Owner</option>
        </select>
        <button onClick={() => {
       const newuser=  {firstName,lastName,age,email,password,role}
console.log(newuser);

axios.post("http://localhost:5000/users/register",newuser).then((res)=>{


setRegister(res.data.message)

//navigate("/login")

}).catch((error)=>{

  console.log(error.response.data.message);
    setRegister(error.response.data.message)
})

    }} >Register</button>
   
      </form>
       <p>{register}</p>
    </div>
  );
};

export default RegistrationForm;
