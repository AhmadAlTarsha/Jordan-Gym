import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { AppContext } from "../../App";
const Login = () => {
  const {
setLoggedIn,loginMessage,setLoginMessage,setIsLoggedIn, setUserId,setGymOwner,setUserRole,setToken,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = { email, password };

    axios
      .post("http://localhost:5000/users/login", user)
      .then((res) => {
        if (res.data.success) {
          const token = res.data.token;
          const role = res.data.role.role;
          const user_id = res.data.userId;

          localStorage.setItem("token", token);
          localStorage.setItem("userId", user_id);
          localStorage.setItem("userRole", role);
          localStorage.setItem("loggedIn", true);
          
          setGymOwner(user_id);
          setUserRole(role);
          setLoggedIn(true);
          console.log(role);
          setToken(token);
          console.log(user_id);
          setUserId(user_id);
          console.log(res.data);
          setLoginMessage(res.data.message)

       
          navigate("/gympost")
        }
      })
      .catch((error) => {
        console.log(error);
        setLoginMessage(error?.response?.data?.message);
      });
     
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p className="loginMessage">
        not a member? <Link className="register_link" to="/register">Register now</Link>
      </p>
      <p className="loginMessage">{loginMessage}</p>
    </div>
  );
};

export default Login;
