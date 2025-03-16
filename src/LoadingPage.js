import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; 

const LandingPage = () => {

  return (
    <div 
      className="landing-page" 
      
    >
      <h1>Select Your Role</h1>
      <div className="role-buttons">
        <button className="active-btn">Employee</button>
        <Link to="./LoadingPage">
          <button className="active-btn">Admin</button>
        </Link>
        <button className="active-btn">Manager</button>
        <button className="active-btn">HR</button>
      </div>
    </div>
  );
};

export default LandingPage;