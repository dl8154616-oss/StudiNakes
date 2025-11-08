import React from "react";

const courses = [
  {
    title: "Fundamentals of Project Management",
    author: "Sarah Cooper",
    progress: 25,
    img: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
  },
  {
    title: "Business Communication Essentials",
    author: "Mia Brandon",
    progress: 45,
    img: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
  },
  {
    title: "Effective Time Management",
    author: "Jason Parker",
    progress: 70,
    img: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg",
  },
];

const EnrolledTrainings = () => {
  return (
    <div style={{ border: "2px solid transparent" }}className=" p-3 rounded-3 mb-4 shadow-sm">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 fw-semibold">Enrolled Trainings</h5>
        <a
          href="#"
          className="text-danger text-decoration-none small fw-semibold"
        >
          View All
        </a>
      </div>

      {/* Cards */}
      <div className="row">
        {courses.map((course, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={course.img}
                alt={course.title}
                className="card-img-top rounded-top"
                style={{ height: 150, objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="fw-semibold mb-1">{course.title}</h6>
                <small className="text-muted">{course.author}</small>
                <div className="progress mt-2" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <small className="text-muted">{course.progress}% completed</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledTrainings;
