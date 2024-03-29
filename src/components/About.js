import React, { useState } from "react";
import "./about.css";
import bmi1 from '../bmi1.png';

const About = () => {
  return (
    <><div className="about-container">
    <div className="header-part">
    <h1>About Us</h1>
    <hr />
    </div>
    <div className="content-part">
      <div className="cp-1">
      <div className="about-img-d sp"><img className='about-img' src={bmi1} alt="bmi image 1" /></div>
        <div className="cp-1-para"><div className="para-border"></div><p>BMI (Body Mass Index) is a numerical measure calculated from a person's weight and height, offering insight into their weight relative to their height. Maintaining a healthy BMI is crucial for reducing the risk of health conditions like heart disease, diabetes, and high blood pressure. It serves as a valuable tool for setting realistic weight management goals and tracking progress towards a healthier lifestyle. However, it's essential to recognize that BMI is just one aspect of overall health. Considering other factors such as muscle mass and body composition provides a more comprehensive assessment. Our website offers personalized well-being solutions tailored to your BMI, guiding you towards vitality and a happier, healthier you. Whether you're starting a transformation or maintaining balance, we provide precisely calibrated fitness routines to meet your individual needs. Welcome to a realm where your BMI shapes your journey to optimal health and well-being.</p></div>
      </div>

    </div>
    
  </div></>
    
  );
};

export default About;
