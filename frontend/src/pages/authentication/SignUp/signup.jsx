import React from "react";
import { Link } from "react-router-dom";

export default function SignupForm() {
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
      <div className="text-center mb-3">
        <img
          src="/images/Logo2.png"
          alt="Logo StudiNakes"
          style={{ width: "150px", height: "auto" }}
        />
      </div>

      {/* Card */}
      <div
        className="card shadow-sm border-0 p-4"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.95)",
        }}
      >
        <h3
          className="mb-4"
          style={{
            textAlign: "left",
            fontFamily: "Poppins",
            fontWeight: "500",
          }}
        >
          Get Started Now
        </h3>

        <form className="px-md-4 px-2">
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-medium">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-medium">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-medium">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>

          {/* Checkbox */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label" htmlFor="terms">
              I agree to the{" "}
              <a href="#" className="text-decoration-underline text-primary">
                terms & conditions
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="btn w-100 text-white fw-medium"
            style={{ backgroundColor: "#0A2E56" }}
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="d-flex align-items-center my-4">
            <hr className="flex-grow-1" />
            <span className="mx-3 text-muted">Or</span>
            <hr className="flex-grow-1" />
          </div>

          {/* Social Buttons */}
          <div className="d-flex flex-column flex-md-row gap-2 mb-3">
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

          {/* Sign In Link */}
          <div className="text-center mt-3" style={{ fontFamily: "Poppins" }}>
            <span>Have an account? </span>
            <Link
              to="/login"
              className="fw-bold"
              style={{ color: "#0A2E56", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
