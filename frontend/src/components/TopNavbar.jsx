import React, { useState, useRef, useEffect } from "react";
import "../style/Navbar.css";

/* --- Simple icons --- */
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M15 17H9a3 3 0 0 1-3-3V10a6 6 0 1 1 12 0v4a3 3 0 0 1-3 3z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M6 6h15l-1.5 9H8.5L6 6z" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="9" cy="20" r="1" fill="currentColor" />
    <circle cx="18" cy="20" r="1" fill="currentColor" />
  </svg>
);

const CaretIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const Hamburger = () => (
  <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
    <rect y="2" width="26" height="2" rx="1" fill="currentColor" />
    <rect y="9" width="26" height="2" rx="1" fill="currentColor" />
    <rect y="16" width="26" height="2" rx="1" fill="currentColor" />
  </svg>
);

export default function TopNavbar() {
  const menus = ["Dashboard", "Trainings", "Exams", "Shopping", "Instructors"];
  const [active, setActive] = useState("Trainings");
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  return (
    <header className="topnav">
      <div className="topnav-inner">
        <div className="logo-wrap">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>

        <div className="right-wrap" ref={menuRef}>
          <nav className={`nav-list ${open ? "open" : ""}`}>
            {menus.map((m) => (
              <button
                key={m}
                className={`nav-link ${active === m ? "active" : ""}`}
                onClick={() => {
                  setActive(m);
                  setOpen(false);
                }}
              >
                {m}
              </button>
            ))}
          </nav>

          <div className="separator" />

          <div className="icons">
            <button className="icon-btn"><SearchIcon /></button>
            <button className="icon-btn"><BellIcon /></button>
            <button className="icon-btn"><CartIcon /></button>

            <div className="profile">
              <img className="profile-img" src="/profile.jpg" alt="profile" />
              <CaretIcon />
            </div>

            <button className="hamburger" onClick={() => setOpen(!open)}>
              <Hamburger />
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-overlay ${open ? "show" : ""}`}>
        <div className="mobile-menu">
          <div className="mobile-top">
            <img src="/logo.png" alt="logo" className="logo-img" />
            <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
          </div>

          <ul className="mobile-links">
            {menus.map((m) => (
              <li key={m}>
                <button
                  className={`mobile-link ${active === m ? "active" : ""}`}
                  onClick={() => {
                    setActive(m);
                    setOpen(false);
                  }}
                >
                  {m}
                </button>
              </li>
            ))}
          </ul>

          <div className="mobile-icons-row">
            <button className="icon-btn"><SearchIcon /></button>
            <button className="icon-btn"><BellIcon /></button>
            <button className="icon-btn"><CartIcon /></button>
          </div>
        </div>
      </div>
    </header>
  );
}
