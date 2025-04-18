import React, { useEffect, useState } from "react";
import HRLayout from "../../components/HRLayout";
import "./remove.css"; // Page-specific styles

function RemoveEmp() {
  return (
    <HRLayout>
      <div>
        <RemoveEmpForm />
      </div>
    </HRLayout>
  );
}

const RemoveEmpForm = () => {
  const [empList, setEmpList] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch HR data from backend
  const fetchEmployees = () => {
    fetch("http://localhost:8080/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched employees:", data);
        setEmpList(data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
        setError("Failed to load employees");
      });
  };

  useEffect(() => {
    fetchEmployees();
   }, []);

   const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEmp) {
      setLoading(true);
  
      // Step 1: Delete Employee
      fetch(`http://localhost:8080/employees/${selectedEmp}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to delete employee");
          }
  
          // Step 2: Delete associated User
          return fetch(`http://localhost:8080/users/${selectedEmp}`, {
            method: "DELETE",
          });
        })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Employee deleted but failed to delete user");
          }
  
          alert("Employee and related User removed successfully");
          fetchEmployees(); // Refresh list
          setSelectedEmp("");
        })
        .catch((err) => {
          console.error(err);
          alert("An error occurred while removing employee or user");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  

  return (
    <div className="admin-form-container1">
      <div className="form-header">
        <h1>Remove Employee</h1>
        <h2>Select Employee to Remove</h2>
        {error && <p className="error-message">{error}</p>}
      </div>

      <form className="admin-form-body" onSubmit={handleSubmit}>
        <select
          value={selectedEmp}
          onChange={(e) => setSelectedEmp(e.target.value)}
        >
          <option value="">Select Employee</option>
          {empList.map((Emp) => (
            <option key={Emp.userid} value={Emp.userid}>
              {Emp.userid} {Emp.user && Emp.user.name ? `- ${Emp.user.name}` : ""}
            </option>
          ))}
        </select>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Removing..." : "Remove Employee"}
        </button>
      </form>
    </div>
  );
};

export default RemoveEmp;