import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css"; 

const AdminSidebar = ({ setView }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <button onClick={() => setView("dashboard")}>About Us</button>
        </li>
        <li>
          <button onClick={() => setView("add-hr")}>Add HR</button>
        </li>
        <li>
          <button onClick={() => setView("add-manager")}>Add Manager</button>
        </li>
        <li>
          <button onClick={() => setView("remove-hr")}>Remove HR</button>
        </li>
        <li>
          <button onClick={() => setView("remove-manager")}>Remove Manager</button>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
