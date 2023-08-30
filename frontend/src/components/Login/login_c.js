import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import "./style.css"
import axios from 'axios';
import { AppContext } from "../../App"
const Login = () => {
    const {loggedIn,setLoggedIn,setLogin,login, setIsLoggedIn, setUserName, setRole2, userId, setUserId, setGymOwner, gymOwner, setUserRole, user_role } = useContext(AppContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        const user = { email, password }

        axios.post("http://localhost:5000/users/login", user).then((res) => {



            if (res.data.success) {

                const token = res.data.token
                const role = res.data.role.role
                const user_id = res.data.userId
                setIsLoggedIn(true)
                setGymOwner(user_id)
                setUserRole(role)
                localStorage.setItem("token", token)
                localStorage.setItem("userId", user_id)
                localStorage.setItem("userRole", user_role)
                setLoggedIn(true)
                localStorage.setItem("loggedIn",true)

                console.log(role);

                console.log(gymOwner);
                // console.log(token);
                //  console.log(role.role);
                console.log(user_id);
                setRole2(role.role)
                setUserId(user_id)
                // console.log(userId);
            }



        }).catch((error) => {


            console.log(error);
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
