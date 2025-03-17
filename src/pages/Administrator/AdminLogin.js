import React from "react";
import AdminLayout from "../../components/AdminLayout";
import background from "../../images/aboutUs.jpg"; // Example background image
import "../../App.css"; // Global styles
import "./Admin.css"; // Page-specific styles

function AdminLogin() {
  return (
    <AdminLayout backgroundImage={background}>
      <div>
        <LoginForm />
      </div>
    </AdminLayout>
  );
}

const LoginForm = () => {
  return (
    <div className="admin-form-container">
      <div className="form-header">
        <h1>Admin Login</h1>
        <h2>Enter Your Credentials</h2>
      </div>

      <form className="admin-form-body">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />

        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
