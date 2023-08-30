import React, { useState,useEffect ,useContext  } from "react";
import axios from 'axios';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../App"
const AddGym = () => {
const navigate=useNavigate()
 
    const [name, setName] = useState("")
    const [location, setlocation] = useState("")
    const [nameOfTriner, setnameOfTriner] = useState([])
    const [mempershipPrice, setmempershipPrice] = useState([])
    const [facilities, setfacilities] = useState([])
    const {token,userId,gymOwner}=useContext(AppContext)
  return (
    <div> 
  <input
    type="text"
    name="name"
    placeholder="name"
    onChange={(e) => {
      setName(e.target.value)
    }}
    required
  />
  <input
    type="text"
    name="location"
    placeholder="location"
    onChange={(e) => {
      setlocation(e.target.value)
    }}
    required
  />
  <input
    type="text"
    name="nameOfTriner"
    placeholder="nameOfTriner"
    onChange={(e) => {
      setnameOfTriner(e.target.value)
    }}
    required
  />
  <input
    type="text"
    name="mempershipPrice"
    placeholder="mempershipPrice"
    onChange={(e) => {
      setmempershipPrice(e.target.value)
    }}
    required></input>
  <input
    type="text"
    name="facilities"
    placeholder="facilities"
    onChange={(e) => {
      setfacilities(e.target.value)
    }}
    required></input>
        <button onClick={()=>{
          console.log(token);
        
          console.log(userId);
          console.log(gymOwner);
    const newgym=  {gymOwner:userId,name,location,nameOfTriner,mempershipPrice,facilities}
    console.log(newgym);
        axios.post(`http://localhost:5000/gym/create`,newgym,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res)=>{

            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }}>
       add </button></div>
  )
}

export default AddGym