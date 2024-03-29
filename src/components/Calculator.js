import React, { useState, useEffect } from "react";
import "./calculator.css";
import lolchop from"../lolchop.png"

const Calculator = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!bmi) return;
    if (bmi < 18.5) {
      setMsg("You are underweight...");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMsg("You are healthy...");
    } else {
      setMsg("You are obese. Please seek medical attention...");
    }
  }, [bmi]);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height || !gender) {
      alert("Please enter valid weight, height, and gender");
      return;
    }
    const bmiFormula = (weight / (height * height)) * 703;
    setBmi(bmiFormula.toFixed(2));
  };

  const reset = () => {
    setGender("");
    setWeight("");
    setHeight("");
    setBmi("");
    setMsg("");
  };

  return (
    <div className="calMain">
      <div className="calContainer">
        <h1 className="calTitle">BMI Calculator</h1>
        <hr />
        <div className="lower">
        <form onSubmit={calculateBMI}>
          <div>
            <label className="labels1">Gender:</label>
            <br />
            <select
              className="bmiInputd"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            
          </div>
          <br />
          <div>
            <label className="labels2">Weight (in lbs):</label>
            <br />
            <input
              className="bmiInput"
              type="number"
              placeholder="Enter your weight..."
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label className="labels3">Height (in inches):</label>
            <br />
            <input
              className="bmiInput"
              type="number"
              placeholder="Enter your height..."
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          
          <div className="butt">
            <button className="btnCal" type="submit">Calculate</button>
            <button className="btnReload" type="button" onClick={reset}>Reset</button>
          </div>
          
          
          <div className="result">
            <h3 className="calA">Gender: {gender}</h3>
            <h3 className="calB">BMI: {bmi}</h3>
            <p className="pMsg">{msg}</p>
          </div>
        </form>
        <img className='lollchop' src={lolchop} alt="Chopper Icon" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
