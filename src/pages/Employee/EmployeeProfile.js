import React from "react";
import Layout from "../../components/EmployeeLayout"; // Ensure the layout is consistent
import "./employeeProfile.css"; // Ensure styles are consistent with Manager layout

const EmployeeProfilePage = () => {
  return (
    <Layout>
      <div className="content-section">
        <h1 className="profile-title">Employee Profile</h1>
        <div className="profile-item">
          <strong>Name:</strong> John Doe
        </div>
        <div className="profile-item">
          <strong>Email:</strong> john.doe@example.com
        </div>
        <div className="profile-item">
          <strong>Date of Joining:</strong> 2024-01-15
        </div>
        <div className="profile-item">
          <strong>Gender:</strong> Male
        </div>
        <button className="change-password-btn">Change Password</button>
      </div>
    </Layout>
  );
}

export default EmployeeProfilePage;
