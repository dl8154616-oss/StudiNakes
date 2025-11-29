import React from "react";

// Dummy Data
const stats = [
  { label: "Completed Trainings", value: 36 },
  { label: "Completed Exams", value: 12 },
  { label: "Training In Progress", value: 5 },
  { label: "Earned Certificates", value: 8 },
];

const StatsCards = () => {
  return (
    <div className="row text-center mb-4">
      {stats.map((item, i) => (
        <div className="col-6 col-md-3 mb-3" key={i}>
          <div className="card p-3 shadow-sm border-0 h-100">
            <h5 className="mb-0 fw-bold">{item.value}</h5>
            <small className="text-muted">{item.label}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
