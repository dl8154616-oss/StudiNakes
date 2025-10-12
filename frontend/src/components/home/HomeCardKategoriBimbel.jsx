import React from 'react';

// Data for the categories
const kategori = [
  { title: 'Keperawatan', img: "/images/Trainings/ilustrasi-dokter-5sclY.jpg" }, // Placeholder image names
  { title: 'Kebidanan', img: "/images/Trainings/ilustrasi-dokter-5sclY.jpg" },
  { title: 'Farmasi', img: "/images/Trainings/ilustrasi-dokter-5sclY.jpg" },
  { title: 'Kesehatan Gigi', img: "/images/Trainings/ilustrasi-dokter-5sclY.jpg" },
  { title: 'Kedokteran', img: "/images/Trainings/ilustrasi-dokter-5sclY.jpg" },
];

// Component to display the category cards
export default function HomeCardKategoriBimbel() {
  return (
    // Main container for the whole section
    <div className="container my-5">
      {/* Header section with title and "View All Categories" link */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Kategori Bimbel</h2>
          <p className="text-secondary">
            Let's join our famous categories, the knowledge provided will definitely be useful for you.
          </p>
        </div>
        <a href="#" className="text-decoration-none d-flex align-items-center fw-semibold">
          View All Categories <span style={{ marginLeft: '5px' }}>&rarr;</span>
        </a>
      </div>

      {/* Card row using Bootstrap's flexbox utilities (d-flex and gap-3/5) for spacing and responsiveness */}
      <div className="d-flex flex-wrap justify-content-center justify-content-lg-start" style={{ gap: '20px' }}>
        {kategori.map((item, idx) => (
          // Individual Card
          // We use col-xx-auto classes in a non-Bootstrap grid context to hint at spacing
          // and rely on custom inline styles or utility classes for fixed dimensions and spacing.
          <div 
            key={idx} 
            className="card text-bg-dark border-0 overflow-hidden" 
            style={{ 
              width: '240px', // Adjusted width slightly for better fit, matching the image's ratio
              height: '280px', 
              borderRadius: '12px', // Add rounded corners
              cursor: 'pointer',
            }}
          >
            {/* The image, covering the card and set to a darker background (text-bg-dark) */}
            <img 
              src={item.img} 
              className="card-img h-100 w-100" 
              alt={item.title} 
              style={{ objectFit: 'cover', opacity: 0.8 }} // Ensure image covers the area and is slightly dimmed
            />
            
            {/* The overlay for the title */}
            <div 
              className="card-img-overlay d-flex flex-column justify-content-end p-3" // Push content to the bottom
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)', // Gradient overlay at the bottom
              }}
            >
              {/* The title text */}
              <h5 className="card-title fw-bold fs-5 mb-0" style={{ color: 'white' }}>
                {item.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}