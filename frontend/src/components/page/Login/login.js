import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { AppContext } from "../../../App";
const Login = () => {
  const {
    setLoggedIn, loginMessage, setLoginMessage, setUserId, setGymOwner, setUserRole, setToken, setName
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [login, setLogin] = useState({});
  const handelChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  const handleLogin = async (e) => {


    await axios
      .post("http://localhost:5000/users/login", login)
      .then((res) => {
        if (res.data.success) {
          const token = res.data.token;
          const role = res.data.role.role;
          const user_id = res.data.userId;
          const name = res.data.name

          localStorage.setItem("token", token);
          localStorage.setItem("userId", user_id);
          localStorage.setItem("userRole", role);
          localStorage.setItem("loggedIn", true);
          setName(name)
          setGymOwner(user_id);
          setUserRole(role);
          setLoggedIn(true);

          setToken(token);

          setUserId(user_id);

          setLoginMessage(res?.data?.message)


          navigate("/gympost")
        }
      })
      .catch((error) => {

        { loginMessage == undefined ? setLoginMessage("please Fill the input") : setLoginMessage(error?.response?.data?.message); }

      });

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="email"
        name="email"

        onChange={(e) => handelChange(e)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"

        onChange={(e) => handelChange(e)}
      />
      <button onClick={(e) => handleLogin(e)}>Login</button>
      <p className="loginMessage">
        Not a Member? <Link className="register_link" to="/register">Register now</Link>
      </p>
      <p className="loginMessage">{loginMessage}</p>
    </div>
  );
};

export default Login;
