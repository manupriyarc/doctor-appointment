import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";     // Importing Login component
import Signup from "./signup";   // Importing Signup component
import HomePage from "./HomePage"; // Importing Home Page
import Dashboard from './Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}


export default App;
