
import React, {
  useState, useContext,
  useEffect,
} from "react";
import "./gymdetails.css"
import { useNavigate, Link, } from "react-router-dom";
import { AppContext } from "../../../App";
import axios from "axios";
const Gymdetials = () => {
  const [newComment, setNewComment] = useState("")
  const [commentMassege, setCommentMassege] = useState("");
  const [currentGym, setCurrentGym] = useState("" );
  const { token ,userId} = useContext(AppContext)
  
  const[currentGymId,setCurrentGymId]=useState(localStorage.getItem("currentGym"))

  
  const getGym= async()=>{
await axios.get(`http://localhost:5000/gym/${currentGymId}`).then((response) => {
      setCurrentGym(response?.data?.gym)
    }).catch((err) => {

      console.log(err);
    })
   
  }

  
  useEffect(() => {

 getGym()
   
  }, [])
  const navigate = useNavigate();
  return (
    <div className="gym-details-container"><div className="gym-info" ><p>Name : {currentGym?.name}</p><p>Location : {currentGym?.location}</p><div className="memberShip_div"><h3>MempershipPrice : </h3><p>{currentGym?.mempershipPrice?.oneMonth
    } / Month</p><p>{currentGym?.mempershipPrice?.threeMonth
    } /Three Month</p><p>{currentGym?.mempershipPrice?.oneYear
    } / Annually</p></div><div> <h3>ClosingDays:</h3>{currentGym?.ClosingDays?.map((ele)=>{
      return <li>{ele.day}</li>
    })
    }</div><p>facilities : {currentGym?.facilities
    }
      </p><ul>Name Of Gym coach's : {currentGym?.nameOfTriner?.map(oneCoach => {
       return <li>{oneCoach}</li>
      })}</ul><p>Gym Owner : {currentGym?.gymOwner?.firstName}
      </p> <Link href="">Click to Contact With Us And Be One of Our Family</Link><textarea id="commentTextArea"className="comment-input" onChange={(e) => {
        setNewComment(e.target.value)

      }} placeholder="Add comment"></textarea></div><button className="comment-button" onClick={async() => {
        
      await  axios.post(`http://localhost:5000/comment/create/${currentGymId}`, { comment: newComment ,commenter:userId}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
         
          setCommentMassege(res.data.message)
       
        }).catch((err) => {
          console.log(err);
          setCommentMassege("Write Something !")
        })
      }}>Add</button><button className="back-button" onClick={() => {
        navigate("/gympost")
      }}>back</button><p className="xx">{commentMassege}</p></div>
  )
}

export default Gymdetials