import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import "./remove.css"; // Page-specific styles

function RemoveHR() {
  return (
    <AdminLayout>
      <div>
        <RemoveHRForm />
      </div>
    </AdminLayout>
  );
}

const RemoveHRForm = () => {
  const [hrList, setHrList] = useState([]);
  const [selectedHR, setSelectedHR] = useState("");

  // Fetch HR data from backend
  useEffect(() => {
    fetch("http://localhost:8080/hrs")
      .then((response) => response.json())
      .then((data) => {
        setHrList(data);
      })
      .catch((error) => {
        console.error("Error fetching HRs:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedHR) {
      // Here you can trigger a DELETE request to your backend
      fetch(`http://localhost:8080/hrs/deleteHRWithUser/${selectedHR}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            alert("HR removed successfully");
            // Optionally refetch HR list
            setHrList((prev) => prev.filter((hr) => hr.userid !== parseInt(selectedHR)));
            setSelectedHR("");
          } else {
            alert("Failed to remove HR");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="admin-form-container1">
      <div className="form-header">
        <h1>Remove HR Personnel</h1>
        <h2>Select HR to Remove</h2>
      </div>

      <form className="admin-form-body" onSubmit={handleSubmit}>
        <select
          value={selectedHR}
          onChange={(e) => setSelectedHR(e.target.value)}
          required
        >
          <option value="">Select HR ID</option>
          {hrList.map((hr) => (
            <option key={hr.userid} value={hr.userid}>
              {hr.userid}
            </option>
          ))}
        </select>

        <button type="submit" className="submit-btn">
          Remove HR
        </button>
      </form>
    </div>
  );
};

export default RemoveHR;
