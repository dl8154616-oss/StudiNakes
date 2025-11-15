import React from "react";

export default function SetNewPassword() {
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
            Reset New Password
          </h3>

          <p
            className="mb-4"
            style={{
              fontFamily: "Poppins",
              textAlign: "left",
              color: "#555",
            }}
          >
            Create a new password. Ensure it differs from previous ones for
            security.
          </p>

          {/* Form */}
          <form>
            {/* New Password */}
            <div className="mb-3">
              <label
                htmlFor="newPassword"
                className="form-label fw-medium"
                style={{ fontFamily: "Poppins" }}
              >
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                placeholder="Enter your new password"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="form-label fw-medium"
                style={{ fontFamily: "Poppins" }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Re-enter password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-100 text-white fw-medium"
              style={{
                backgroundColor: "#0A2E56",
                border: "none",
                fontFamily: "Poppins",
              }}
            >
              Enter Your Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
