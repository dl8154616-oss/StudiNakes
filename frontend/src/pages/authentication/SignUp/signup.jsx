import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupForm() {
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

      {/* Card */}
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
        {/* Judul */}
        <h3
          className="mb-4 "
          style={{
            textAlign: 'left',
            width: '100%',
            marginLeft: '80px',
            fontFamily: 'poppins',
            fontWeight: '500',
          }}
        >
          Get Started Now
        </h3>

        <form style={{ width: '100%' }}>
          {/* Name */}
          <div
            className="mb-3"
            style={{
              marginLeft: '80px',
              marginRight: '80px',
              fontFamily: 'poppins',
              fontWeight: '500',
            }}
          >
            <label htmlFor="name" className="form-label">
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
          <div
            className="mb-3"
            style={{
              marginLeft: '80px',
              marginRight: '80px',
              fontFamily: 'poppins',
              fontWeight: '500',
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

          {/* Password */}
          <div
            className="mb-3"
            style={{
              marginLeft: '80px',
              marginRight: '80px',
              fontFamily: 'poppins',
              fontWeight: '500',
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

          {/* Checkbox */}
          <div
            className="mb-3 form-check"
            style={{ marginLeft: '80px', fontFamily: 'poppins' }}
          >
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label" htmlFor="terms">
              I agree to the{' '}
              <a
                href="#"
                className="text-decoration-underline"
                style={{ color: '#0A2E56' }}
              >
                terms & conditions
              </a>
            </label>
          </div>

          {/* Signup Button */}
          <div style={{ marginLeft: '80px', marginRight: '80px' }}>
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: '#0A2E56',
                color: 'white',
                fontWeight: '500',
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Or */}
          <div
            className="d-flex align-items-center my-4"
            style={{ marginLeft: '80px', marginRight: '80px' }}
          >
            <hr className="flex-grow-1" />
            <span className="mx-3 text-muted">Or</span>
            <hr className="flex-grow-1" />
          </div>

          {/* Sign in with Google & Apple */}
          <div
            className="d-flex gap-2 mb-3"
            style={{ marginLeft: '80px', marginRight: '80px' }}
          >
            <button
              className="btn btn-outline-secondary w-auto d-flex align-items-center justify-content-center"
              type="button"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                style={{ width: '20px', marginRight: '0.5rem' }}
              />
              Sign in with Google
            </button>
            <button
              className="btn btn-outline-secondary w-auto d-flex align-items-center justify-content-center"
              type="button"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                style={{ width: '20px', marginRight: '0.5rem' }}
              />
              Sign in with Apple
            </button>
          </div>

          {/* Have an account? */}
          <div className="text-center mt-3" style={{ fontFamily: 'Poppins' }}>
            <span>Have an account? </span>
            <Link
              to="/login"
              style={{
                color: "#0A2E56",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
