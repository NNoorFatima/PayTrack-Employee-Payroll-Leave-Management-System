import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import axios from "axios";

function ManageUsers() {
  return (
    <AdminLayout>
      <div>
        <UserSelector />
      </div>
    </AdminLayout>
  );
}

const UserSelector = () => {
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [editableUser, setEditableUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (role) {
        try {
          const response = await axios.get(`http://localhost:8080/${role.toLowerCase()}`);
          setUsers(response.data);
          setSelectedUser(null);
          setEditableUser(null);
          setSelectedUserId("");
        } catch (error) {
          console.error(`Error fetching ${role} data:`, error);
        }
      }
    };

    fetchUsers();
  }, [role]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleUserIdChange = (e) => {
    const userId = e.target.value;
    setSelectedUserId(userId);
    const user = users.find((u) => u.userid.toString() === userId);
    setSelectedUser(user);
    setEditableUser({ ...user }); // Create a copy for editing
  };

  return (
    <div className="user-selector-container">
      <h2>View HR or Manager Info</h2>

      <div className="form-row">
        <label htmlFor="role">Select Role</label>
        <select id="role" value={role} onChange={handleRoleChange}>
          <option value="">-- Choose Role --</option>
          <option value="Manager">Manager</option>
          <option value="HR">HR</option>
        </select>
      </div>

      {role && users.length > 0 && (
        <div className="form-row">
          <label htmlFor="userId">Select User ID</label>
          <select id="userId" value={selectedUserId} onChange={handleUserIdChange}>
            <option value="">-- Choose ID --</option>
            {users.map((user) => (
              <option key={user.userid} value={user.userid}>
                {user.userid}
              </option>
            ))}
          </select>
        </div>
      )}

      {editableUser && (
        <div className="user-edit-form">
          <h3>Edit User Information</h3>

          <div className="form-row">
            <label htmlFor="userid">User ID</label>
            <input type="text" id="userid" value={editableUser.userid} readOnly />
          </div>

          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={editableUser.name || ""}
              onChange={(e) => setEditableUser({ ...editableUser, name: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={editableUser.password || ""}
              onChange={(e) => setEditableUser({ ...editableUser, password: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              value={editableUser.gender || ""}
              onChange={(e) => setEditableUser({ ...editableUser, gender: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={editableUser.email || ""}
              onChange={(e) => setEditableUser({ ...editableUser, email: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone_no">Phone Number</label>
            <input
              type="text"
              id="phone_no"
              value={editableUser.phone_no || ""}
              onChange={(e) => setEditableUser({ ...editableUser, phone_no: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={editableUser.address || ""}
              onChange={(e) => setEditableUser({ ...editableUser, address: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label htmlFor="date_of_join">Date of Joining</label>
            <input
              type="text"
              id="date_of_join"
              value={editableUser.date_of_join || ""}
              onChange={(e) => setEditableUser({ ...editableUser, date_of_join: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label htmlFor="deptid">Department ID</label>
            <input
              type="text"
              id="deptid"
              value={editableUser.deptid || ""}
              onChange={(e) => setEditableUser({ ...editableUser, deptid: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
