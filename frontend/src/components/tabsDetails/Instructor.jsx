import React from 'react';

export default function Instructor() {
return (
    <div>
        <div className="d-flex align-items-center mb-3">
             <img src="https://via.placeholder.com/100" alt="Instructor" className="rounded-circle me-3 border"/>
         <div>

            <h4 className="mb-0">Dr. Jane Doe</h4>
            <small className="text-muted">Senior Project Manager | 15+ Years Experience</small>
            
         </div>
        </div>
        <p className="text-muted">
        Dr. Jane Doe is a certified PMP professional with over 15 years of experience leading large-scale international projects. She specializes in strategic planning, agile methodologies, and leadership development.
        </p>
    </div>
);
}