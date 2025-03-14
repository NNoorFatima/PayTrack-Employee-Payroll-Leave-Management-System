import React, { useState } from "react";
import Layout from "../../components/Layout";
import background from "../../images/leavreq.jpeg";
import "../../App.css"; // Global styles
import "./LeaveRequest.css";

function LeaveRequest() {
    return (
      <Layout backgroundImage={background}> 
      <div >
        <LeaveRequestForm />
      </div>
    </Layout>
    
    );
  }

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    leaveType: "Sick Leave",
    fromDate: "",
    toDate: "",
    reason: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Leave request submitted:", formData);
  };

  return (
    <div className="leave-request-container">
      <h2>Leave Application</h2>
      <form onSubmit={handleSubmit}>
        <label>Leave Type</label>
        <select
          name="leaveType"
          value={formData.leaveType}
          onChange={handleChange}
        >
          <option value="Casual Leave">Casual Leave</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Annual Leave">Annual Leave</option>
        </select>

        <label>From</label>
        <input
          type="date"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleChange}
        />

        <label>To</label>
        <input
          type="date"
          name="toDate"
          value={formData.toDate}
          onChange={handleChange}
        />

        <label>Reason for Leave</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Enter your reason..."
        />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default LeaveRequest;
