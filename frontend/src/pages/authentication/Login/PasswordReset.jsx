import React from "react";
import { Link } from "react-router-dom";

export default function PasswordReset() {
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
            Password Reset
          </h3>

          <p
            className="mb-4"
            style={{
              fontFamily: "Poppins",
              textAlign: "left",
              color: "#555",
            }}
          >
            Your password has been successfully reset. You can now log in with
            your new password.
          </p>

          {/* Confirm Button */}
          <button
            type="button"
            className="btn w-100 text-white fw-medium"
            style={{
              backgroundColor: "#0A2E56",
              border: "none",
              fontFamily: "Poppins",
            }}
          >
            Confirm
          </button>

          {/* Back to Login */}
          <div
            className="text-center mt-4"
            style={{ fontFamily: "Poppins", fontSize: "0.95rem" }}
          >
            <span>Back to </span>
            <Link
              to="/login"
              style={{
                color: "#0A2E56",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
