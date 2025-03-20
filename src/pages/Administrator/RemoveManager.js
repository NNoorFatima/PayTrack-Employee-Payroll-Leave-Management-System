import React from "react";
import AdminLayout from "../../components/AdminLayout";
import "./Add.css"; // Page-specific styles

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
    <div className="admin-form-container">
      <div className="form-header">
        <h1>Remove Manager</h1>
        <h2>Select Manager to Remove</h2>
      </div>

      <form className="admin-form-body">
        <select required>
          <option value="">Select Manager ID</option>
          <option value="22i-0846">22i-0846</option>
          <option value="22i-1036">22i-1036</option>
        </select>

        <button type="submit" className="submit-btn">Remove Manager</button>
      </form>
    </div>
  );
};

export default RemoveManager;
