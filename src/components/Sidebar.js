import React from "react";
import { useNavigate } from "react-router-dom";
import './Sidebar.css'; 

const Sidebar = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <div className="sidebar">
      <h1 >Dashboard</h1><br />

      <button className="sidebar-btn btn1" onClick={() => navigate("/profile")}>
        View Profile
      </button><br />

      <button className="sidebar-btn btn2" onClick={() => navigate("/payslip")}>
        PaySlip
      </button><br />

      <button className="sidebar-btn btn3" onClick={() => navigate("/leave-request")}>
        Leave Request
      </button><br />
    </div>
  );
};

export default Sidebar;
