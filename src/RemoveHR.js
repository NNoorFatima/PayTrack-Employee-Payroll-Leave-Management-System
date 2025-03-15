import React, { useState } from "react";

const RemoveHR = ({ setView }) => {
  const [empId, setEmpId] = useState("");
  const [deptId, setDeptId] = useState("");

  // These should come from an API call in a real-world scenario
  const empIds = []; // Example employee IDs
  const deptIds = []; // Example department IDs

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HR Removed:", { empId, deptId });
    // Add API call or backend integration logic here
  };

  return (
    <div className="dashboard-box">
      <h2>Remove HR</h2>
      <form onSubmit={handleSubmit}>
        <select value={empId} onChange={(e) => setEmpId(e.target.value)} required>
          <option value="">Select Employee ID</option>
          {empIds.map((id) => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>

        <select value={deptId} onChange={(e) => setDeptId(e.target.value)} required>
          <option value="">Select Department ID</option>
          {deptIds.map((id) => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>

        <button type="submit" className="remove-btn">Remove HR</button>
      </form>
    </div>
  );
};

export default RemoveHR;
