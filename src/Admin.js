import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddHR from "./AddHr";
import RemoveHR from "./RemoveHR";
import AddManager from "./AddManager";
import RemoveManager from "./RemoveManager";
import "./App.css";

const AdminDashboard = () => {
  const [view, setView] = useState("dashboard"); // ✅ Track the current section

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => setView("add-hr")}>
            <Link to="#">Add HR</Link>
          </li>
          <li onClick={() => setView("add-manager")}>
            <Link to="#">Add Manager</Link>
          </li>
          <li onClick={() => setView("remove-hr")}>
            <Link to="#">Remove HR</Link>
          </li>
          <li onClick={() => setView("remove-manager")}>
            <Link to="#">Remove Manager</Link>
          </li>
          <li onClick={() => setView("dashboard")} style={{ cursor: "pointer"}}>
            Logout
          </li> {/* ✅ Reset view to "dashboard" on logout */}
        </ul>
      </div>
{/* Main Content */}
<img src="/aboutUs.jpg" alt="Dashboard Background" className="dashboard-image" />


  {view === "dashboard" && (
    <div className="dashboard-box">
      <h1>About PayTrack</h1>
      <p>
        At PayTrack, we are committed to revolutionizing employee leave and payroll management 
        with an intuitive and automated system. Our platform helps businesses track employee leave, 
        manage payroll efficiently, and generate insightful reports—all in one place.
      </p>
      <p>
        We believe in simplifying HR operations, reducing paperwork, and ensuring accuracy in 
        employee compensation. Whether you run a small business or a large enterprise, PayTrack 
        provides a user-friendly, secure, and scalable solution to streamline your workforce management.
      </p>
      <p>
        Our mission is to make leave and payroll management hassle-free, transparent, and efficient, 
        so you can focus on growing your business while we handle the rest!
      </p>
    </div>
  )}

  {view === "add-hr" && <AddHR setView={setView} />}
  {view === "add-manager" && <AddManager setView={setView} />}
  {view === "remove-hr" && <RemoveHR setView={setView} />}
  {view === "remove-manager" && <RemoveManager setView={setView} />}
</div>

  );
};

export default AdminDashboard;
