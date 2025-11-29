import React, { useState } from "react";
import "../../style/Exams.css"; // OPTIONAL kalau mau CSS tambahan kecil

const examData = [
  {
    id: 1,
    title: "Project Management Professional",
    price: 1046.0,
    discount: "20% Off",
    image: "/pmp.png",
  },
  {
    id: 2,
    title: "Project Management Professional",
    price: 1046.0,
    discount: "20% Off",
    image: "/pmp.png",
  },
  {
    id: 3,
    title: "Project Management Professional",
    price: 1046.0,
    discount: "20% Off",
    image: "/pmp.png",
  },
  {
    id: 4,
    title: "Project Management Professional",
    price: 1046.0,
    discount: "20% Off",
    image: "/pmp.png",
  },
  {
    id: 5,
    title: "Project Management Professional",
    price: 1046.0,
    discount: "20% Off",
    image: "/pmp.png",
  },
];

const ITEMS_PER_PAGE = 6;

const Exams = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(examData.length / ITEMS_PER_PAGE);

  const displayed = examData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="exams-page">

      {/* FILTER AREA */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search Exams..."
        />

        <select className="form-select w-25">
          <option>Selected Option</option>
          <option>Newest</option>
          <option>Most Popular</option>
        </select>
      </div>

      {/* EXAMS GRID */}
      <div className="row">
        {displayed.map((exam) => (
          <div key={exam.id} className="col-md-4 mb-4">
            <div className="card shadow-sm exam-card">

              {/* IMAGE */}
              <div className="position-relative">
                <img
                  src={exam.image}
                  className="card-img-top"
                  alt={exam.title}
                  style={{ borderRadius: "10px 10px 0 0" }}
                />

                <span className="badge bg-success position-absolute end-0 m-2 p-2 px-3">
                  {exam.discount}
                </span>
              </div>

              {/* CONTENT */}
              <div className="card-body">
                <h6 className="fw-bold">{exam.title}</h6>

                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="fw-bold text-success mb-0">${exam.price}</p>

                  <button className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-cart"></i> Buy Now
                  </button>
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
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${page === i + 1 ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => setPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Exams;
