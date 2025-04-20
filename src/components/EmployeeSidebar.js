import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import './EmployeeSidebar.css'; // Sidebar styling

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <aside className="sidebar">
      <h2 className="nav-left">Employee Panel</h2>
      <ul>
        {/* Clicking the button will navigate to the respective page */}
        <li><button onClick={() => navigate("/payslip")}>🏠 PaySlip</button></li>
        <li><button onClick={() => navigate("/profile")}>📝Profile</button></li>
        <li><button onClick={() => navigate("/leave-request")}>💼 Leave Requests</button></li>
        <li><button onClick={() => navigate("/leave-approval")}>🚨 Leave Approval</button></li>
        {/* Uncomment for Logout functionality if needed */}
        {/* <li style={{ marginTop: "auto" }}>
          <button className="logout-btn" onClick={() => navigate("/eLoginForm")}>Logout</button>
        </li> */}
      </ul>
    </aside>
  );
};

export default Sidebar;
