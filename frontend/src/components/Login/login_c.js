import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import "./style.css"
import axios from 'axios';
import { AppContext } from "../../App"
const Login = () => {
    const { setLogin, login, setIsLoggedIn, setUserName,setRole2 } = useContext(AppContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[userId,setUserId]=useState("")

    const handleLogin = () => {
        const user = { email, password }

        axios.post("http://localhost:5000/users/login", user).then((res) => {



            if (res.data.success) {

                const token = res.data.token
                const role = res.data.role
                localStorage.setItem("token", token)
                setIsLoggedIn(true)
                console.log(token);
                console.log(role);
                setRole2(role.role)

            }

            navigate("/gymPost")

        }).catch((error) => {


            console.log(error.response.data.message);
setLogin(error.response.data.message)
        })
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
            <p>not a member? <Link to="/register">Register now</Link></p>
        </div>
    );
};

export default Login;
