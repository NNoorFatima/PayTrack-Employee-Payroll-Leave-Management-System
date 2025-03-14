import React from "react";
import Sidebar from "./Sidebar";
import "../App.css";

const Layout = ({ children, backgroundImage, className }) => {
  // Only apply inline style if a specific background is provided
  const containerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  return (
    <div className={`dashboard-container ${className || ""}`}>
      <Sidebar />
      <div
        className={`content-container ${backgroundImage ? "dynamic-bg" : ""}`}
        style={containerStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
