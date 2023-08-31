import React from 'react'
import axios from 'axios'
import { useEffect,useState,useContext } from 'react'
import { AppContext } from '../../App';
const MyGym = () => {
const [myGym,setMyGym]=useState([])
 const { token ,userId} = useContext(AppContext)
  useEffect(() => {
    
    //console.log(token);
    axios.get(`http://localhost:5000/gym/posts/${userId}`,{
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
    <div>
  {myGym.length!==0? myGym.map((oneGym)=>{
      return <div><h1>{oneGym.name}</h1></div>
    }):<h1>empty</h1>}
    </div>
  )
}

export default MyGym