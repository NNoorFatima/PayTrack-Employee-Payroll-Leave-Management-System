import React from "react";
import Sidebar from "./Sidebar";
import "../App.css";

const Layout = ({ children, backgroundImage, className }) => {
  const containerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div className={`dashboard-container ${className || ""}`}>
      <Sidebar />
      <div className={`content-container ${backgroundImage ? "dynamic-bg" : ""}`} style={containerStyle}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
