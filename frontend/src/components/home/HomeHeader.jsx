import React from "react";

const HomeHeader = () => {
  return (
    <div className="d-flex flex-column bg-gradient text-white m-0 p-0">
      {/* HERO SECTION */}
      <section className="hero-section position-relative text-white">
        {/* NAVBAR - NO CHANGE */}
        <nav className="navbar navbar-expand-lg navbar-dark py-3 px-4 px-md-5 position-absolute top-0 start-0 w-100">
          <div className="container-fluid">
            {/* LOGO */}
            <a className="navbar-brand fw-bold fs-4" href="#">
              <img
                src="/images/Logo.png"
                alt="Logo"
                height="100"
                className="me-2 align-text-top"
              />
            </a>

            {/* TOGGLER (untuk mobile) - NO CHANGE */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* MENU - NO CHANGE */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav text-center">
                <li className="nav-item mx-2">
                  <a className="nav-link active" href="#">Beranda</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">Live Course</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">Bimbel</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">TryOut</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">Buku</a>
                </li>
              </ul>
            </div>

            {/* JOIN NOW BUTTON - NO CHANGE */}
            <div className="d-none d-lg-block">
              <button className="btn btn-light text-primary fw-semibold rounded-pill px-4 py-2">
                Join Now
              </button>
            </div>
          </div>
        </nav>

        {/* HERO CONTENT: align-items-start untuk menggeser ke kiri */}
        <div className="container h-100 d-flex flex-column justify-content-center align-items-start text-start px-1 px-md-5 hero-content-container">
          <div className="col-md-7">
            <h1 className="fw-bold mb-3 display-4">
              Belajar Lebih Mudah, <br /> Raih Prestasi Lebih
              <br /> Tinggi
            </h1>
            <p className="mb-4 h5">
              Join Us For Expert-Guided Trainings That Elevate Your Skill
              <br />
              And Transform Your Career.
            </p>
            <div
              className="input-group rounded-pill shadow-sm"
              style={{ maxWidth: "500px", padding: "10px" }}
            >
              <input
                type="text"
                className="form-control py-3"
                placeholder="Search Trainings"
              />
              <button className="btn btn-light px-4" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - NO CHANGE */}
      <footer className="footer-bg py-4 mt-auto">
        <div className="container d-flex justify-content-center flex-wrap gap-4">
          <img src="/smartfinder.png" alt="SmartFinder" height="28" />
          <img src="/zoomer.png" alt="Zoomer" height="28" />
          <img src="/shells.png" alt="Shells" height="28" />
          <img src="/waves.png" alt="Waves" height="28" />
          <img src="/artvenue.png" alt="ArtVenue" height="28" />
        </div>
      </footer>

      {/* STYLING: UPDATED */}
      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(to bottom, #1e3c72, #2a5298);
        }

        .hero-section {
          /* Image and background setup for desktop/large screens */
          background: url("/images/Home/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-white 1.png")
            no-repeat right center;
          background-size: contain;
          background-color: #1e3c72;
          min-height: 90vh; /* DIUBAH: Mengurangi tinggi agar footer terlihat */
          position: relative;
        }

        /* Mengurangi min-height untuk vertikal centering yang lebih tinggi, dan align-items-start untuk ke kiri */
        .hero-content-container {
          min-height: 90vh; /* DIUBAH: Mengurangi tinggi agar footer terlihat */
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .footer-bg {
          background-color: #111827;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #fff;
        }

        /* HIDE IMAGE ON TABLET/MOBILE (max-width: 991px) */
        @media (max-width: 991px) {
          .hero-section {
            background-image: none; /* Menghilangkan gambar cewek */
          }
          .hero-content-container {
            /* Menyesuaikan padding setelah gambar hilang */
            min-height: 80vh; 
            text-align: center !important; 
            align-items: center !important; /* Kembali ke tengah di mobile agar lebih rapi */
          }
          .hero-content-container .col-md-7 {
             text-align: center !important;
          }
          .hero-content-container .col-md-7 h1, .hero-content-container .col-md-7 p {
             text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeHeader;