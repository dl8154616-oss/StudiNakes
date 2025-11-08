import React from "react";

const NavbarBanner = () => {
  return (
    <div className="promo-banner d-flex justify-content-between align-items-center mb-4 p-4 rounded text-white"
      style={{ background: "linear-gradient(to right, #007bff, #00b4d8)" }}>
      <div>
        <h4>Get 60% off join now<br />and start learning today</h4>
        <button className="btn btn-light mt-2">Join Now</button>
      </div>
      <img
        src="https://via.placeholder.com/180x180"
        alt="Promo"
        className="rounded-circle"
      />
    </div>
  );
};

export default NavbarBanner;
