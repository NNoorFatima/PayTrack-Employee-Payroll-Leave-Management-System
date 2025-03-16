import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Admin"; // ✅ Set as the default landing page
import AddHr from "./AddHr";
import AddManager from "./AddManager";
import RemoveHr from "./RemoveHR";
import RemoveManager from "./RemoveManager";
import AdminLogin from "./AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} /> {/* ✅ Default page is now Admin.js */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-hr" element={<AddHr />} />
        <Route path="/add-manager" element={<AddManager />} />
        <Route path="/remove-hr" element={<RemoveHr />} />
        <Route path="/remove-manager" element={<RemoveManager />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
