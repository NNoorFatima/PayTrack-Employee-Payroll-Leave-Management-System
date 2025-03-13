import React from "react";
import Sidebar from "./Sidebar";
import "../App.css";

const Layout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content-container">{children}</div>
    </div>
  );
};

export default Layout;
