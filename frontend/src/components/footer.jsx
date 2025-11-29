import React from "react";

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-5 mt-5">
  <div className="container">
    <div className="row">

      {/* StudiNakes */}
      <div className="col-md-3 mb-4">
        <div className="d-flex align-items-center mb-3">
          <img
            src="/images/logo-studinakes.png"
            alt="Logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
          <h4 className="fw-bold m-0">StudiNakes</h4>
        </div>

        <p className="text-light opacity-75">
          © 2025 Studinakes. Bersama menuju kampus dan karier kesehatan impian.
          Materi praktis dan soal latihan untuk calon profesional kesehatan.
        </p>

        <div className="d-flex gap-3 mt-3">
          <a href="#" className="text-light opacity-75 fs-5"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light opacity-75 fs-5"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-light opacity-75 fs-5"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="text-light opacity-75 fs-5"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-light opacity-75 fs-5"><i className="bi bi-youtube"></i></a>
        </div>
      </div>

      {/* Top 4 Category */}
      <div className="col-md-2 mb-4">
        <h5 className="fw-bold mb-3">Top 4 Category</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="#" className="text-light opacity-75">Kedokteran</a></li>
          <li className="mb-2"><a href="#" className="text-light opacity-75">Keperawatan</a></li>
          <li className="mb-2"><a href="#" className="text-light opacity-75">Gizi</a></li>
          <li className="mb-2"><a href="#" className="text-light opacity-75">Kebidanan</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="col-md-2 mb-4">
        <h5 className="fw-bold mb-3">Quick Links</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="#" className="text-light opacity-75">About</a></li>
          <li className="mb-2"><a href="#" className="text-light opacity-75">Become Instructor →</a></li>
          <li className="mb-2"><a href="#" className="text-light opacity-75">Contact</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="col-md-2 mb-4">
        <h5 className="fw-bold mb-3">Support</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="#" className="text-light opacity-75">Help Center</a></li>
          <li className="mb-2"><a href="#" className="text-light opacity-75">FAQs</a></li>
          <li className="mb-2"><a href="#" className="text-light opacity-75">Terms & Conditions</a></li>
          <li className="mb-2"><a href="#" className="text-light opacity-75">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Download App */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold mb-3">Download our app</h5>
        <div className="d-flex flex-column gap-2">
          <a href="#" className="d-flex align-items-center gap-2 bg-secondary p-2 rounded text-white">
            <i className="bi bi-apple fs-4"></i> Download on App Store
          </a>
          <a href="#" className="d-flex align-items-center gap-2 bg-secondary p-2 rounded text-white">
            <i className="bi bi-google-play fs-4"></i> Get it on Play Store
          </a>
        </div>
      </div>

    </div>
  </div>
</footer>
    );
}