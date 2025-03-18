import React from "react";
import ManagerSidebar from "./ManagerSidebar"; // Import the Sidebar
import "./Manager.css"; // Import your CSS styles
import backgroundImg from "../images/leavreq.jpeg"; // Import background image

// The layout component that wraps the entire dashboard
const ManagerLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      {/* Background Image - This can be customized */}
      <div className="dashboard-background" style={{ backgroundImage: `url(${backgroundImg})` }}></div>

      {/* Frosted Glass Effect Wrapper */}
      <div className="frosted-glass">
        {/* Top Navigation */}
        <header className="top-nav">
          <div className="nav-left">
            <h2 className="sidebar-title">Manager Panel</h2> 
            
          </div>
          <div className="nav-right">
            <a href="#" className="nav-link">Profile</a>
            <a href="#" className="nav-link logout-btn">Logout</a>
          </div>
        </header>
      
        {/* Sidebar and Main Content */}
        <div className="dashboard-content">
          <ManagerSidebar /> 
          <main className="main-content">
            {/* Dynamic content will be rendered here */}
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ManagerLayout;
