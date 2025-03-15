import React, { useState } from "react";

const RemoveManager = ({ setView }) => {
  const [managerEmail, setManagerEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Manager Removed:", managerEmail);
  };

  return (
    <div className="dashboard-box">
      <h2>Remove Manager</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Manager Email" value={managerEmail} onChange={(e) => setManagerEmail(e.target.value)} required />
        <button type="submit" className="remove-btn">Remove Manager</button>
      </form>
     
    </div>
  );
};

export default RemoveManager;
