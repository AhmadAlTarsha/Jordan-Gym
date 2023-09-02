import React from 'react'
import axios from 'axios'
import "./mygym.css"
import { useEffect, useState, useContext } from 'react'
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import { AppContext } from '../../App';
const MyGym = () => {
  const [myGym, setMyGym] = useState([])
  const navigate = useNavigate()
  const [updateGymName, setUpdateGymName] = useState(myGym.name)
  const [updateGymLocation, setUpdateGymLocation] = useState(myGym.Location)
  const [updateGymTrainer, setUpdateGymTrainer] = useState(myGym.nameOfTriner)
  const [updateGymMemberPrice, setUpdateGymMemberPrice] = useState(myGym.mempershipPrice)
  const [updateGymFacility, setUpdateGymFacility] = useState(myGym.facilities)
  const [updateGymInfo, setUpdateGymInfo] = useState("")
  const { token, userId } = useContext(AppContext)
  useEffect(() => {

    //console.log(token);
    axios.get(`http://localhost:5000/gym/posts/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {

      setMyGym(response.data.gym)

      console.log(response.data);
      console.log(myGym);




    }).catch((err) => {

      console.log(err);
    })


  }, [])




  return (
    <>
      {myGym.length !== 0 ? myGym.map((oneGym) => {
        return <div className='mygym-container' ><div className='updateGymInfo'><p>Current Name : {oneGym.name}</p> <input placeholder='update Your Gym Name' onChange={(e) => {
          console.log(e.target.value);
          console.log(oneGym);
          setUpdateGymName(e.target.value)
        }}></input> </div><div className='updateGymInfo'><p>Current Location : {oneGym.location
        }</p> <input placeholder='update Your Gym Location' onChange={(e) => {
          console.log(e.target.value);
          console.log(oneGym.location);
          setUpdateGymLocation(e.target.value)
        }}></input> </div><div className='updateGymInfo'><p>Current Trainer : {oneGym.nameOfTriner}</p> <input placeholder='update Your Gym Trainer' onChange={(e) => {
          console.log(e.target.value);
          setUpdateGymTrainer(e.target.value)
        }}></input> </div><div className='updateGymInfo'><p>Current MemberPrice : {oneGym.mempershipPrice
        }</p> <input placeholder='update Your Gym MemberPrice' onChange={(e) => {
          console.log(e.target.value);
          setUpdateGymMemberPrice(e.target.value)
        }}></input> </div><div className='updateGymInfo'><p>Current Facility : {oneGym.facilities
        }</p> <input placeholder='update Your Gym Facility' onChange={(e) => {
          console.log(e.target.value);
          setUpdateGymFacility(e.target.value)
        }}></input> </div>< button className='update-button' onClick={() => {
          console.log(oneGym._id);
          axios.put(`http://localhost:5000/gym/update/${oneGym._id}`, { name: updateGymName,location:updateGymLocation,nameOfTriner:updateGymTrainer,mempershipPrice:updateGymMemberPrice,facilities:updateGymFacility }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            console.log(response.data);

          }).catch((error) => {
            console.log(oneGym._id);
            console.log(error);
          })
          navigate("/gympost")
        }} >submit</button> </div>
      }) : <h1>You don't have gym profile yet Go to the <Link to="/addGym">Add My Gym</Link></h1>}
    </>
  )
}

export default MyGym



 