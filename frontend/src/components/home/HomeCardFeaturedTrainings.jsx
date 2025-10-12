import React, { useState, useRef, useEffect } from "react";

const featuredTrainings = [
  {
    id: 1,
    title: "Kedokteran Umum",
    instructor: "Asep Priyadi",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    rating: 5.0,
    imgUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
    avatarUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
  },
  {
    id: 2,
    title: "Keperawatan",
    instructor: "Jane Cooper",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    rating: 5.0,
    imgUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
    avatarUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
  },
  {
    id: 3,
    title: "Kebidanan",
    instructor: "Jane Cooper",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    rating: 5.0,
    imgUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
    avatarUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
  },
  {
    id: 4,
    title: "Farmasi",
    instructor: "Jane Cooper",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    rating: 5.0,
    imgUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
    avatarUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
  },
  {
    id: 5,
    title: "Gizi Klinik",
    instructor: "Asep Priyadi",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 10,
    rating: 4.8,
    imgUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
    avatarUrl: "/images/Trainings/ilustrasi-dokter-5sclY.jpg",
  },
];

// --- Star Rating ---
const StarRating = ({ rating, sales }) => {
  const stars = "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  const reviewCount = Math.round(sales * 0.66);
  return (
    <div className="d-flex align-items-center">
      <span className="text-warning me-1" style={{ fontSize: "1.2em" }}>{stars}</span>
      <span className="text-muted" style={{ fontSize: "0.9em" }}>
        {rating} ({reviewCount})
      </span>
    </div>
  );
};

// --- Main Component ---
export default function HomeCardFeaturedTrainings() {
  const cardWidth = 290;
  const cardGap = 25;
  const cardsPerView = 4;

  const scrollRef = useRef(null);
  const totalCards = featuredTrainings.length;
  const totalPages = Math.ceil(totalCards / cardsPerView);

  const [pageIndex, setPageIndex] = useState(0);

  // Scroll ke halaman tertentu
  const scrollToPage = (index) => {
    if (!scrollRef.current) return;
    const scrollPos = index * (cardWidth + cardGap) * cardsPerView;
    scrollRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
    setPageIndex(index);
  };

  const scrollNext = () => {
    if (pageIndex < totalPages - 1) scrollToPage(pageIndex + 1);
  };

  const scrollPrev = () => {
    if (pageIndex > 0) scrollToPage(pageIndex - 1);
  };

  // Hitung index aktif saat scroll
  const handleScroll = () => {
    const element = scrollRef.current;
    if (!element) return;
    const newPage = Math.round(
      element.scrollLeft / ((cardWidth + cardGap) * cardsPerView)
    );
    setPageIndex(newPage);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">
            Featured <span style={{ color: "#269ece" }}>Trainings</span>
          </h2>
          <p className="text-muted">
            Gabung di kategori unggulan, dapatkan pengetahuan yang akan membantu perjalanan belajarmu.
          </p>
        </div>
        <a href="#" className="text-decoration-none fw-semibold" style={{ color: "#269ece" }}>
          View All Trainings &rarr;
        </a>
      </div>

      {/* Carousel Container */}
      <div className="position-relative">
        <div
          ref={scrollRef}
          className="d-flex overflow-auto pb-3"
          style={{
            gap: `${cardGap}px`,
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <style jsx="true">{`
            .overflow-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {featuredTrainings.map((item) => (
            <div
              key={item.id}
              className="card border-0 shadow-sm"
              style={{
                minWidth: `${cardWidth}px`,
                borderRadius: "12px",
                overflow: "hidden",
                scrollSnapAlign: "start",
              }}
            >
              <div className="position-relative">
                <img
                  src={item.imgUrl}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="position-absolute top-0 end-0 m-3">
                  <span
                    className="badge text-dark fw-bold"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      padding: "0.4em 0.8em",
                      fontSize: "0.85rem",
                    }}
                  >
                    <span className="text-success me-1">•</span>
                    {item.discount} OFF
                  </span>
                </div>
                <div
                  className="position-absolute bottom-0 w-100 p-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <h5 className="card-title text-white fw-bold mb-0">
                    {item.title}
                  </h5>
                </div>
              </div>

              <div className="card-body p-3">
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={item.avatarUrl}
                    alt={item.instructor}
                    className="rounded-circle me-2"
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "cover",
                    }}
                  />
                  <small
                    className="text-muted fw-semibold"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {item.instructor}
                  </small>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center">
                      <span
                        className="fw-bold me-2"
                        style={{ fontSize: "1.2rem", color: "#269ece" }}
                      >
                        Rp{item.discountPrice}
                      </span>
                      <span
                        className="text-decoration-line-through text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Rp{item.originalPrice}
                      </span>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <small className="text-muted me-2">
                        {item.sales} sales
                      </small>
                      <StarRating rating={item.rating} sales={item.sales} />
                    </div>
                  </div>

                  <button className="btn btn-light rounded-circle p-2 border">
                    <span className="text-muted" style={{ fontSize: "1.1rem" }}>
                      &#9829;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          disabled={pageIndex === 0}
          className="btn btn-light rounded-circle shadow-sm position-absolute top-50 start-0 translate-middle p-2"
          style={{
            width: "40px",
            height: "40px",
            zIndex: 10,
            opacity: pageIndex === 0 ? 0.5 : 1,
          }}
          aria-label="Previous"
        >
          &lt;
        </button>
        <button
          onClick={scrollNext}
          disabled={pageIndex === totalPages - 1}
          className="btn btn-light rounded-circle shadow-sm position-absolute top-50 end-0 translate-middle p-2"
          style={{
            width: "40px",
            height: "40px",
            zIndex: 10,
            opacity: pageIndex === totalPages - 1 ? 0.5 : 1,
          }}
          aria-label="Next"
        >
          &gt;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="d-flex justify-content-center mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            onClick={() => scrollToPage(i)}
            className="mx-1 rounded-circle"
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: i === pageIndex ? "#269ece" : "#e0e0e0",
              transition: "background-color 0.3s",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
