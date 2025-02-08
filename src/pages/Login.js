// src/pages/Login.js
import React, { useState } from "react";

function Login() {
  // State to toggle between Sign Up and Log In forms
  const [isSignUp, setIsSignUp] = useState(true);

  // Form data state for both Sign Up and Log In
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission with alert messages
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      console.log("Sign Up Form submitted:", formData);
      alert("Sign Up Successful!"); // Alert message for Sign Up
    } else {
      console.log("Log In Form submitted:", formData);
      alert("Log In Successful!"); // Alert message for Log In
    }
  };

  // Toggle between Sign Up and Log In
  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setFormData({ name: "", email: "", password: "" }); // Reset form data when toggling
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>

      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <label htmlFor="name">Name :  </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required={isSignUp}  // Only required for Sign Up
            />
          </div>
        )}

        <div>
          <label htmlFor="email">Email :  </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password :  </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
      </form>

      <button  onClick={toggleForm}>
        {isSignUp
          ? "Already have an account? Log In"
          : "Don't have an account? Sign Up"}
      </button>
      
    </div>
  );
}

export default Login;  
