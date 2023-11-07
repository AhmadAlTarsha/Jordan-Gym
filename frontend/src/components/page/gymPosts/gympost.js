import React from 'react'
import axios from 'axios'
import "./gympost.css"
import { useEffect,useState,useContext, } from 'react'
import {useNavigate } from "react-router-dom";
import { AppContext } from '../../../App';
const Gympost = () => {
  const navigate = useNavigate();
  const [gympost,setGymPost]=useState([])
 const { token, setCurrentGymId } = useContext(AppContext)
  useEffect(() => {
    axios.get("http://localhost:5000/gym/posts",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
       setGymPost(response.data.gym)
    }).catch((err) => {
     
      console.log(err);
    })


  }, [])


  return (
 < >
     <div className= "gympost-container">{ gympost?.map((oneGym)=>{
const allComments= oneGym?.comment
      return <div key={oneGym._id} className='gympost'><h1>{oneGym.name}</h1> <p>Gym FeedBack (  {allComments.length} Comment) </p><div>{allComments.map((comment)=>{
        
        return <div key={comment._id} className='allComment' > <li>{`${comment?.commenter?.firstName} : ${comment?.comment} `}</li></div>
      })}</div><button onClick={async()=>{
        localStorage.setItem("currentGym", oneGym._id);
await setCurrentGymId(oneGym._id)

navigate(`/gymDetails`)
      }} >view details</button></div>
    })}</div></>
  )
}

export default Gympost