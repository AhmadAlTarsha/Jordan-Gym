import React from 'react'
import axios from 'axios'
import { useEffect,useState,useContext } from 'react'
import { AppContext } from '../../App';
const Gympost = () => {
  const [gympost,setGymPost]=useState([])
 const { token } = useContext(AppContext)
  useEffect(() => {
    
    //console.log(token);
    axios.get("http://localhost:5000/gym/posts",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {


 
       console.log(response.data.gym);
       setGymPost(response.data.gym)
       console.log(gympost);

    }).catch((err) => {
      console.log(err);
    })


  }, [])




  return (
    <div>{ gympost.map((oneGym)=>{
      return <div><h1>{oneGym.name}</h1> <p>{oneGym.location}</p>  <p>{oneGym.gymOwner.firstName}</p></div>
    })}</div>
  )
}

export default Gympost