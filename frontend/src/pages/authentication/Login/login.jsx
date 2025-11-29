import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: "url('/images/authentication/human-using-laptop.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Logo */}
      <div className="text-center mb-4">
        <img
          src="/images/Logo2.png"
          alt="Logo StudiNakes"
          style={{ width: "150px", height: "auto" }}
        />
      </div>

      {/* Card */}
      <div
        className="card p-4 border-0 shadow-sm"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.95)",
        }}
      >
        <div className="px-md-5 px-4">
          {/* Title */}
          <h3
            className="mb-2"
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Welcome Back!
          </h3>
          <p
            className="mb-4"
            style={{
              fontFamily: "Poppins",
              textAlign: "left",
              color: "#555",
            }}
          >
            Enter your credentials to access your account.
          </p>

          {/* Form */}
          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="form-label fw-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-end mb-3">
              <Link
                to="/ForgotPassword"
                style={{
                  textDecoration: "none",
                  color: "#0d6efd",
                  fontSize: "0.9rem",
                  fontFamily: "Poppins",
                }}
              >
                Forgot Password?
              </Link>
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label fw-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me */}
            <div className="mb-3 form-check" style={{ fontFamily: "Poppins" }}>
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember for 30 days
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="btn w-100 text-white fw-medium"
              style={{
                backgroundColor: "#0A2E56",
                border: "none",
                fontFamily: "Poppins",
              }}
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="d-flex align-items-center my-4">
            <hr className="flex-grow-1" />
            <span className="mx-3 text-muted">Or</span>
            <hr className="flex-grow-1" />
          </div>

          {/* Sign in with Google & Apple */}
          <div className="d-flex flex-column flex-md-row gap-2 mb-3">
            {/* Google */}
            <button
              className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
              type="button"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                style={{ width: "20px", marginRight: "0.5rem" }}
              />
              Sign in with Google
            </button>

            {/* Apple */}
            <button
              className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
              type="button"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                style={{ width: "20px", marginRight: "0.5rem" }}
              />
              Sign in with Apple
            </button>
          </div>

          {/* Sign Up Link */}
          <div
            className="text-center mt-4"
            style={{ fontFamily: "Poppins", fontSize: "0.95rem" }}
          >
            <span>Don't have an account? </span>
            <Link
              to="/signup"
              style={{
                color: "#0A2E56",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
