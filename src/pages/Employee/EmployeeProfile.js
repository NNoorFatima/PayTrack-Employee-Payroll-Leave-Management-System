import React from "react";
import Layout from "../../components/EmployeeLayout"; // Ensure the layout is consistent
import "./employeeProfile.css"; // Ensure styles are consistent with Manager layout
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeProfilePage = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [user, setUser] = useState(null);
  const userId = 1; // Replace with the logged-in user's ID (e.g., from authentication)
  useEffect(() => {
    // Fetch Employee Data
    fetch(`http://localhost:8080/employees/${userId}`)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            console.error("Error fetching employee data", text);
            throw new Error("Failed to fetch employee data");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received employee data:", data);
        setEmployee(data);

        // Fetch User Data after employee data is successfully fetched
        return fetch(`http://localhost:8080/users/${localStorage.getItem("employeeId")}`);
      })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            console.error("Error fetching user data", text);
            throw new Error("Failed to fetch user data");
          });
        }
        return response.json();
      })
      .then((userData) => {
        console.log("Received user data:", userData);
        setUser(userData); // Set user data in state
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [userId]);

  if (!employee || !user) {
    return <div>Loading...</div>;
  }
  
  return (
    <Layout>
      <div className="content-section1">
        <h1 className="profile-title">Employee Profile</h1>
        <div className="profile-item">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="profile-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="profile-item">
          <strong>Salary:</strong> {employee.salary}
        </div>
        <div className="profile-item">
          <strong>Department:</strong> {employee.deptid}
        </div>
        
        <button
          className="change-password-btn"
          onClick={() => navigate("/change-password", { state: { userId } })}
        >
          Change Password
        </button>
      </div>
    </Layout>
  );
}

export default EmployeeProfilePage;
