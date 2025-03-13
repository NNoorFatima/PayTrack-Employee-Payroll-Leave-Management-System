// src/routes/Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import EmployeeProfile from "../pages/EmployeeProfile"; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeDashboard />} />
      <Route path="/profile" element={<EmployeeProfile />} />
    </Routes>
  );
};

export default AppRoutes;
