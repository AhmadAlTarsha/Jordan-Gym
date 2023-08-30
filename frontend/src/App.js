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
import AddGym from "./components/add/AddGym";
export const AppContext = createContext();

function App() {
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [userId,setUserId]=useState(localStorage.getItem("userId"))
  const [user_role,setUserRole]=useState(localStorage.getItem("userRole"))
  const[loggedIn,setLoggedIn]=useState(localStorage.getItem("loggedIn"))
  const [IsLoggedIn ,setIsLoggedIn ]=useState(false)
  const [register ,setRegister ]=useState("")
  const [login ,setLogin ]=useState("")
  const [userName ,setUserName ]=useState("")
  const [role2, setRole2] = useState("")
  const [role, setRole] = useState("64e4f00a4eafc1ed54ea4b38")
 
  const [gymOwner, setGymOwner] = useState("")
 
  return (
    <div className="login_page">
          <><AppContext.Provider value={{loggedIn,setLoggedIn,setUserRole,user_role,setIsLoggedIn,IsLoggedIn,setRegister,register,login,setLogin,setToken,token,setUserName,userName,role2, setRole2,role, setRole,setUserId,userId,gymOwner, setGymOwner}}>
   
 
   <Navbar />
      
<Routes>
   
   <Route path="/register" element={<RegistrationComponent/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/gympost" element={<Gympost/>} />
   <Route path="/addGym" element={<AddGym/>} />
   
  
   

</Routes>
    </AppContext.Provider>
    </>
    </div>

  
  );
}

export default App;
