import React, { useState,createContext  } from "react";
import { Routes, Route,  } from "react-router-dom";
function DynamicInputFields() {
    const [numInputs, setNumInputs] = useState(1);
    const [inputValues, setInputValues] = useState(['']);
  
    const handleNumInputsChange = (e) => {
      const count = parseInt(e.target.value, 10) || 0;
      setNumInputs(count);
      setInputValues(new Array(count).fill(''));
    };
  
    const handleInputChange = (e, index) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = e.target.value;
      setInputValues(newInputValues);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputValues);
    };
  
    return (
      <div >
      
        <form className="dynamic_input" onSubmit={handleSubmit}>
          <label htmlFor="numInputs">Number of Inputs:</label>
          <input
            type="number"
            id="numInputs"
            min="1"
            value={numInputs}
            onChange={handleNumInputsChange}
          />
         
          <div>
            {Array.from({ length: numInputs }, (_, index) => (
              <div key={index}>
                <input
                  type="text"
              
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
            ))}
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  export default DynamicInputFields;