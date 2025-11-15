import React from "react";

export default function CheckYourEmail() {
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
        className="card shadow-sm border-0 p-4"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.95)",
        }}
      >
        {/* Title */}
        <div className="px-md-5 px-3">
          <h3
            className="mb-2"
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            Check Your Email
          </h3>
          <p
            className="mb-4"
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              color: "#555",
            }}
          >
            Please enter your email to reset the password.
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="btn w-100 text-white fw-medium"
            style={{
              backgroundColor: "#0A2E56",
              fontFamily: "Poppins",
              padding: "10px 0",
            }}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
