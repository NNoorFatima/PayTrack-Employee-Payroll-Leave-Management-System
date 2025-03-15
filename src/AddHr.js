import React, { useState } from "react";

const AddHR = ({ setView }) => {
  const [hrName, setHrName] = useState("");
  const [hrEmail, setHrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HR Added:", { hrName, hrEmail, password });
  };

  return (
    <div className="dashboard-box">
      <h2>Add HR</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="HR Name" value={hrName} onChange={(e) => setHrName(e.target.value)} required />
        <input type="email" placeholder="HR Email" value={hrEmail} onChange={(e) => setHrEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="add-btn">Add HR</button>
      </form>
      
    </div>
  );
};

export default AddHR;
