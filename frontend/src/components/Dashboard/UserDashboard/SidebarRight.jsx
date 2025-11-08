import React from "react";
import ChartActivity from "./Child-Component-1/ChartActivity";

const exams = [
  {
    score: 80,
    title: "Fundamentals of Leadership",
    date: "Feb 27, 2024",
  },
  {
    score: 76,
    title: "Strategic Planning Basics",
    date: "Feb 17, 2024",
  },
];

const SidebarRight = () => {
  return (
    <div>
      {/* Completed Exams */}
      <div className="card mb-4 border-0 shadow-sm rounded-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="fw-semibold mb-0">Completed Exams</h6>
            <a href="#" className="text-danger text-decoration-none small">
              View All
            </a>
          </div>

          {exams.map((exam, index) => (
            <div
              key={index}
              className="d-flex align-items-center mb-3 p-2 rounded-3"
              style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              <div
                className="d-flex flex-column justify-content-center align-items-center text-white rounded-3 me-3"
                style={{
                  backgroundColor: "#0a2a5e",
                  width: "60px",
                  height: "60px",
                }}
              >
                <small>Score</small>
                <h5 className="fw-bold mb-0">{exam.score}</h5>
              </div>
              <div>
                <div className="fw-semibold">{exam.title}</div>
                <small className="text-muted">{exam.date}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Activity */}
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body">
          <h6 className="fw-semibold text-secondary mb-3">Learning Activity</h6>
          <ChartActivity />
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
