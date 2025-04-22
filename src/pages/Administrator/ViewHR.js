import React from "react";
import HRCard from "./CardAdmin";
import HRLayout from "../../components/HRLayout"
import "./CardAdmin.css"; // Link to the CSS

const fakeHRs = [
  {
    userid: "HR001",
    name: "Priya Sharma",
    deptid: "D001",
    email: "priya.sharma@company.com",
    dateofjoin: "2021-08-17",
  },
  {
    userid: "HR002",
    name: "Anil Kumar",
    deptid: "D002",
    email: "anil.kumar@company.com",
    dateofjoin: "2019-05-02",
  },
  {
    userid: "HR003",
    name: "Meena Patel",
    deptid: "D001",
    email: "meena.patel@company.com",
    dateofjoin: "2022-03-10",
  },
  {
    userid: "HR004",
    name: "Rahul Singh",
    deptid: "D003",
    email: "rahul.singh@company.com",
    dateofjoin: "2020-11-23",
  },
  {
    userid: "HR005",
    name: "Neha Gupta",
    deptid: "D002",
    email: "neha.gupta@company.com",
    dateofjoin: "2018-07-15",
  },
];

const ViewHR = () => {
  return (
    <HRLayout>
    <div className="view-hr-container">
      <h1 className="view-hr-title">HR Personnel Directory</h1>
      <div className="hr-grid">
        {fakeHRs.map((hr) => (
          <HRCard key={hr.userid} hr={hr} />
        ))}
      </div>
    </div>
    </HRLayout>
  );
};

export default ViewHR;
