import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication logic (Replace with backend authentication)
    if (username === "admin" && password === "admin123") {
      navigate("/admin"); // Redirect to Admin Dashboard on success
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span className="icon">&#128100;</span>
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="icon">&#128274;</span>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <button 
  onClick={() => alert("Forgot password functionality not implemented yet!")} 
  className="link-button"
>
  Forget password?
</button>

          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <button onClick={() => navigate("/")} className="back-home-btn">Back to Home</button>
      </div>
    </div>
  );
};

export default Login;