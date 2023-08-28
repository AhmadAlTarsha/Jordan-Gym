import "./App.css";
import Register from "./components/Register/Register_c";
//import Login from "./components/Login/Login";
import NavBar from "./components/Navbar/NavBar";
import React, { useState,useEffect ,createContext  } from "react";
import axios from 'axios';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import Gympost from "./components/gymPosts/gympost";
import Login from "./components/Login/login_c";
import RegistrationComponent from "./components/Register/Register_c";
import Navbar from "./components/welcomePage/nav";
import WelcomeSection from "./components/welcomePage/welcome";
import Home from "./components/home";
export const AppContext = createContext();

function App() {
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [IsLoggedIn ,setIsLoggedIn ]=useState(false)
  const [register ,setRegister ]=useState("")
  const [login ,setLogin ]=useState("")
  const [userName ,setUserName ]=useState("")
  

 
  return (
    <div className="login_page">
          <><AppContext.Provider value={{setIsLoggedIn,IsLoggedIn,setRegister,register,login,setLogin,setToken,token,setUserName,userName}}>
   
 
   <Navbar />
      
<Routes>
   
   <Route path="/register" element={<RegistrationComponent/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/" element={<Gympost/>} />
   
  
   

</Routes>
    </AppContext.Provider>
    </>
    </div>

  
  );
}

export default App;
