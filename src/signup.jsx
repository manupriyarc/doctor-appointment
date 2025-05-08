// src/pages/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token (optional)
        localStorage.setItem("token", data.token);
        // Navigate to dashboard
        navigate("/dashboard");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Server error during signup");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Welcome!</h2>
        <p className="signup-subtitle">Sign up with your details to continue</p>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label className="signup-label" htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              placeholder="Your Name"
              className="signup-input"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="signup-input"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="signup-input"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="signup-label" htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="signup-input"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="signup-footer">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="login-link">Log in</button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
