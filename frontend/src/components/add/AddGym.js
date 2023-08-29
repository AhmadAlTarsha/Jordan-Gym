import React, { useState,useEffect ,useContext  } from "react";
import axios from 'axios';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../App"
const AddGym = () => {
const navigate=useNavigate()
    const [gymOwner, setGymOwner] = useState("")
    const [name, setName] = useState("")
    const [location, setlocation] = useState("")
    const [nameOfTriner, setnameOfTriner] = useState([])
    const [mempershipPrice, setmempershipPrice] = useState([])
    const [facilities, setfacilities] = useState([])
    const {token}=useContext(AppContext)
  return (
    <div> <input
    type="text"
    name="gymOwner"
    placeholder="gymOwner "
    onChange={(e) => {
      setGymOwner(e.target.value)
    }}
    required
  />
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
          // console.log(role);
    const newgym=  {gymOwner,name,location,nameOfTriner,mempershipPrice,facilities}
    console.log(newgym);
        axios.post("http://localhost:5000/gym/create",newgym,{
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