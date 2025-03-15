import React, { useState } from "react";
import "./Add.css"; // Ensure your CSS file handles the layout properly

const AddManager = ({ setView }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfJoin, setDateOfJoin] = useState("");

  // Restrict past dates
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Manager Added:", { name, password, gender, email, phoneNo, address, dateOfJoin });
  };

  return (
    <div className="dashboard-box">
      <h2>Add Manager</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-row">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div className="form-row">
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-row">
          <input type="tel" placeholder="Phone Number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
          <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>

        <div className="form-row">
          <input type="date" value={dateOfJoin} onChange={(e) => setDateOfJoin(e.target.value)} min={today} required />
        </div>

        <button type="submit" className="add-btn">Add Manager</button>
      </form>
    </div>
  );
};

export default AddManager;
