import React, { useState } from "react";

const AddManager = ({ setView }) => {
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Manager Added:", { managerName, managerEmail, password });
  };

  return (
    <div className="dashboard-box">
      <h2>Add Manager</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Manager Name" value={managerName} onChange={(e) => setManagerName(e.target.value)} required />
        <input type="email" placeholder="Manager Email" value={managerEmail} onChange={(e) => setManagerEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="add-btn">Add Manager</button>
      </form>
      
    </div>
  );
};

export default AddManager;
