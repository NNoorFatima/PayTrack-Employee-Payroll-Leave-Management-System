import React from "react";
import AdminLayout from "../../components/AdminLayout";
import "./Add.css"; // Page-specific styles

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
  return (
    <div className="admin-form-container">
      <div className="form-header">
        <h1>Remove HR Personnel</h1>
        <h2>Select HR to Remove</h2>
      </div>

      <form className="admin-form-body">
        <select required>
          <option value="">Select HR ID</option>
          <option value="22i-1036Doe">22i-1036</option>
          <option value="22i-0846">22i-0846</option>
        </select>

        <button type="submit" className="submit-btn">Remove HR</button>
      </form>
    </div>
  );
};

export default RemoveHR;
