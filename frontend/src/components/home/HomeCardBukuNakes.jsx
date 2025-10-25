import React from 'react';

export default function HomeCardBukuNakes() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card" style={{ width: '288px', backgroundColor: '#ffffffff', color: 'black', borderRadius: '10px' }}>
            <div>
              
            </div>
            {/* Badge 20% Off */}
            <div className="position-absolute top-0 end-0 m-2">
              <span className="badge bg-light text-dark rounded-pill px-3 py-1"> 20% Off</span>
            </div>

            {/* Image / Logo */}
            <div className="d-flex justify-content-center align-items-center p-4">
              <img 
                src="..." 
                alt="Foto Buku" 
                style={{ width: '100px', height: '100px' }} 
              />
            </div>

            {/* Content */}
            <div className="card-body text-left">
              <h5 className="card-title" style={{ fontSize: '14px', fontFamily: 'Poppins'}}>Kedokteran Umum</h5>
              
              {/* Harga */}
              <div className="d-flex justify-content-left align-items-center gap-2 mb-2">
                <span className="fw-bold" style={{ fontSize: '15px', color: '#269eceff'}}>$1,600.00</span>
                <span className="text-decoration-line-through text-muted" style={{ fontSize: '16px' }}>$2,000.00</span>
              </div>

              {/* Sales*/}
              <small className="text-success" style={{fontFamily: 'Poppins'}} >15 sales</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}