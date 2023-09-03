import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import "./addgym.css"; // Assuming you've created a CSS file named AddGym.css

const AddGym = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [nameOfTrainer, setNameOfTrainer] = useState("");
  const [mempershipPrice, setMembershipPrice] = useState("");
  const [facilities, setFacilities] = useState("");
  const { token, userId, gymOwner } = useContext(AppContext);

  return (
    <div className="add-gym-container">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="nameOfTrainer"
        placeholder="Trainer's Name"
        onChange={(e) => {
          setNameOfTrainer(e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="membershipPrice"
        placeholder="Membership Price"
        onChange={(e) => {
          setMembershipPrice(e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="facilities"
        placeholder="Facilities"
        onChange={(e) => {
          setFacilities(e.target.value);
        }}
        required
      />
      <button
        className="add-button"
        onClick={() => {
          const newGym = {
            gymOwner: userId,
            name,
            location,
            nameOfTrainer,
            mempershipPrice,
            facilities
          };

          axios.post(`http://localhost:5000/gym/create`, newGym, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => {
            console.log(res);
          }).catch((err) => {
            console.log(err);
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddGym;
