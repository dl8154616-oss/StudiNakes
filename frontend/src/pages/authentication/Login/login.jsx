import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    // Background wrapper
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/authentication/human-using-laptop.jpg')", // Ganti dengan URL gambar background kamu
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

      {/* Card container */}
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
        <h3
          className="mb-2"
          style={{
            textAlign: "left",
            marginLeft: "80px",
            fontFamily: "Poppins",
            fontWeight: "500",
          }}
        >
          Welcome Back!
        </h3>

        <p
          className="mb-4"
          style={{
            textAlign: "left",
            marginLeft: "80px",
            fontFamily: "Poppins",
          }}
        >
          Enter your credentials to access your account
        </p>

        {/* Form */}
        <form>
          {/* Email */}
          <div
            className="mb-4"
            style={{
              marginLeft: "80px",
              marginRight: "80px",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Forgot password link */}
          <div
            className="mt-3"
            style={{
              textAlign: "right",
              fontFamily: "Poppins",
              marginRight: "80px",
              marginBottom: "-30px",
            }}
          >
            <Link
              to="/ForgotPassword"
              style={{
                textDecoration: "none",
                color: "#0d6efd",
                fontSize: "12px",
              }}
            >
              Forgot Password?
            </Link>
          </div>

          {/* Password */}
          <div
            className="mb-3"
            style={{
              marginLeft: "80px",
              marginRight: "80px",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
        </form>

        {/* Remember checkbox */}
        <div
          className="mb-3 form-check"
          style={{
            marginLeft: "80px",
            marginRight: "80px",
            fontFamily: "Poppins",
          }}
        >
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember for 30 days
          </label>
        </div>

        {/* Sign in button */}
        <div
          className="d-grid gap-2"
          style={{ marginLeft: "80px", marginRight: "80px" }}
        >
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
            Sign In
          </button>
        </div>

        {/* Divider */}
        <div
          className="d-flex align-items-center my-4"
          style={{ marginLeft: "80px", marginRight: "80px" }}
        >
          <hr className="flex-grow-1" />
          <span className="mx-3 text-muted">Or</span>
          <hr className="flex-grow-1" />
        </div>

        {/* Sign in with Google & Apple */}
        <div
          className="d-flex gap-2 mb-3"
          style={{ marginLeft: "80px", marginRight: "80px" }}
        >
          {/* Google */}
          <button
            className="btn btn-outline-secondary w-auto d-flex align-items-center justify-content-center"
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
            className="btn btn-outline-secondary w-auto d-flex align-items-center justify-content-center"
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

        {/* Sign up link */}
        <div className="text-center mt-4" style={{ fontFamily: "Poppins" }}>
          <span>{''}Don't have an account? </span>
          <Link to="/signup"
           style={{ color: "#0A2E56", fontWeight: "bold", textDecoration: "none"}}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
