// src/pages/Signup.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"; // Link to external CSS

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform your validation and signup logic here
    navigate("/home");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Welcome!</h2>
        <p className="signup-subtitle">
          Sign up with your details to continue
        </p>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label className="signup-label" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="signup-input"
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
              required
            />
          </div>
          <button
            type="submit"
            className="signup-button"
          >
            Sign Up
          </button>
        </form>
        <p className="signup-footer">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/Login")}
            className="login-link"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
