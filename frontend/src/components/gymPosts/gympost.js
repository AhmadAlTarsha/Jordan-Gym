import React from 'react'
import axios from 'axios'
import "./gympost.css"
import { useEffect,useState,useContext, } from 'react'
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { AppContext } from '../../App';
const Gympost = () => {
  const navigate = useNavigate();
  const [gympost,setGymPost]=useState([])
 const { token,currentGymId, setCurrentGymId,currentGym,setCurrentGym } = useContext(AppContext)
  useEffect(() => {
    
    //console.log(token);
    axios.get("http://localhost:5000/gym/posts",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {


 
       console.log(response.data.gym);
       setGymPost(response.data.gym)
       //console.log(response.data.gym[0].comment);
      
  

    }).catch((err) => {
     
      console.log(err);
    })


  }, [])

// useEffect(()=>{
//     axios.get(`http://localhost:5000/gym/${currentGymId}`).then((response) => {

      

//   //  console.log(response.data.gym);
//     setCurrentGym(response.data.gym)
//     console.log(response.data.gym.gymOwner.firstName);
//     console.log(currentGym);

  


//  }).catch((err) => {
  
//    console.log(err);
//  })
// },[])


  return (
 < >
     <div className= "gympost-container">{ gympost.map((oneGym)=>{
const allComments=oneGym.comment
//console.log(allComments);
      
  
      return <div key={oneGym._id} className='gympost'><h1>{oneGym.name}</h1> <p>{oneGym.location}</p>  <p>{oneGym.gymOwner.firstName}</p><div>{allComments.map((comment)=>{
        return <p>{comment.comment}</p>
      })}</div><button onClick={()=>{
console.log(oneGym._id);
setCurrentGymId(oneGym._id)
console.log(currentGymId);
// useEffect(() => {
  
//   //console.log(token);
navigate(`/gymDetails`)
 


// }, [])
      }} >view details</button></div>
    })}</div></>
  )
}

export default Gympost