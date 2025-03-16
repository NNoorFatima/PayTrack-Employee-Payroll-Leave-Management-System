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

  const today = new Date().toISOString().split("T")[0];

  // Format phone number (XXXX-XXXXXXX)
  const formatPhoneNumber = (value) => {
    let cleaned = value.replace(/\D/g, "");
    if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);

    return cleaned.length >= 4 ? cleaned.slice(0, 4) + "-" + cleaned.slice(4) : cleaned;
  };

  // Validate email (@gmail.com required)
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  // Validate address (10+ characters, mix of letters and numbers)
  const validateAddress = (address) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\s,.-]{10,}$/.test(address);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email must be in format: abc@gmail.com");
      return;
    }

    if (phoneNo.length !== 12) {
      alert("Phone number must be in format XXXX-XXXXXXX (11 digits)");
      return;
    }

    if (!validateAddress(address)) {
      alert("Address must be at least 10 characters long and contain both letters and numbers.");
      return;
    }

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
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
            title="Email must be in format: abc@gmail.com"
            required
          />
        </div>

        <div className="form-row">
          <input
            type="tel"
            placeholder="03XX-XXXXXXX"
            value={phoneNo}
            onChange={(e) => setPhoneNo(formatPhoneNumber(e.target.value))}
            pattern="\d{4}-\d{7}"
            title="Phone number must be in format XXXX-XXXXXXX"
            required
          />
          <textarea
            placeholder="Enter Address (10+ chars, must include letters & numbers)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
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