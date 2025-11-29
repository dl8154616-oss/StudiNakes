import React from "react";
import Footer from "../../components/footer.jsx"; // ⬅️ pastikan path benar

export default function ExamDetailsPage() {
  const examData = [
    {
      id: 1,
      title: "Project Management Professional",
      imgUrl: "/images/Exam/pmp.png",
      discount: "20%",
      discountPrice: "1,600.00",
      originalPrice: "2,000.00",
      sales: 15,
    },
    {
      id: 2,
      title: "Project Management Professional",
      imgUrl: "/images/Exam/pmp.png",
      discount: "20%",
      discountPrice: "1,600.00",
      originalPrice: "2,000.00",
      sales: 15,
    },
    {
      id: 3,
      title: "Project Management Professional",
      imgUrl: "/images/Exam/pmp.png",
      discount: "20%",
      discountPrice: "1,600.00",
      originalPrice: "2,000.00",
      sales: 15,
    },
    {
      id: 4,
      title: "Project Management Professional",
      imgUrl: "/images/Exam/pmp.png",
      discount: "20%",
      discountPrice: "1,600.00",
      originalPrice: "2,000.00",
      sales: 15,
    },
    {
      id: 5,
      title: "Project Management Professional",
      imgUrl: "/images/Exam/pmp.png",
      discount: "20%",
      discountPrice: "1,600.00",
      originalPrice: "2,000.00",
      sales: 15,
    },
  ];

  return (
    <div className="w-100 m-0 p-0" style={{ fontFamily: "Poppins" }}>
      
      {/* ===================== WRAPPER 1 (HERO) ===================== */}
      <div className="position-relative w-100">
        <img
          src="/images/Exam/human-using-laptop2.png"
          alt="Banner"
          className="w-100 h-auto d-block"
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center px-4 px-md-5"
          style={{
            zIndex: 10,
            color: "white",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <h2 className="fw-bold fs-1">Kedokteran</h2>
          <p className="fs-5 mt-2">Tenang, kamu bisa kerjakan dengan fokus.</p>
          <p className="fs-5">Klik tombol untuk memulai ujian sekarang.</p>

          <button
            className="btn mt-3 px-4 py-2 text-white"
            style={{
              backgroundColor: "#F86C5F",
              fontWeight: "600",
              borderRadius: "6px",
              width: "fit-content",
            }}
          >
            Mulai Sekarang
          </button>
        </div>
      </div>

      {/* ===================== EXAM DETAILS ===================== */}
      <div className="px-5 mt-5 mb-10">
        <h3 className="mb-2">
          Explore <span style={{ color: "#58B947" }}>Exam Details</span>
        </h3>
        <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>
          Get quick insights into duration, marks, passing grade, and scheduled
          breaks
        </p>

        {/* ---- ROW 1 ---- */}
        <div className="row g-4 mt-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div
              className="card px-4"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="../images/Exam/durasi-tryout.png"
                className="mt-3"
                style={{ width: "54px" }}
              />
              <div className="card-body p-0 mt-4">
                <h5 className="fw-bold">Durasi Tryout</h5>
                <p className="m-0 mt-4 mb-3">
                  <span style={{ color: "#58B947" }}>2 hours</span> Alloted time
                  for completing the exam.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div
              className="card px-4"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="../images/Exam/question-count.png"
                className="mt-3"
                style={{ width: "54px" }}
              />
              <div className="card-body p-0 mt-4">
                <h5 className="fw-bold">Question Count</h5>
                <p className="m-0 mt-4 mb-3">
                  This exam comprises a total of{" "}
                  <span style={{ color: "#58B947" }}>12 questions.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div
              className="card px-4"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="../images/Exam/retry-numbers.png"
                className="mt-3"
                style={{ width: "54px" }}
              />
              <div className="card-body p-0 mt-4">
                <h5 className="fw-bold">Retry Numbers</h5>
                <p className="m-0 mt-4 mb-3">
                  Maximum retry allowed is{" "}
                  <span style={{ color: "#58B947" }}>3 attempts.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- ROW 2 ---- */}
        <div className="row g-4 mt-4">

          {/* Card 4 */}
          <div className="col-md-4 offset-md-2">
            <div
              className="card px-4"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="../images/Exam/passing-grade.png"
                className="mt-3"
                style={{ width: "54px" }}
              />
              <div className="card-body p-0 mt-4">
                <h5 className="fw-bold">Passing Grade</h5>
                <p className="m-0 mt-4 mb-3">
                  <span style={{ color: "#58B947" }}>70%</span> Minimum passing
                  score required.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4">
            <div
              className="card px-4"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="../images/Exam/pause-duration.png"
                className="mt-3"
                style={{ width: "54px" }}
              />
              <div className="card-body p-0 mt-4">
                <h5 className="fw-bold">Durasi Tryout</h5>
                <p className="m-0 mt-4 mb-3">
                  A <span style={{ color: "#58B947" }}>15-minute</span> break
                  every <span style={{ color: "#58B947" }}>10 questions</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== WRAPPER 2 ===================== */}
      <div className="position-relative w-100 mt-10 mb-5">
        <img
          src="/images/Exam/standing-human.png"
          alt="Banner"
          className="w-100 h-auto d-block"
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center px-4 px-md-5"
          style={{
            zIndex: 10,
            color: "white",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <h2 className="fw-bold fs-1 mt-5">Klik Mulai Sekarang</h2>
          <p className="fs-5 mt-1">Tenang, kamu bisa kerjakan dengan fokus.</p>
          <p className="fs-5">Klik tombol untuk memulai ujian sekarang.</p>

          <button
            className="btn mt-3 px-4 py-2 text-white"
            style={{
              backgroundColor: "#F86C5F",
              fontWeight: "600",
              borderRadius: "6px",
              width: "fit-content",
            }}
          >
            Mulai Sekarang
          </button>
        </div>
      </div>

      {/* ===================== FEATURED EXAMS ===================== */}
      <div className="px-5 mt-5 mb-10">
        <h3 className="mb-2">
          Explore <span style={{ color: "#58B947" }}>Featured Exams</span>
        </h3>
        <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </p>
      </div>

      {/* CARD SLIDER */}
      <div className="px-5">
        <div
          className="d-flex gap-4 overflow-auto py-2"
          style={{ whiteSpace: "nowrap" }}
        >
          {examData.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: "260px" }}
            >
              <div
                className="card border-0 shadow-sm position-relative bg-light"
                style={{ borderRadius: "7px", overflow: "hidden" }}
              >
                <span className="badge bg-light text-dark position-absolute top-0 end-0 m-2 px-2 py-1 fw-medium">
                  {item.discount} Off
                </span>

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

                <div
                  className="card-body text-start position-relative"
                  style={{ color: "black" }}
                >
                  <h5 className="card-title mb-2">{item.title}</h5>

                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="fw-bold text-primary">
                      ${item.discountPrice}
                    </span>
                    <span className="text-decoration-line-through text-muted">
                      ${item.originalPrice}
                    </span>
                  </div>

                  <small className="text-success d-block mb-4">
                    {item.sales} sales
                  </small>

                  <i
                    className="bi bi-bag-fill position-absolute bottom-0 end-0 me-3 mb-3"
                    style={{ fontSize: "1.5rem", color: "black" }}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== FOOTER ===================== */}
      <Footer />
    </div>
  );
}
