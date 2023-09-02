
import React, {
  useState, useContext,
  useEffect,
} from "react";
import "./gymdetails.css"
import { Routes, Route, useNavigate, } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "axios";
const Gymdetails = () => {
  const [newComment, setNewComment] = useState("")
  const { token, currentGymId, currentGym, setCurrentGym } = useContext(AppContext)
  useEffect(() => {
    axios.get(`http://localhost:5000/gym/${currentGymId}`).then((response) => {


      //console.log(currentGymId);
      console.log(response.data.gym);
      setCurrentGym(response.data.gym)
      // console.log(response.data);
      // console.log(currentGym);





    }).catch((err) => {

      console.log(err);
    })
  }, [])


  console.log(currentGym);
  const navigate = useNavigate();


  return (
    <div className="gym-details-container"><p>{currentGym.name}</p><p>{currentGym.location}</p><p>{currentGym.mempershipPrice
    }</p><p>{currentGym.facilities
    }
      </p><p>{currentGym?.gymOwner?.firstName}
      </p><textarea className="comment-input" onChange={(e) => {
        setNewComment(e.target.value)

      }} placeholder="add comminte"></textarea><button className="comment-button" onClick={() => {
        axios.post(`http://localhost:5000/comment/create/${currentGymId}`, { comment: newComment }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
      }}>Add</button><button className="back-button" onClick={() => {
        navigate("/gympost")
      }}>back</button></div>
  )
}

export default Gymdetails