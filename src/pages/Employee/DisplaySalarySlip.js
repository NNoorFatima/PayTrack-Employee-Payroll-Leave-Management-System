import React, { useEffect, useState } from "react";
import "./salarySlip.css"; // Page-specific styles
import EmployeeLayout from "../../components/EmployeeLayout";


const DisplaySalarySlips = ({ userId }) => {
  //const storedUserId = localStorage.getItem("userId");  // 🔥 Get stored userId
  //userId = userId || storedUserId || 1; // Default to stored ID or 1
  userId =1;

  // const [userId, setUserId] = useState(0);
  const [salary, setBaseSalary] = useState(0);
  const [approvedLeaves,setApprovedLeaves] = useState(0);
  const [deduction, setDeduction] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);

  useEffect(() => {
    if (!userId) {
      console.warn("No userId provided. Skipping API call.");
      return;
    }

    const fetchSalarySlip = async () => {
      try {
        const response = await fetch(`http://localhost:8080/employees/${userId}`);
        if(!response.ok)
          throw new Error("Employee not found\n");

        // Print response status and headers
        // console.log("Response Status:", response.status);
        // console.log("Response Headers:", response.headers);
        

        const data = await response.json();
        setBaseSalary(data.salary);
        // console.log("salary Data:", data);
        // console.log("salary Data:",data.salary );
        //setUserId(data.userId);

        // Fetch approved leaves
        const leavesResponse = await fetch(`http://localhost:8080/leaves/approved?userId=${userId}`);
        if (!leavesResponse.ok) 
          throw new Error("Leaves data not found");

        const leavesData = await leavesResponse.json();
        //console.log("Leaves Data:", leavesData);
        
        const approvedLeaveCount = Array.isArray(leavesData) ? leavesData.length : 0;
        setApprovedLeaves(approvedLeaveCount);
        //console.log("leaves count Data:", approvedLeaveCount);
        

        // Calculate deductions
        setDeduction((approvedLeaveCount > 3) ? (data.salary * 0.1) : 0);
        //console.log("salaryDeduction Data:", deduction);

        // Calculate total salary    
        setTotalSalary(data.salary-((approvedLeaveCount > 3) ? (data.salary * 0.1) : 0));
        // console.log("totalSalary Data:", totalSalary);
        // console.log("totalSalary Data:", data.salary-((approvedLeaveCount > 3) ? (data.salary * 0.1) : 0));
      } catch (error) { 
        console.error("Error fetching salary slip:", error);  
      }
    };

    fetchSalarySlip();
  }, [userId]);


  return (
    <EmployeeLayout>
    <div className="salary-details">
      <div className="receipt-header">
        <h1>RECEIPT No.</h1>
        <h2>020121</h2>
      </div>
      
      <div className="receipt-body">
        <div className="receipt-row">
        {/* <p><strong>Date:</strong> <input type="text" value="14-03-2024" name="leaveDate"/></p> */}
        <p><strong>Leaves:</strong><input type="text" value={approvedLeaves} readOnly/></p>

          <p><strong>Amount:</strong> ${totalSalary.toFixed(2)}</p>
        </div>
        <div className="receipt-row">
          <p><strong>From:</strong> Rio.co</p>
          <p><strong>Payment For:</strong> Monthly Salary</p>
        </div>
        <div className="receipt-row">
          {/* <p><strong>Account:</strong><input type="text" value="031928176183 " readonly/> </p> */}
          <p><strong>Generated On:</strong><input type="text" value={new Date().toISOString().split("T")[0]} readOnly /></p>
        </div>
        <div className="receipt-row">
          <p><strong>Deductions:</strong> <input type="text" value={`$${deduction.toFixed(2)}`} readOnly /></p>
          <p><strong>Tax Rate:</strong> 10%</p>
        </div>
        {/* <div className="receipt-row">
          <p><strong>Leaves:</strong><input type="text" value="10" readonly/></p>
          
        </div> */}
        <div className="receipt-row">
          <h2 ><strong>Total</strong> ${totalSalary.toFixed(2)}</h2>
        </div>
      </div>
    </div>
    </EmployeeLayout>
  
  );
};

export default DisplaySalarySlips;
