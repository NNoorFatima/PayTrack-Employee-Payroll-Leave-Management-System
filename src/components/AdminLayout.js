import React from "react";
import "./Admin.css"; 

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="admin-content-container">{children}</div>
    </div>
  );
};

export default AdminLayout;
