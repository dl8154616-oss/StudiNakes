import React, { useState } from "react";
import VoucherModal from "./Child-Component-1/VoucherModal";

const NavbarBanner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="promo-banner d-flex justify-content-between align-items-center mb-4 p-4 rounded text-white"
        style={{
          background: "linear-gradient(to right, #0C2C53, #15A3B9)",
          minHeight: "250px",
        }}
      >
        <div>
          <h4 className="fw-bold mb-3">
            Get 60% off join now
            <br />
            and start learning today
          </h4>
          <button
            className="btn btn-light fw-semibold"
            onClick={() => setShowModal(true)}
          >
            Join Now
          </button>
        </div>

        <img
          src="/images/UserDashboard/price-tag 2.png"
          alt="Promo"
          className="img-fluid"
          style={{
            maxHeight: "300px",
            width: "500px",
            objectFit: "contain",
            marginLeft: "50px",
            top: "25px",
            right: "10px",
            position: "relative"
          }}
        />
      </div>

      {/* 🔹 Voucher Modal */}
      <VoucherModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default NavbarBanner;
