import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./LoginForm.css"; // Updated CSS for the frosted-glass effect


const EmployeeLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle input changes with validation
  const handleChange = (e) => {
    const { name, value } = e.target;

  

    setFormData({ ...formData, [name]: value });
  };

  // Handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault();

    alert("Login successful! Redirecting to Employee Dashboard...");
    try {
      // Make an API call to check if the user exists and the password is correct
      const response = await fetch("http://localhost:8080/managers/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is OK (user exists and password is correct)
      if (response.ok) {
        // Logic: parse the response and store the user ID for future API calls
        const data = await response.json();
        localStorage.setItem("employeeId", data.managerId); 
        localStorage.setItem("departmentId", data.departmentId); 
        

        // alert("Login successful! Redirecting to Manager Dashboard...");
        navigate("/employee-profile");
      } else {
        // If not OK, display an alert with an error message
        alert("Incorrect username or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
    
  };

  return (
    <div className="login-container"> {/* Background image wrapper */}
      <div className="wrapper"> {/* Frosted-glass effect */}
        <form onSubmit={handleLogin}>
          <h1>Employee Login</h1>

          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forget password?</a>
          </div>

          <div className="spacer"></div> {/* Adjust spacing */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
