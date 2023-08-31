import React from 'react'
import axios from 'axios'
import"./mygym.css"
import { useEffect,useState,useContext } from 'react'
import { AppContext } from '../../App';
const MyGym = () => {
const [myGym,setMyGym]=useState([])

const [updateGymName,setUpdateGymName]=useState(null)
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


  }, [updateGymName])




  return (
    <>
  {myGym.length!==0? myGym.map((oneGym)=>{
      return <div className='mygym' ><p>{oneGym.name}</p><p>{oneGym._id}</p> <input onChange={(e)=>{
        console.log(e.target.value);
        setUpdateGymName(e.target.value)
      }}></input> < button onClick={()=>{
        console.log(oneGym._id);
        
        axios.put(`http://localhost:5000/gym/update/${oneGym._id}`,{name:updateGymName},{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        } ).then((response) => {
   console.log(response.data);
 
        }).catch((error) => {
          console.log(oneGym._id);
          console.log(error);
        })
      }} >submit</button></div>
    }):<h1>empty</h1>}
    </>
  )
}

export default MyGym