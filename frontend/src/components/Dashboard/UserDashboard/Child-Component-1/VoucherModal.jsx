import React, { useState } from "react";

const VoucherModal = ({ show, onClose }) => {
  const [voucherCode, setVoucherCode] = useState(Array(8).fill(""));

  const handleInputChange = (e, index) => {
    const value = e.target.value.toUpperCase().slice(0, 1);
    const newCode = [...voucherCode];
    newCode[index] = value;
    setVoucherCode(newCode);

    if (value && index < 7) {
      document.getElementById(`voucher-${index + 1}`).focus();
    }
  };

  const handleConfirm = () => {
    const fullCode = voucherCode.join("");
    if (fullCode.length < 8) {
      alert("Please complete your voucher code!");
      return;
    }
    alert(`Voucher code entered: ${fullCode}`);
    onClose();
  };

  if (!show) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="modal-content bg-white rounded shadow"
        style={{
          width: "460px",
          borderRadius: "12px",
          overflow: "hidden",
          animation: "fadeInScale 0.25s ease-out",
        }}
      >
        {/* Header */}
        <div
          className="d-flex align-items-center justify-content-between p-3 border-bottom"
          style={{ backgroundColor: "#f9fafb" }}
        >
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center me-2"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#f0f2f5",
                borderRadius: "8px",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                alt="icon"
                style={{ width: "18px", height: "18px" }}
              />
            </div>
            <div>
              <h6 className="m-0 fw-bold">Get Your Discount!</h6>
              <small className="text-muted">
                Enter your voucher code below to receive your discount
              </small>
            </div>
          </div>
          <button
            className="btn btn-link text-muted"
            style={{
              textDecoration: "none",
              fontSize: "20px",
              lineHeight: "1",
            }}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-4 text-center">
          <img
            src="/images/UserDashboard/price-tag 1.png"
            alt="Discount"
            style={{ width: "200px", marginBottom: "25px" }}
          />

          {/* Voucher input boxes */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "25px",
            }}
          >
            {voucherCode.map((char, index) => (
              <input
                key={index}
                id={`voucher-${index}`}
                type="text"
                maxLength="1"
                value={char}
                onChange={(e) => handleInputChange(e, index)}
                style={{
                  width: "40px",
                  height: "45px",
                  textAlign: "center",
                  fontSize: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#00b4d8")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
              />
            ))}
          </div>

          {/* Confirm Button */}
          <button
            className="btn w-100 text-white fw-semibold"
            style={{
              backgroundColor: "#00b4d8",
              borderRadius: "8px",
              height: "45px",
            }}
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Optional CSS animation */}
      <style>
        {`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default VoucherModal;
