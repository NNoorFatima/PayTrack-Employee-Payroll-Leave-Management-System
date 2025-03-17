import LoginForm from "./components/LoginForm/LoginForm";
import Dashboard from "./components/ManagerDashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
