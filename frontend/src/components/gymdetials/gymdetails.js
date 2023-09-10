
import React, {
  useState, useContext,
  useEffect,
} from "react";
import "./gymdetails.css"
import { Routes, Route, useNavigate, Link, } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "axios";
const Gymdetails = () => {
  const [newComment, setNewComment] = useState("")
  const [commentMassege, setcommentMassege] = useState("");
  const { token, currentGymId, currentGym, setCurrentGym ,userId} = useContext(AppContext)
  useEffect(() => {
    axios.get(`http://localhost:5000/gym/${currentGymId}`).then((response) => {


      //console.log(currentGymId);
      console.log(response.data.gym);
      setCurrentGym(response.data.gym)
      // console.log(response.data);
       console.log(currentGym);





    }).catch((err) => {

      console.log(err);
    })
  }, [])


  console.log(currentGym);
  const navigate = useNavigate();


  return (
    <div className="gym-details-container"><div className="gym-info" ><p>Name : {currentGym?.name}</p><p>Location : {currentGym.location}</p><div className="memberShip_div"><h3>MempershipPrice : </h3><p>{currentGym?.mempershipPrice?.oneMonth
    } / Month</p><p>{currentGym?.mempershipPrice?.threeMonth
    } /Three Month</p><p>{currentGym?.mempershipPrice?.oneYear
    } / Annually</p></div><p>facilities : {currentGym.facilities
    }
      </p><ul>Name Of Gym coach's : {currentGym?.nameOfTriner?.map(oneCoach => {
       return <li>{oneCoach}</li>
      })}</ul><p>Gym Owner : {currentGym?.gymOwner?.firstName}
      </p> <Link href="">Click to Contact With Us And Be One of Our Family</Link></div><textarea className="comment-input" onChange={(e) => {
        setNewComment(e.target.value)

      }} placeholder="add comminte"></textarea><button className="comment-button" onClick={() => {
        axios.post(`http://localhost:5000/comment/create/${currentGymId}`, { comment: newComment ,commenter:userId}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
        
          setcommentMassege(res.data.message)
        }).catch((err) => {
          console.log(err);
          setcommentMassege("Write Something !")
        })
      }}>Add</button><button className="back-button" onClick={() => {
        navigate("/gympost")
      }}>back</button><p className="xx">{commentMassege}</p></div>
  )
}

export default Gymdetails