import React, { useState } from "react";

const RemoveManager = ({ setView }) => {
  const [empId, setEmpId] = useState("");
  const [deptId, setDeptId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Manager Removed:", empId);
    // Add API call or backend integration logic here
  };

  return (
    <div className="dashboard-box">
      <h2>Remove Manager</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Employee ID" 
          value={empId} 
          onChange={(e) => setEmpId(e.target.value)} 
          required 
        />
         <input 
          type="text" 
          placeholder="Department ID" 
          value={deptId} 
          onChange={(e) => setDeptId(e.target.value)} 
          required 
        />
        <button type="submit" className="remove-btn">Remove Manager</button>
      </form>
    </div>
  );
};

export default RemoveManager; // ✅ Ensure default export
