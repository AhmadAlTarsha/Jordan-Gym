import React, { useState, useContext } from 'react';
import './register.css';
import axios from 'axios';
import { AppContext } from "../../../App";
import { useNavigate, Route, Link } from 'react-router-dom';
const RegistrationForm = () => {
  const navigate = useNavigate()
  const [registration, setRegistration] = useState({});
  const registerArray = [{ name: "firstName", type: "text" }, { name: "lastName", type: "text" }, { name: "age", type: "number" }, { name: "email", type: "email" }, { name: "password", type: "password" }]

  const { setRegister, register, setRole, role } = useContext(AppContext)
  const handleChange = async (e) => {

    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    registration.role == undefined ? registration.role = "64f27110b4c647371db0d38f" : console.log(1);
    try {
      await axios.post("http://localhost:5000/users/register", registration).then((res) => {
        console.log(res);
        if (res?.data?.message) {
          navigate('/login')
        }
        setRegister(res.data.message)




      }).catch((error) => {
        console.log(error);
        setRegister(error?.response?.data?.message)
      })
    } catch (error) {
      console.log(error);
    }

  }
  const handelCreateInput = (arr) => {
    return arr?.map((input, i) => {
      return <input
        type={input.type}
        name={input.name}
        placeholder={input.name}

        onChange={(e) => {
          handleChange(e);
        }}
        required
      />
    }
    )
  }
  return (<>

    <form className="registration-form" onSubmit={(e) => {
      handleSubmit(e)

    }
    }>
      <h2>Registration</h2>


      {handelCreateInput(registerArray)}
      <select name="role" onClick={(e) => handleChange(e)}>
        <option disabled selected value="">
          Register as:
        </option>
        <option value="64f27110b4c647371db0d38f">Customer</option>
        <option value="64f270ddb4c647371db0d38d">Gym Owner</option>
      </select>
      <button type="submit">Register</button>

      <p className="registerMessage">{register}</p>
      <p className="loginMessage">
        Already have an account <Link className="login_link" to="/login">Login now</Link>
      </p>
    </form>

  </>

  );
};

export default RegistrationForm;
