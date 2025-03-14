import React from "react";
import Layout from "../../components/Layout";
import background from "../../images/freepik__adjust__90339.png";
import "../../App.css"; // Global styles
import "./salarySlip.css"; // Page-specific styles


function SalarySlip() {
  return (
    <Layout backgroundImage={background}> 
    <div >
      <DisplaySalarySlips />
    </div>
  </Layout>
  
  );
}
const DisplaySalarySlips = () => {
  return (
    
    <div className="salary-details">
      <div className="receipt-header">
        <h1>RECEIPT No.</h1>
        <h2>020121</h2>
      </div>
      
      <div className="receipt-body">
        <div className="receipt-row">
          <p><strong>Date:</strong> 28 August 2023</p>
          <p><strong>Amount:</strong> $10,231</p>
        </div>
        <div className="receipt-row">
          <p><strong>From:</strong> Rio.co</p>
          <p><strong>Payment For:</strong> Monthly Salary</p>
        </div>
        <div className="receipt-row">
          <p><strong>Account:</strong> 031928176183</p>
          <p><strong>Generated On:</strong> 14 March 2024</p>
        </div>
        <div className="receipt-row">
          <p><strong>Deductions:</strong> 1000</p>
          <p><strong>Tax Rate:</strong> 5%</p>
        </div>
        <div className="receipt-row">
          <p><strong>Leaves:</strong> 10</p>
          
        </div>
        <div className="receipt-row">
          <h2 ><strong>Total</strong> 10</h2>
        </div>
      </div>
    </div>
    
  
  );
};

export default SalarySlip;
