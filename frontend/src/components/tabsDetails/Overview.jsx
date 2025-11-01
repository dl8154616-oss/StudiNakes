import React from 'react';


export default function Overview() {
return (
<div>
    <h2 className="fw-bold mb-3">Training Overview</h2>
    <p className="text-muted">
    This comprehensive Project Management Fundamentals course is designed to provide participants with a solid understanding of core management principles, techniques, and best practices. It offers hands-on exercises and practical knowledge to apply in real-world scenarios.
    </p>


    <h4 className="mt-4 mb-3">Training Content</h4>
    <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>1. Pre-Project Initiation Process</span>
             <span className="badge bg-primary rounded-pill">1h 15m</span>
         </li>
         <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>2. Defining Project Scope</span>
            <span className="badge bg-primary rounded-pill">1h 30m</span>
         </li>
         <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>3. Project Execution</span>
         <span className="badge bg-primary rounded-pill">2h 45m</span>
         </li>
         <li className="list-group-item d-flex justify-content-between align-items-center">
         <span>4. Monitoring & Control</span>
         <span className="badge bg-primary rounded-pill">1h 10m</span>
    </li>
    </ul>
</div>
);
}