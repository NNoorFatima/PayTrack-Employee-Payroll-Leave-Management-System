import React from "react";
import AdminLayout from "../../components/AdminLayout";
import "./remove.css"; // Page-specific styles

function RemoveManager() {
  return (
    <AdminLayout>
      <div>
        <RemoveManagerForm />
      </div>
    </AdminLayout>
  );
}

const RemoveManagerForm = () => {
  return (
    <div className="admin-form-container1">
      <div className="form-header">
        <h1>Remove Manager Personnel</h1>
        <h2>Select Manager to Remove</h2>
      </div>

      <form className="admin-form-body">
        <select required>
          <option value="">Select Manager ID</option>
          <option value="22i-1036Doe">22i-1036</option>
          <option value="22i-0846">22i-0846</option>
        </select>

        <button type="submit" className="submit-btn">Remove HR</button>
      </form>
    </div>
  );
};

export default RemoveManager;
