
import { Link } from "react-router-dom";
import React from "react";
import HRSidebar from "./HRSidebar"; 
import "./HRSidebar.css"; 
import backgroundImg from "../images/leavreq.jpeg"; // Import background image

const HRLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      {/* Background Image */}
      <div className="dashboard-background" style={{ backgroundImage: `url(${backgroundImg})` }}></div>

      {/* Frosted Glass Effect Wrapper */}
      <div className="frosted-glass">
        {/* Top Navigation */}
        <header className="top-nav">
          <div className="nav-left">
            
          </div>
          <div className="nav-right">
            <a href="#" className="nav-link">Profile</a>
            <Link to="/loginEmp" className="nav-link logout-btn">Logout</Link> 
            {/* change to HR login  */}
          </div>
        </header>

        {/* Sidebar and Main Content */}
        <div className="dashboard-content">
          <HRSidebar /> 
          <main className="main-content">
            {children} {/* Dynamic content */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default HRLayout;