import React, { useState } from "react";
import ManagerLayout from "../../components/ManagerLayout"; // Import ManagerLayout
import "./Dashboard.css"; // Keeping the existing styles

const ManagerDashboard = () => {
  const [view, setView] = useState("home"); // Control the sidebar navigation

  return (
    <ManagerLayout>
      <div className="dashboard-content">
        {view === "home" && <Home />}
        {view === "leave-requests" && <LeaveRequests />}
        {view === "employees" && <Employees />}
        {view === "reports" && <Reports />}
      </div>
    </ManagerLayout>
  );
};

// Home Section
const Home = () => (
  <div className="content-section">
    <h1>Welcome to the Manager Dashboard</h1>
    <p>Here you can manage staff, view reports, and handle leave requests.</p>
  </div>
);

// Leave Requests Section
const LeaveRequests = () => (
  <div className="content-section">
    <h1>Leave Requests</h1>
    <p>View and approve leave requests from employees.</p>
  </div>
);

// Employees Section
const Employees = () => (
  <div className="content-section">
    <h1>Employees</h1>
    <p>Manage employee details and assignments.</p>
  </div>
);

// Reports Section
const Reports = () => (
  <div className="content-section">
    <h1>Reports</h1>
    <p>Generate and review employee performance reports.</p>
  </div>
);

export default ManagerDashboard;
