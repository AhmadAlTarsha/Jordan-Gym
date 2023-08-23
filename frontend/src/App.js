import "./App.css";
import React, { useState,useEffect ,createContext  } from "react";
import axios from 'axios';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
export const AppContext = createContext();
function App() {
  const [token,setToken]=useState(localStorage.getItem("token"))

  axios.get("http://localhost:5000/gym/posts").then((res)=>{
    console.log(res.data.gym
       );
       const a=res.data.gym
       console.log(a[0].mempershipPrice);
     
  })
  return (
    <><AppContext.Provider value={""}>

<div className="App">
      <h1>Hello, World!</h1>
    </div>
    </AppContext.Provider>
    </>
  
  );
}

export default App;
