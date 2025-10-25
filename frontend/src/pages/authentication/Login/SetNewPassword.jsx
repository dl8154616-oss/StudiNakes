import React from "react";

export default function SetNewPassword() {
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
                    Reset New Password
                </h3>
                <p
                    className="mb-4"
                    style={{
                        textAlign: "left",
                        marginLeft: "80px",
                        fontFamily: "Poppins",
                    }}
                >
                    Create a new password. Ensure it differs from previous ones for security.
                </p>

                <form style={{ width: "100%" }}>
                    {/* New Password */}
                    <div
                        className="mb-3"
                        style={{
                            marginLeft: "80px",
                            marginRight: "80px",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                        }}
                    >
                        <label htmlFor="newPassword" className="form-label">
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
                    <div
                        className="mb-4"
                        style={{
                            marginLeft: "80px",
                            marginRight: "80px", 
                            fontFamily: "Poppins",
                            fontWeight: "500",
                        }}
                    >
                        <label htmlFor="confirmPassword" className="form-label">
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
                            Enter Your Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}