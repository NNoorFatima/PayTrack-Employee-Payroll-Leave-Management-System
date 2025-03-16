import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Add.css";

const AddHR = ({ setView }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfJoin, setDateOfJoin] = useState("");
  const [deptId, setDeptId] = useState("");
  const [departments, setDepartments] = useState([]);
  const [errors, setErrors] = useState({ phone: "", email: "", address: "" });

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    axios.get("http://localhost:8080/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Selected Department:", deptId); // Display in console
    console.log("HR Added:", { name, password, gender, email, phoneNo, address, dateOfJoin, deptId });
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
          <input type="email" placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-row">
          <input type="text" placeholder="03XX-XXXXXXX" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
          <textarea placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>

        <div className="form-row">
          <input type="date" value={dateOfJoin} onChange={(e) => setDateOfJoin(e.target.value)} min={today} required />
        </div>

        <div className="form-row">
          <select value={deptId} onChange={(e) => setDeptId(e.target.value)} required>
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.deptid} value={dept.deptid}>
              {dept.deptname}  
            </option>            
            ))}
          </select>
        </div>

        <button type="submit" className="add-btn">Add HR</button>
      </form>
    </div>
  );
};

export default AddHR;
