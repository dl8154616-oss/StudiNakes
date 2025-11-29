import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const courses = [
  {
    title: "Budgeting and Resource Allocation",
    teacher: "Emma Foster",
    progress: 27,
    lessons: 40,
    img: "https://via.placeholder.com/400x250",
  },
  {
    title: "Mastering Project Management Fundamentals",
    teacher: "David Thomson",
    progress: 56,
    lessons: 80,
    img: "https://via.placeholder.com/400x250",
  },
  {
    title: "Leadership Skills for Successful Projects",
    teacher: "Sarah Mills",
    progress: 90,
    lessons: 20,
    img: "https://via.placeholder.com/400x250",
  },
  {
    title: "Fundamentals Of Project Management",
    teacher: "Kevin Brooks",
    progress: 36,
    lessons: 30,
    img: "https://via.placeholder.com/400x250",
  },
  {
    title: "Agile Project Management: A Complete Guide",
    teacher: "Anna Cooper",
    progress: 50,
    lessons: 30,
    img: "https://via.placeholder.com/400x250",
  },
  {
    title: "Advanced Risk Management in Projects",
    teacher: "Chris Walker",
    progress: 25,
    lessons: 40,
    img: "https://via.placeholder.com/400x250",
  },
  // Tambahkan lagi kalau mau uji pagination
];

const ECourse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const indexLast = currentPage * coursesPerPage;
  const indexFirst = indexLast - coursesPerPage;
  const currentCourses = courses.slice(indexFirst, indexLast);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  return (
    <div>
      {/* SEARCH & FILTER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search Trainings..."
        />

        <div className="d-flex gap-2">
          <select className="form-select">
            <option>Selected Option</option>
          </select>

          <button className="btn btn-outline-secondary">
            <i className="bi bi-chevron-down"></i>
          </button>
        </div>
      </div>

      {/* COURSE GRID */}
      <div className="row g-4">
        {currentCourses.map((c, i) => (
          <div key={i} className="col-md-4">
            <div className="card shadow-sm border-0">
              <img
                src={c.img}
                alt="Course Thumbnail"
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h6 className="fw-bold" style={{ minHeight: "40px" }}>
                  {c.title}
                </h6>

                <p className="text-muted small mb-1">{c.teacher}</p>

                <div className="progress mb-2" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${c.progress}%` }}
                  ></div>
                </div>

                <div className="d-flex justify-content-between small">
                  <span className="fw-semibold">{c.progress}%</span>
                  <span className="text-muted">{c.lessons} Lessons</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, idx) => (
              <li
                key={idx}
                className={`page-item ${
                  currentPage === idx + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ECourse;
