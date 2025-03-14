import React from "react";
import Layout from "../../components/Layout";
import profilebackground from "../../images/freepik__adjust__98402.png";
import "./employeeProfile.css";
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
        <p><strong>Name:</strong> <input type="text" value="John Doe" readonly/></p>
        <p><strong>Email:</strong><input type="text" value="john.doe@example.com" readonly/> </p>
        <p><strong>Date of Joining:</strong><input type="text" value="2024-01-15" readonly/></p>
        <p><strong>Gender:</strong> <input type="text" value="Male" readonly/></p>
        <button className="change-password-btn">Change Password</button>
      </div>
    </div>
  );
};

export default ProfilePage;
