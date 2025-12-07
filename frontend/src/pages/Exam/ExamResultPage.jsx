import React from 'react';
// Tidak perlu import Footer karena di halaman ini tidak ada footer penuh
// Import komponen Header/Navigasi Anda di sini jika ada

// Data dummy untuk hasil Tryout
const tryoutResults = [
  {
    name: "Kedokteran",
    date: "3 September 2024 3:30",
    correct: 0,
    incorrect: 0,
    score: 0.00,
    percentage: 0,
    status: "Failure"
  },
  {
    name: "Keperawatan",
    date: "26 August 2024 1:30",
    correct: 0,
    incorrect: 2,
    score: 0.00,
    percentage: 0,
    status: "Failure"
  },
  {
    name: "Kebidanan",
    date: "24 August 2024 2:30",
    correct: 5,
    incorrect: 2,
    score: 67.00,
    percentage: 85,
    status: "Success"
  },
  {
    name: "Gizi",
    date: "22 August 2024 9:30",
    correct: 0,
    incorrect: 4,
    score: 52.00,
    percentage: 85,
    status: "Failure"
  },
  {
    name: "20 August 2024 4:30",
    date: "20 August 2024 4:30",
    correct: 0,
    incorrect: 3,
    score: 34.00,
    percentage: 57,
    status: "Failure"
  },
  {
    name: "18 August 2024 8:32",
    date: "18 August 2024 8:32",
    correct: 0,
    incorrect: 2,
    score: 52.00,
    percentage: 87,
    status: "Failure"
  },
  {
    name: "16 August 2024 5:30",
    date: "16 August 2024 5:30",
    correct: 0,
    incorrect: 1,
    score: 52.00,
    percentage: 87,
    status: "Failure"
  },
];

// Helper function untuk menentukan warna Status Badge
const getStatusBadge = (status) => {
  const color = status === "Success" ? "#28A745" : "#DC3545"; // Hijau atau Merah
  return (
    <span
      className="badge text-white px-2 py-1 fw-bold"
      style={{ 
        backgroundColor: color, 
        borderRadius: '5px',
        minWidth: '70px',
        textAlign: 'center'
      }}
    >
      {status}
    </span>
  );
};


export default function QuizResultPage() {
  return (
    <div className="w-100 m-0 p-0 bg-light" style={{ fontFamily: "Poppins", minHeight: '100vh' }}>
      
      {/* ===================== HEADER ===================== */}
      <div 
        className="d-flex align-items-center p-3 shadow-sm bg-white"
        style={{ borderBottom: '1px solid #dee2e6' }}
      >
        <button className="btn p-0 me-3" aria-label="Back">
          <i className="bi bi-arrow-left" style={{ fontSize: '1.2rem' }}></i>
        </button>
        <h4 className="m-0 fw-normal">Tryout StudeNakes</h4>
      </div>

      {/* ===================== TABLE CONTENT ===================== */}
      <div className="container mt-4 mb-5" style={{ maxWidth: '1400px' }}>
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            {/* Tabel Responsif */}
            <div className="table-responsive">
              <table className="table table-hover align-middle m-0">
                
                {/* HEAD (Dengan ikon urut) */}
                <thead className="bg-white" style={{ borderBottom: '1px solid #dee2e6' }}>
                  <tr>
                    {/* Nama Tryout */}
                    <th className="py-3 px-3" scope="col" style={{ minWidth: '180px' }}>
                      <div className="d-flex align-items-center">
                        Nama Tryout <i className="bi bi-caret-up-fill ms-1" style={{ fontSize: '0.6rem', color: '#6c757d' }}></i>
                      </div>
                    </th>
                    {/* Attempt Date */}
                    <th className="py-3 px-3" scope="col" style={{ minWidth: '150px' }}>
                      <div className="d-flex align-items-center">
                        Attempt date <i className="bi bi-caret-up-fill ms-1" style={{ fontSize: '0.6rem', color: '#6c757d' }}></i>
                      </div>
                    </th>
                    {/* Corr. ans. */}
                    <th className="py-3 px-3 text-end" scope="col" style={{ minWidth: '100px' }}>
                      <div className="d-flex align-items-center justify-content-end">
                        Corr. ans. <i className="bi bi-caret-up-fill ms-1" style={{ fontSize: '0.6rem', color: '#6c757d' }}></i>
                      </div>
                    </th>
                    {/* Incorr. ans. */}
                    <th className="py-3 px-3 text-end" scope="col" style={{ minWidth: '100px' }}>
                      <div className="d-flex align-items-center justify-content-end">
                        Incorr. ans. <i className="bi bi-caret-up-fill ms-1" style={{ fontSize: '0.6rem', color: '#6c757d' }}></i>
                      </div>
                    </th>
                    {/* Score */}
                    <th className="py-3 px-3 text-end" scope="col" style={{ minWidth: '120px' }}>
                      <div className="d-flex align-items-center justify-content-end">
                        Score <i className="bi bi-caret-up-fill ms-1" style={{ fontSize: '0.6rem', color: '#6c757d' }}></i>
                      </div>
                    </th>
                    {/* Status */}
                    <th className="py-3 px-3 text-center" scope="col" style={{ minWidth: '100px' }}>
                      <div className="d-flex align-items-center justify-content-center">
                        Status <i className="bi bi-caret-up-fill ms-1" style={{ fontSize: '0.6rem', color: '#6c757d' }}></i>
                      </div>
                    </th>
                    {/* Details */}
                    <th className="py-3 px-3 text-center" scope="col" style={{ minWidth: '80px' }}>
                      <div className="d-flex align-items-center justify-content-center">
                        Details <i className="bi bi-caret-up-fill ms-1" style={{ fontSize: '0.6rem', color: '#6c757d' }}></i>
                      </div>
                    </th>
                  </tr>
                </thead>
                
                {/* BODY */}
                <tbody>
                  {tryoutResults.map((row, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #f8f9fa' }}>
                      <td className="py-3 px-3 text-dark">{row.name}</td>
                      <td className="py-3 px-3 text-dark">{row.date}</td>
                      <td className="py-3 px-3 text-end text-dark">{row.correct}</td>
                      <td className="py-3 px-3 text-end text-dark">{row.incorrect}</td>
                      <td className="py-3 px-3 text-end text-dark">
                        {row.score.toFixed(2)} ({row.percentage}%)
                      </td>
                      <td className="py-3 px-3 text-center">
                        {getStatusBadge(row.status)}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <button className="btn btn-light rounded-circle p-0" style={{ width: '30px', height: '30px' }}>
                          <i className="bi bi-eye-fill text-dark" style={{ fontSize: '0.9rem' }}></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGING FOOTER */}
            <div className="d-flex justify-content-between align-items-center p-3" style={{ borderTop: '1px solid #dee2e6' }}>
              <small className="text-muted">Showing 1 to 7 of 7 entries</small>

              {/* Pagination */}
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-sm m-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&lt;</span>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1337</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&gt;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>
      
      {/* ===================== BOTTOM NAVIGATION ===================== */}
      <div className="fixed-bottom p-3 bg-white shadow-lg" style={{ borderTop: '1px solid #dee2e6' }}>
        <div className="d-flex justify-content-between align-items-center container" style={{ maxWidth: '1400px' }}>
            <button className="btn btn-outline-secondary px-4 py-2" style={{borderRadius: '5px'}}>
              Previous
            </button>
            <div className="text-muted fw-bold">2/7</div>
            <button className="btn text-white px-4 py-2" style={{backgroundColor: '#007bff', borderRadius: '5px'}}>
              Next Chapter
            </button>
        </div>
      </div>
      
      {/* Padding tambahan untuk memastikan konten tabel tidak tertutup oleh fixed-bottom */}
      <div style={{ height: '100px' }}></div>
    </div>
  );
}