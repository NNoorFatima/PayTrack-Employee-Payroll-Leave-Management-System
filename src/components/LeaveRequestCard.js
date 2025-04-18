// src/components/LeaveRequestCard.js
import React from "react";
import { Badge } from "./badge";


const LeaveRequestCard = ({ request, formatDate }) => {
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "🎊";
      case "pending":
        return "👻";
      case "rejected":
        return "🤡";
      default:
        return "ℹ️";
    }
  };
   




  return (
    <div className="leave-request-card">
      <h3>{request.type}</h3>
      <p>Leave Date: {formatDate(request.leaveDate)}</p>
      {/* <p>Status: <strong>{request.status}</strong></p> */}
      <p>
        Status: <Badge className={request.status.toLowerCase()}>
                  {getStatusIcon(request.status)} {request.status}
                </Badge>
      </p>


      <p>Reason: <i>{request.reason}</i></p>
      {request.status !== "pending" && (
        <>
          {request.comments && <p>Comments: {request.comments}</p>}
        </>
      )}
    </div>
  );
};

export default LeaveRequestCard;