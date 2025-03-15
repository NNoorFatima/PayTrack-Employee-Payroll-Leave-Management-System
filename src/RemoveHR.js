import React, { useState } from "react";

const RemoveHR = ({ setView }) => {
  const [hrEmail, setHrEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HR Removed:", hrEmail);
  };

  return (
    <div className="dashboard-box">
      <h2>Remove HR</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="HR Email" value={hrEmail} onChange={(e) => setHrEmail(e.target.value)} required />
        <button type="submit" className="remove-btn">Remove HR</button>
      </form>
     
    </div>
  );
};

export default RemoveHR;
