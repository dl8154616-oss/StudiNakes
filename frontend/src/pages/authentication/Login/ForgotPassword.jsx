import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/authentication/human-using-laptop.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f8f9fa",
      }}
    >
    
      {/* Logo */}
      <div className="text-center">
        <img
          src="/images/Logo2.png"
          alt="Logo StudiNakes"
          style={{ width: '150px', height: 'auto' }}
        />
      </div>
    
      {/* Card Container */}
      <div
        className="card p-4 d-flex flex-column justify-content-center"
        style={{
          width: "600px",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          minHeight: "500px",
          background: "rgba(255,255,255,0.95)",
        }}
      >
        {/* Title */}
        <div style={{ marginLeft: "80px", marginRight: "80px" }}>
          <h3
            className="mb-2"
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Forgot Password
          </h3>
          <p
            className="mb-4"
            style={{
              fontFamily: "Poppins",
              textAlign: "left",
            }}
          >
            Please enter your email to reset your password
          </p>
        </div>

        {/* Form */}
        <form>
          {/* Email Field */}
          <div
            className="mb-4"
            style={{ marginLeft: "80px", marginRight: "80px" }}
          >
            <label
              htmlFor="email"
              className="form-label"
              style={{ fontFamily: "Poppins", fontWeight: "500" }}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Remember Checkbox */}
          <div
            className="mb-3 form-check"
            style={{
              marginLeft: "80px",
              marginRight: "80px",
              fontFamily: "Poppins",
            }}
          >
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember for 30 days
            </label>
          </div>

          {/* Reset Button */}
          <div className="d-grid gap-2" style={{ margin: "0 80px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                fontFamily: "Poppins",
                fontWeight: "500",
                backgroundColor: "#0A2E56",
                border: "none",
              }}
            >
              Reset Password
            </button>
          </div>
        </form>

        {/* Back to login link */}
        <div className="text-center mt-4" style={{ fontFamily: "Poppins" }}>
          <span>{''}Remember your password? </span>
          <Link
            to="/login"
            style={{ color: "#0A2E56", fontWeight: "bold", textDecoration: "none" }}
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
