import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import "./addgym.css"; 


const AddGym = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [nameOfTriner, setNameOfTrainer] = useState(['']);
  const [mempershipPrice, setMembershipPrice] = useState({});
  const [oneMonth,setOneMonth]=useState(0)
  const [threeMonth,setThreeMonth]=useState(0)
  const [oneYear,setOneYear]=useState(0)
  const [numberOfMember,setNumberOfMember]=useState(0)
  const [ClosingDays,setClosingDays]=useState("")
  const [facilities, setFacilities] = useState("");
  const { token, userId, gymOwner } = useContext(AppContext);
  const [AddMassege, setAddMassege] = useState("");
  const [numInputs, setNumInputs] = useState(1);
  const [test, settest] = useState(null);
    const [inputValues, setInputValues] = useState(['']);
    
    const handleNumInputsChange = (e) => {
      const count = parseInt(e.target.value, 10) || 0;
      setNumInputs(count);
      setInputValues(new Array(count).fill(''));
    };
  
    const handleInputChange = (e, index) => {
     
      const newInputValues = [...nameOfTriner];
      newInputValues[index] = e.target.value;
      setNameOfTrainer(newInputValues);
    };
  
    const handleSubmit = (e) => {
      
      console.log(nameOfTriner);
    };
  
  return (
    <div className="add-gym-container">
      <input
        type="text"
        name="name"
        placeholder="Gym Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Gym Location"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        required
      />
       <div >
      
      <form className="dynamic_input" >
        <label htmlFor="numInputs">Number of Coach:</label>
        <input
 placeholder="Write The Numper Of Coach You Have"
          type="number"
          id="numInputs"
          min="0"
         // value={numInputs}
          onChange={handleNumInputsChange}
        />
       
        <div>
          {Array.from({ length: numInputs }, (_, index) => (
            <div key={index}>
              <input
                type="text"
            placeholder={`Coach Num ${index+1}`}
                value={nameOfTriner[index]}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
          ))}
        </div>
       
      </form>
    </div>
<label>Mempership Price :</label>
<div className="memperShip_input"><input
        type="text"
        name="membershipPrice"
        placeholder="one Month"
        onChange={(e) => {
          setOneMonth(e.target.value);
        }}
        required
      /><input
      type="text"
      name="membershipPrice"
      placeholder="Three Month"
      onChange={(e) => {
        setThreeMonth(e.target.value);
      }}
      required
    /><input
    type="text"
    name="membershipPrice"
    placeholder="Annually"
    onChange={(e) => {
      setOneYear(e.target.value);
    }}
    required
  /></div>
      <input
        type="number"
        name="Number Of Members"
        placeholder="Number Of Members"
        onChange={(e) => {
          setNumberOfMember(e.target.value);
        }}
        required
      />
    
     <div class="weekDays-selector">
       <label>Closing Days:</label>
  <input onClick={()=>{
    if (test==null) {
      settest(1)
      console.log(test);
    }else{settest(null)
    console.log(test);}
  }} type="checkbox" id="weekday-mon" class="weekday" />
  <label for="weekday-mon">M</label>
  <input type="checkbox" id="weekday-tue" class="weekday" />
  <label for="weekday-tue">T</label>
  <input type="checkbox" id="weekday-wed" class="weekday" />
  <label for="weekday-wed">W</label>
  <input type="checkbox" id="weekday-thu" class="weekday" />
  <label for="weekday-thu">T</label>
  <input type="checkbox" id="weekday-fri" class="weekday" />
  <label for="weekday-fri">F</label>
  <input type="checkbox" id="weekday-sat" class="weekday" />
  <label for="weekday-sat">S</label>
  <input type="checkbox" id="weekday-sun" class="weekday" />
  <label for="weekday-sun">S</label>
</div>
      <input
        type="text"
        name="facilities"
        placeholder="Gym Facilities"
        onChange={(e) => {
          setFacilities(e.target.value);
        }}
        required
      />
      <button
        className="add-button"
        onClick={() => {
           handleSubmit()
           setMembershipPrice({oneMonth:oneMonth,threeMonth:threeMonth,oneYear:oneYear})
           console.log(oneMonth);
           console.log(threeMonth);
           console.log(oneYear);
           console.log(mempershipPrice);
          const newGym = {
            gymOwner: userId,
            name,
            location,
            nameOfTriner,
            mempershipPrice,
            facilities,
            numberOfMember

          };
         
          axios.post(`http://localhost:5000/gym/create`, newGym, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => {
            console.log(res.data);
            setAddMassege(res.data.message)
            console.log(res);
          }).catch((err) => {
            console.log(err);
            setAddMassege("Verify that all information has been entered")
          });
        }}
      >
        Add
      </button>
      <p className="xx">{AddMassege}</p>
    </div>
  );
}

export default AddGym;



  
 
 