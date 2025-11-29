import React from "react";
import "../../style/Certificates.css"; // OPTIONAL untuk hover & style kecil

const certificates = [
  {
    id: 1,
    title: "Mastering Project Management: From Concept to Completion",
    date: "05 July, 2024",
    score: "225/250",
    image: "/certificate.png",
  },
  {
    id: 2,
    title: "Agile Project Management: A Comprehensive Guide",
    date: "05 July, 2024",
    score: "225/250",
    image: "/certificate.png",
  },
  {
    id: 3,
    title: "Effective Stakeholder Communication for Project Managers",
    date: "05 July, 2024",
    score: "225/250",
    image: "/certificate.png",
  },
  {
    id: 4,
    title: "Lean Project Management for Efficiency and Quality",
    date: "05 July, 2024",
    score: "225/250",
    image: "/certificate.png",
  },
  {
    id: 5,
    title: "Budgeting and Resource Allocation in Project Management",
    date: "05 July, 2024",
    score: "225/250",
    image: "/certificate.png",
  },
];

const Certificates = () => {
  return (
    <div className="certificates-list">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search Certificates..."
        />

        <select className="form-select w-25">
          <option>Sort by</option>
          <option>Date</option>
          <option>Title</option>
        </select>
      </div>

      {/* LIST */}
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className="card shadow-sm mb-3 p-3 d-flex flex-row align-items-center certificate-card"
        >
          {/* IMAGE */}
          <img
            src={cert.image}
            alt="cert"
            className="me-3"
            style={{ width: "140px", borderRadius: "8px" }}
          />

          {/* TEXT CONTENT */}
          <div className="flex-grow-1">
            <h6 className="fw-bold">{cert.title}</h6>
            <p className="text-muted mb-1">
              Certification Claimed On {cert.date}
            </p>
            <p className="fw-bold text-success mb-0">Total Score</p>
          </div>

          {/* SCORE */}
          <div className="text-end me-4">
            <h6 className="fw-bold text-success">{cert.score}</h6>
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex flex-column align-items-center gap-2">
            <button className="btn btn-light rounded-circle shadow-sm">
              <i className="bi bi-share"></i>
            </button>
            <button className="btn btn-light rounded-circle shadow-sm">
              <i className="bi bi-download"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
