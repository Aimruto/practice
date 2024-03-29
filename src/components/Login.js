import React, { useState } from "react";
import "./login.css";

// Inside the handleLogin function
 // Redirect to the dashboard after login

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setError(null); // Reset error state when toggling form
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const url = showLogin ? '/api/login' : '/api/signup';
    console.log(formData)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        console.log(`${showLogin ? 'Login' : 'Sign up'} successful`);
        setError("");
       
        // Reset form after successful login/signup
        setFormData({
          fullname: "",
          email: "",
          username: "",
          password: ""
        });
        window.location.replace("/")
      } else {
        return response.json().then(data => {
          throw new Error(data.error || 'Failed to authenticate');
        });
      }
    })
    .catch(error => {
      setError(error.message); // Set error state
      console.error('Error:', error.message);
    });
  };

  return (
    <>
    <div className="full-container">
      <div className="login-form-container" style={{ display: showLogin ? 'block' : 'none' }}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message if present */}
        <form id="loginForm" onSubmit={handleFormSubmit}>
          <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
          <input type="submit" value="Login" className="login-btn" /> {/* Add class name for login button */}
        </form>
        <div className="login-switch">
          <p>Don't have an account? <button onClick={toggleForm} className="signup-btnf">Sign Up</button></p> {/* Add class name for sign up button */}
        </div>
      </div>

      <div className="signup-form-container" style={{ display: showLogin ? 'none' : 'block' }}>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message if present */}
        <form id="signupForm" onSubmit={handleFormSubmit}>
          <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleInputChange} required />
          <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
          <input type="submit" value="Sign Up" className="signup-btn" /> {/* Add class name for sign up button */}
        </form>
        <div className="signup-switch">
          <p>Already have an account? <button onClick={toggleForm} className="login-btnf">Login</button></p> {/* Add class name for login button */}
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
