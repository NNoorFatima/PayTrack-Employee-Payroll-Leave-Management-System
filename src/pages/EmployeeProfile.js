import React from "react";
import Layout from "../components/Layout";

const EmployeeProfile = () => {
  return (
    <Layout>
      <h1>Employee Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Date of Joining:</strong> 2024-01-15</p>
        <p><strong>Gender:</strong> Male</p>
        <button className="change-password-btn">Change Password</button>
      </div>
    </Layout>
  );
};

export default EmployeeProfile;
