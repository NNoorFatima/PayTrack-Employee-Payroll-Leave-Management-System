import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/Routes";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;