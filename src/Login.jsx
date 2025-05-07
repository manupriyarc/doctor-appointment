// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label className="login-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>

          <div>
            <label className="login-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="signup-link"
          >Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
