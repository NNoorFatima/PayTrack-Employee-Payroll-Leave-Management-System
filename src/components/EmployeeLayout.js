import React from "react";
import Sidebar from "./EmployeeSidebar"; // Import the Sidebar for Employee
import "./EmployeeSidebar.css"; // Import your custom CSS styles for Employee
import backgroundImg from "../images/leavreq.jpeg"; // Import background image

// The layout component that wraps the entire employee dashboard
const EmployeeLayout = ({ children }) => {
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
            <a href="#" className="nav-link logout-btn">Logout</a>
          </div>
        </header>

        {/* Sidebar and Main Content */}
        <div className="dashboard-content">
          <Sidebar /> 
          <main className="main-content">
            {children} {/* Dynamic content */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayout;
