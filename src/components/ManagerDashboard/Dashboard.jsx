import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleLogout = (event) => {
    event.preventDefault(); // Prevent form from refreshing
    navigate("/LoginForm"); // Redirect to the login page
  };

  return (
    <div className="dashboard-wrapper">
      {/* Top Navigation */}
      <header className="top-nav">
        <div className="nav-left">
          <h1>Manager Panel</h1>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-link">Profile</a>
          <a href="#" className="nav-link" onClick={handleLogout}>Logout</a>
        </div>
      </header>

      {/* Sidebar + Main Content */}
      <div className="dashboard-content">
        <aside className="sidebar">
          <ul>
            <li><a href="#">🏠 Home</a></li>
            <li><a href="#">📝 Leave Requests</a></li>
            <li><a href="#">💼 Employees</a></li>
            <li><a href="#">📊 Reports</a></li>
          </ul>
        </aside>

        <main className="main-area">
          <section className="content-section">
            <h2>Welcome to the Manager Dashboard</h2>
            <p>Here you can manage staff, view reports, and handle leave requests.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
