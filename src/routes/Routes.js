// src/routes/Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeDashboard from "../pages/Employee/EmployeeDashboard";
import EmployeeProfile from "../pages/Employee/EmployeeProfile"; 
import DisplaySalarySlip from "../pages/Employee/DisplaySalarySlip";
import MakeLeaveRequest from "../pages/Employee/LeaveRequest";

import AdminDashboard from "../pages/Administrator/AboutUS"; // ✅ Set as the default landing page
import AddHr from "../pages/Administrator/AddHr";
import AddManager from "../pages/Administrator/AddManager";
import RemoveHr from "../pages/Administrator/RemoveHR";
import RemoveManager from "../pages/Administrator/RemoveManager";
import AdminLogin from "../pages/Administrator/AdminLogin";

import Dashboard from "../pages/Manager/Dashboard";
import ManagerLogin from "../pages/Manager/ManagerLogin";

const AppRoutes = () => {
  //const userId = localStorage.getItem("userId"); // Fetch user ID
  const userId=1;
  return (
    <Routes>
      {/* <Route path="/" element={<EmployeeDashboard />} /> */}
      <Route path="/" element={<EmployeeProfile />} />
      <Route path="/payslip" element={<DisplaySalarySlip />} />
      <Route path="/leave-request" element={<MakeLeaveRequest />} />


      {/* <Route path="/" element={<AdminDashboard />} /> ✅ Default page is now Admin.js */}
      <Route path="/about-us" element={<AdminDashboard />} />
      <Route path="/add-hr" element={<AddHr />} />
      <Route path="/add-manager" element={<AddManager />} />
      <Route path="/remove-hr" element={<RemoveHr />} />
      <Route path="/remove-manager" element={<RemoveManager />} />
      <Route path="/loginAdmin" element={<AdminLogin />} />

      {/* <Route path="/" element={<Dashboard />} />  */}
       {/* <Route path="/" element={<ManagerLogin />} /> */}
    </Routes>
  );
};

export default AppRoutes;
