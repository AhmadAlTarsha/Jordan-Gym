import "./App.css";
import React, { useState,createContext  } from "react";
import { Routes, Route,  } from "react-router-dom";
import Gympost from "./components/page/gymPosts/gympost"
import Login from "./components/page/Login/login";
import RegistrationComponent from "./components/page/Register/Register";
import Navbar from "./components/page/navbar/nav";
import Homescreen from "./components/page/homePage/homescreen";
import AddGym from "./components/page/addGym/Addgym";
import MyGym from "./components/page/mygym/mygym";
import Gymdetials from "./components/page/gymdetials/gymdetails";
export const AppContext = createContext();

function App() {
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [userId,setUserId]=useState(localStorage.getItem("userId"))
  const [user_role,setUserRole]=useState(localStorage.getItem("userRole"))
  const[loggedIn,setLoggedIn]=useState(localStorage.getItem("loggedIn"))
 
  const [register ,setRegister ]=useState("")
  const [loginMessage ,setLoginMessage  ]=useState("")
  const [userName ,setUserName ]=useState("")
  const [Name ,setName ]=useState("")
  const [role, setRole] = useState("64f27110b4c647371db0d38f")
  const [gymOwner, setGymOwner] = useState("")
  const [currentGym,setCurrentGym]=useState("")
  const [currentGymId, setCurrentGymId] = useState("")
 
  return (
    <div  className="main_screen">
          <><AppContext.Provider value={{loggedIn,setLoggedIn,setUserRole,user_role,setRegister,register,loginMessage,setLoginMessage,setToken,token,setUserName,userName ,role, setRole,setUserId,userId,gymOwner, setGymOwner,currentGymId, setCurrentGymId,currentGym,setCurrentGym,Name ,setName}}>
   
 {Homescreen}
   <Navbar />
 
      
<Routes>
   
   <Route path="/" element={<Homescreen/>} />
 
   <Route path="/register" element={<RegistrationComponent/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/gympost" element={<Gympost/>} />
   <Route path="/addGym" element={<AddGym/>} />
   <Route path="/gymDetails" element={<Gymdetials/>} />
   <Route path="/myGym" element={<MyGym/>} />
   
  
   

</Routes>
    </AppContext.Provider>
    </>
    </div>

  
  );
}

export default App;
