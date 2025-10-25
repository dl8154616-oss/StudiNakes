import React from "react";

export default function PasswordReset() {
  return (
    // Background wrapper
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
      <div className="text-center mb-4">
        <img
          src="/images/Logo2.png"
          alt="Logo StudiNakes"
          style={{ width: "150px", height: "auto" }}
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
          Password Reset
        </h3>

        <p
          className="mb-4"
          style={{
            textAlign: "left",
            marginLeft: "80px",
            fontFamily: "Poppins",
          }}
        >
          Your password has been successfully reset. You can now log in with your
          new password.
        </p>

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
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
