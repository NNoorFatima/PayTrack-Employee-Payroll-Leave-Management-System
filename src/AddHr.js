import React, { useState } from "react";
import "./Add.css"; // Ensure your CSS file handles the layout properly

const AddHR = ({ setView }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfJoin, setDateOfJoin] = useState("");
  const [errors, setErrors] = useState({ phone: "", email: "", address: "" });

  const today = new Date().toISOString().split("T")[0];

  const validatePhone = (phone) => {
    return /^\d{4}-\d{7}$/.test(phone); // Ensures format XXXX-XXXXXXX
  };

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  };

  const validateAddress = (address) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\s,.-]{10,}$/.test(address);
  };

  const formatPhoneNumber = (value) => {
    let rawValue = value.replace(/\D/g, ""); // Remove non-numeric characters

    if (rawValue.length > 11) rawValue = rawValue.slice(0, 11); // Limit to 11 digits

    return rawValue.length > 4 ? `${rawValue.slice(0, 4)}-${rawValue.slice(4)}` : rawValue;
  };

  const handlePhoneChange = (e) => {
    setPhoneNo(formatPhoneNumber(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let phoneValid = validatePhone(phoneNo);
    let emailValid = validateEmail(email);
    let addressValid = validateAddress(address);

    if (!phoneValid || !emailValid || !addressValid) {
      setErrors({
        phone: phoneValid ? "" : "Phone must be in format XXXX-XXXXXXX",
        email: emailValid ? "" : "Email must end with @gmail.com",
        address: addressValid ? "" : "Address must be at least 10 characters and contain letters & numbers",
      });
      return;
    }

    console.log("HR Added:", { name, password, gender, email, phoneNo, address, dateOfJoin });
  };

  return (
    <div className="dashboard-box">
      <h2>Add HR</h2>
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
            pattern="[a-zA-Z0-9._%+-]+@gmail\\.com"
            title="Email must be in format: abc@gmail.com"
            required
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        <div className="form-row">
          <input type="text" placeholder="03XX-XXXXXXX" value={phoneNo} onChange={handlePhoneChange} required />
          <textarea placeholder="Enter Address (10+ chars, must include letters & numbers)" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        {errors.phone && <p className="error">{errors.phone}</p>}
        {errors.address && <p className="error">{errors.address}</p>}

        <div className="form-row">
          <input type="date" value={dateOfJoin} onChange={(e) => setDateOfJoin(e.target.value)} min={today} required />
        </div>

        <button type="submit" className="add-btn">Add HR</button>
      </form>
    </div>
  );
};

export default AddHR;