import React from 'react';


export default function Resources() {
    const files = [
        { name: 'Project Charter Template', type: 'PDF', link: '#' },
        { name: 'Scope Definition Worksheet', type: 'DOCX', link: '#' },
        { name: 'Schedule Planning Sheet', type: 'XLSX', link: '#' },
];


return (
        <div>
            <h2 className="fw-bold mb-3">Course Resources</h2>
            <ul className="list-group">
            {files.map((f, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            <span><i className="bi bi-file-earmark-text me-2"></i>{f.name}</span>
            <a href={f.link} className="btn btn-sm btn-outline-primary">Download</a>
            </li>
            ))}
            </ul>
        </div>
    );
}