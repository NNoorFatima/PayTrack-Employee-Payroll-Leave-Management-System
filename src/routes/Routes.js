// src/routes/Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeDashboard from "../pages/Employee/EmployeeDashboard";
import EmployeeProfile from "../pages/Employee/EmployeeProfile"; 
import DisplaySalarySlip from "../pages/Employee/DisplaySalarySlip";
import MakeLeaveRequest from "../pages/Employee/LeaveRequest";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeDashboard />} />
      <Route path="/profile" element={<EmployeeProfile />} />
      <Route path="/payslip" element={<DisplaySalarySlip />} />
      <Route path="/leave-request" element={<MakeLeaveRequest />} />
    </Routes>
  );
};

export default AppRoutes;
