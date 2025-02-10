import React, { useState } from "react";
import Swal from "sweetalert2";
import "./login.css";

function Login() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (isSignUp && !formData.name)) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (isSignUp) {
      Swal.fire({
        title: "Sign Up Successful!",
        text: `Welcome, ${formData.name}! Your account has been created.`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Login Successful!",
        text: `Welcome back, ${formData.email}!`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {isSignUp && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="auth-button">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>
      <p onClick={() => setIsSignUp(!isSignUp)} className="toggle-text">
        {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
}

export default Login;
