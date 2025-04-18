// src/routes/Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
// import EmployeeDashboard from "../pages/Employee/EmployeeDashboard";
import EmployeeProfile from "../pages/Employee/EmployeeProfile"; 
import DisplaySalarySlip from "../pages/Employee/DisplaySalarySlip";
import MakeLeaveRequest from "../pages/Employee/LeaveRequest";
import LeaveApproval from "../pages/Employee/LeaveApproval";
// import EmpLogin from "../pages/Employee/EmployeeLogin";
import ChangePasswordPage from '../pages/Employee/ChangePasswordPage';


import AdminDashboard from "../pages/Administrator/AboutUS"; // ✅ Set as the default landing page
import AddHr from "../pages/Administrator/AddHr";
import AddManager from "../pages/Administrator/AddManager";
import RemoveHr from "../pages/Administrator/RemoveHR";
import RemoveManager from "../pages/Administrator/RemoveManager";
import AdminLogin from "../pages/Administrator/AdminLogin";

import HREmpRemoval from "../pages/HR/HREmpRemoval";

import Dashboard from "../pages/Manager/HomePage";
import ManagerLogin from "../pages/Manager/ManagerLogin";
import ListEmployees from "../pages/Manager/ListEmployees"; // not in use crrently 

import EmployeeLogin from "../pages/Employee/EmployeeLogin";



const AppRoutes = () => {
  //const userId = localStorage.getItem("userId"); // Fetch user ID
  // const userId=1;
  return (
    <Routes>
      {/* Employees */}
      {/* <Route path="/" element={<EmployeeDashboard />} /> */}
      <Route path="/profile" element={<EmployeeProfile />} />
      <Route path="/payslip" element={<DisplaySalarySlip />} />
      <Route path="/leave-request" element={<MakeLeaveRequest />} />
      <Route path="/leave-approval" element={<LeaveApproval />} />
      <Route path="/employee-login" element={<EmployeeLogin />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />


      {/* Admin */}
      {/* <Route path="/" element={<AdminDashboard />} /> ✅ Default page is now Admin.js */}
      <Route path="/about-us" element={<AdminDashboard />} />
      <Route path="/add-hr" element={<AddHr />} />
      <Route path="/add-manager" element={<AddManager />} />
      <Route path="/remove-hr" element={<RemoveHr />} />
      <Route path="/remove-manager" element={<RemoveManager />} />
      <Route path="/loginAdmin" element={<AdminLogin />} />

      {/* HR */}
      {/* <Route path="/" element={<HREmpRemoval />} /> */}
      <Route path="/emp-removal" element={<HREmpRemoval />} />


      {/* Manager */}
      <Route path="/manager-dashboard" element={<Dashboard />} />     
      <Route path="/list-employees" element={<ListEmployees />} />
      {/* <Route path="/" element={<ManagerLogin />} /> */}
      <Route path="/manager-login" element={<ManagerLogin />} />
      
      
      {/* root paths  */}
      <Route path="/" element={<ManagerLogin />} />
      {/* <Route path="/" element={<EmployeeLogin />} /> */}

    </Routes>
  );
};

export default AppRoutes;
