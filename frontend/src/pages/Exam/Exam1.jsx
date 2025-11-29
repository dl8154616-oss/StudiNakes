import React, { useState } from "react";

// Dummy Data
const examData = [
  {
    id: 1,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 2,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 3,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 4,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 5,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 6,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 7,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 8,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 9,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 10,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 11,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 12,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
  {
    id: 13,
    title: "Project Management Professional",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    imgUrl: "/images/authentication/human-using-laptop.jpg",
    avatarUrl: "https://example.com/instructor-avatar.jpg",
  },
];

export default function Exam1() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(examData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = examData.slice(startIndex, startIndex + itemsPerPage);

  // --- Helper Function ---
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="container-fluid mt-4 px-5">
      {/* Header Section */}
      <header className="mb-4">
        <h2 className="mb-2 text-start fw-semibold">Our Most Popular Exams</h2>
        <p className="text-muted" style={{ fontFamily: "Poppins" }}>
          Let's join our famous exams — the knowledge provided will definitely be useful for you.
        </p>
      </header>

      {/* Exam Cards Grid */}
      <div className="row g-4">
        {currentItems.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              onClick={() => alert(`Clicked ${item.title}`)}
              className="card border-0 shadow-sm position-relative bg-light"
              style={{ borderRadius: "7px", overflow: "hidden", cursor: "pointer" }}
            >
              {/* Badge */}
              <span className="badge bg-light text-dark position-absolute top-0 end-0 m-2 px-2 py-1 fw-medium">
                {item.discount} Off
              </span>

              {/* Image */}
              <div className="p-4">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-100"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "7px 7px 0 0",
                  }}
                />
              </div>

              {/* Content */}
              <div className="card-body text-start position-relative" style={{ color: "black" }}>
                <h5 className="card-title mb-2" style={{ fontFamily: "Poppins", fontSize: "1rem" }}>
                  {item.title}
                </h5>

                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="fw-bold text-primary" style={{ fontSize: "1rem" }}>
                    ${item.discountPrice}
                  </span>
                  <span
                    className="text-decoration-line-through text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    ${item.originalPrice}
                  </span>
                </div>

                <small className="text-success d-block mb-4" style={{ fontFamily: "Poppins" }}>
                  {item.sales} sales
                </small>

                {/* Cart Icon */}
                <i
                  className="bi bi-bag-fill position-absolute bottom-0 end-0 me-3 mb-3"
                  style={{ fontSize: "1.5rem", color: "black" }}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        className="d-flex justify-content-center align-items-center mt-4"
        style={{ position: "relative", bottom: "5px" }}
      >
        {/* Prev Button */}
        <button
          className="btn btn-light border me-3 rounded-circle"
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{ width: "40px", height: "40px" }}
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        {/* Dots */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className="mx-1"
            style={{
              cursor: "pointer",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: currentPage === index + 1 ? "#269ece" : "#e0e0e0",
              transition: "all 0.2s ease-in-out",
            }}
          ></span>
        ))}

        {/* Next Button */}
        <button
          className="btn btn-light border ms-3 rounded-circle"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{ width: "40px", height: "40px" }}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
