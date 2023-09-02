
import React, { useState,useContext, useEffect,  } from "react";
import { Routes, Route, useNavigate, } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "axios";
const Gymdetails = () => {
    
    const { token,currentGymId,currentGym, } = useContext(AppContext)

    const navigate = useNavigate();
      console.log(currentGym);

  return (
    <div><p>{currentGym.name}</p><p>{currentGym.location}</p><p>{currentGym.location}
    </p><input placeholder="add comminte"></input><button>done</button><button onClick={()=>{
        navigate("/gympost")
    }}>back</button></div>
  )
}

export default Gymdetails