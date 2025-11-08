import React from 'react';


export default function Reviews() {
const reviews = [
    { name: 'Alice M.', text: 'Great foundation for project management concepts!', rating: 5 },
    { name: 'John K.', text: 'Very well-structured and easy to follow.', rating: 4 },
    { name: 'Sarah L.', text: 'Excellent examples and explanations.', rating: 5 },
];


return (
    <div>
        <h2 className="fw-bold mb-3">Student Reviews</h2>
        {reviews.map((r, i) => (
            <div key={i} className="border-bottom pb-3 mb-3">
                <h6 className="mb-1">{r.name}</h6>
            <div className="text-warning mb-1">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
        <p className="text-muted mb-0">{r.text}</p>
        </div>
        ))}
    </div>
    );
}