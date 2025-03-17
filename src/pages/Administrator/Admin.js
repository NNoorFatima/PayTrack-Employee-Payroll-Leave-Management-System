import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import AdminSidebar from "../../components/AdminSidebar"; 
import AddHR from "./AddHr";
import AddManager from "./AddManager";
import RemoveHR from "./RemoveHR";
import RemoveManager from "./RemoveManager";
import "../../App.css"; 
import "./Add.css"; // Page-specific styles

function Admin() {
  const [view, setView] = useState("dashboard"); 

  return (
    <AdminLayout>
      <div className="admin-dashboard-container">
        <AdminSidebar setView={setView} />  {/* ✅ Sidebar only renders here */}

        <div className="admin-content">
          {view === "dashboard" && (
            <div className="admin-dashboard-box">
              <h1>Admin Dashboard</h1>
              <h2>Manage HR, Employees, and Payroll</h2>
              <p>System Status: Online</p>
              <p>Active Employees: 250</p>
              <p>Pending HR Approvals: 12</p>
              <h2>Company Overview</h2>
              <p>We provide an automated HR and payroll system to streamline business operations.</p>
            </div>
          )}
          {view === "add-hr" && <AddHR />}
          {view === "add-manager" && <AddManager />}
          {view === "remove-hr" && <RemoveHR />}
          {view === "remove-manager" && <RemoveManager />}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Admin;
