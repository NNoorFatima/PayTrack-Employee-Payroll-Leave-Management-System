// ManagerSidebar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Manager.css";

const ManagerSidebar = ({ setView }) => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h2 className="nav-left">Manager Panel</h2>    
      <ul>
        <li>
          <button onClick={() => setView("home")}>🏠 Home</button>
        </li>
        <li>
          <button onClick={() => setView("leave-requests")}>📝 Leave Requests</button>
        </li>
        <li>
        <button onClick={() => setView ("employees")}>💼 Employees</button>
        </li>
        <li>
          <button onClick={() => setView("reports")}>📊 Reports</button>
        </li>
        {/* 
        <li style={{ marginTop: "auto" }}>
          <button className="logout-btn" onClick={() => navigate("/LoginForm")}>Logout</button>
        </li> */}
       
      </ul>
    </aside>
  );
};

export default ManagerSidebar;
