import React from 'react';

const kategori = [
  { title: 'Keperawatan', img: '...' },
  { title: 'Kebidanan', img: '...' },
  { title: 'Farmasi', img: '...' },
  { title: 'Kesehatan Gigi', img: '...' },
  { title: 'Kedokteran', img: '...' },
];

export default function HomeCardKategoriBimbel() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {kategori.map((item, idx) => (
        <div key={idx} className="card text-bg-dark" style={{ width: '250px', height: '280px' }}>
          <img src={item.img} className="card-img" />
          <div className="card-img-overlay">
            <h5 className="card-title">{item.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}