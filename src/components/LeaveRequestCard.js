// src/components/LeaveRequestCard.js
import React from "react";

const LeaveRequestCard = ({ request, formatDate }) => {
  return (
    <div className="leave-request-card">
      <h3>{request.type}</h3>
      <p>Leave Date: {formatDate(request.leaveDate)}</p>
      <p>Status: <strong>{request.status}</strong></p>
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
