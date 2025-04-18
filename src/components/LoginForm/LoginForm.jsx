import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form from refreshing
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}> {/* Attach onSubmit handler */}
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forget">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forget password?</a>
        </div>

        <button type="submit">Login</button> {/* Calls handleLogin on click */}
      </form>
    </div>
  );
};

export default LoginForm;