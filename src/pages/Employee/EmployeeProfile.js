import React from "react";
import Layout from "../../components/Layout";
import profilebackground from "../../images/freepik__adjust__98402.png";

function ProfilePage() {
  return (
    <Layout backgroundImage={profilebackground}>
      <EmployeeProfile />
    </Layout>
  );
}

const EmployeeProfile = () => {
  return (
    <div className="content-box">
      <div className="profile-details">
        <h1>Employee Profile</h1>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Date of Joining:</strong> 2024-01-15</p>
        <p><strong>Gender:</strong> Male</p>
        <button className="change-password-btn">Change Password</button>
      </div>
    </div>
  );
};

export default ProfilePage;
