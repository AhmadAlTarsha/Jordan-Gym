import "./App.css";
import React, { useState,createContext  } from "react";
import { Routes, Route,  } from "react-router-dom";
import Gympost from "./components/gymPosts/gympost";
import Login from "./components/Login/login_c";
import RegistrationComponent from "./components/Register/Register_c";
import Navbar from "./components/welcomePage/nav";
import AddGym from "./components/add/Addgym";
import MyGym from "./components/mygym/mygym";
export const AppContext = createContext();

function App() {
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [userId,setUserId]=useState(localStorage.getItem("userId"))
  const [user_role,setUserRole]=useState(localStorage.getItem("userRole"))
  const[loggedIn,setLoggedIn]=useState(localStorage.getItem("loggedIn"))
 
  const [register ,setRegister ]=useState("")
  const [loginMessage ,setLoginMessage  ]=useState("")
  const [userName ,setUserName ]=useState("")
  const [role, setRole] = useState("64e4f00a4eafc1ed54ea4b38")
  const [gymOwner, setGymOwner] = useState("")
 
  return (
    <div className="login_page">
          <><AppContext.Provider value={{loggedIn,setLoggedIn,setUserRole,user_role,setRegister,register,loginMessage,setLoginMessage,setToken,token,setUserName,userName ,role, setRole,setUserId,userId,gymOwner, setGymOwner}}>
   
 
   <Navbar />
  
      
<Routes>
   
   <Route path="/register" element={<RegistrationComponent/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/gympost" element={<Gympost/>} />
   <Route path="/addGym" element={<AddGym/>} />
  
   <Route path="/myGym" element={<MyGym/>} />
   
  
   

</Routes>
    </AppContext.Provider>
    </>
    </div>

  
  );
}

export default App;
