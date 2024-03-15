import React, { Component } from 'react';
import './calculator.css'; // Import CSS file for Calculator component

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      bmi: null
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  calculateBMI = () => {
    const { weight, height } = this.state;
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI with formula
      this.setState({ bmi });
    }
  }

  render() {
    const { weight, height, bmi } = this.state;
    return (
      <div className="calculator-container">
        <h2>BMI Calculator</h2>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={height}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.calculateBMI}>Calculate BMI</button>
        {bmi && <div>Your BMI is: {bmi}</div>}
      </div>
    );
  }
}

export default Calculator;
