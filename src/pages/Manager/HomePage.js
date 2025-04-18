// ManagerDashboard.js
import React, { useState , useEffect } from "react";
import ManagerLayout from "../../components/ManagerLayout"; // Import ManagerLayout
import "./HomePage.css"; // Keeping the existing styles
import "./Employee.css"; // custom styles here
import "./HomeSection.css";


const ManagerDashboard = () => {
  const [view, setView] = useState("home"); // Control the displayed content

  return (
    <ManagerLayout setView={setView}>
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
  <div className="content-section Home-section">
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
const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const departmentId = localStorage.getItem("departmentId");
  
    if (departmentId) {
      fetch(`http://localhost:8080/employees/users/department/${departmentId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Data fetched:", data);
          const formatted = data.map((emp) => ({
            id: emp.userid,
            name: emp.name,
            email: emp.email,
            dateOfJoin: emp.date_of_join,
            address: emp.address
          }));
          setEmployees(formatted);
        })
        .catch((err) => console.error("Error fetching employees:", err));
    }
  }, []);
  
  return (
    <div className="content-section employees-section">
      <h1>Employees List</h1>
      <div className="table-wrapper">
        <table className="employees-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Joining</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.dateOfJoin}</td>
                <td>{emp.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


// Reports Section
const Reports = () => (
  <div className="content-section">
    <h1>Reports</h1>
    <p>Generate and review employee performance reports.</p>
  </div>
);

export default ManagerDashboard;
