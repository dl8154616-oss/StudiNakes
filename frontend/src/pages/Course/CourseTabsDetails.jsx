import React, { useState, useEffect, lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy load tab components
const Overview = lazy(() => import('../../components/tabsDetails/Overview'));
const Reviews = lazy(() => import('../../components/tabsDetails/Reviews'));
const Discussion = lazy(() => import('../../components/tabsDetails/Discussion'));
const Resources = lazy(() => import('../../components/tabsDetails/Resources'));
const Instructor = lazy(() => import('../../components/tabsDetails/Instructor'));

export default function CourseDetailTabs({ initial = 'overview' }) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'discussion', label: 'Discussion' },
    { id: 'resources', label: 'Resources' },
    { id: 'instructor', label: 'Instructor' },
  ];

  const [active, setActive] = useState(initial);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && tabs.some(t => t.id === hash)) setActive(hash);

    const onHash = () => {
      const h = window.location.hash.replace('#', '');
      if (h && tabs.some(t => t.id === h)) setActive(h);
    };

    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    history.replaceState(null, '', `#${id}`);
  };

  const renderActive = () => {
    switch (active) {
      case 'overview':
        return <Overview />;
      case 'reviews':
        return <Reviews />;
      case 'discussion':
        return <Discussion />;
      case 'resources':
        return <Resources />;
      case 'instructor':
        return <Instructor />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="container my-5">
      {/* Course Header */}
      <div className="row align-items-center mb-5">
        <div className="col-md-8">
          <h1 className="fw-bold">Fundamentals Of Project Management</h1>
          <p className="text-muted">Project Management Certification to gain an in-demand skill that is adding 1.5 million jobs each year.</p>
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-success">4.8 ★</span>
            <small className="text-muted">(2,067 Reviews)</small>
          </div>
        </div>
        <div className="col-md-4 text-md-end mt-4 mt-md-0">
          <div className="border rounded p-3 bg-light">
            <h4 className="fw-bold">USD 192.00 <span className="text-decoration-line-through text-muted fs-6">USD 250.00</span></h4>
            <button className="btn btn-primary w-100 mb-2">Add to Cart</button>
            <button className="btn btn-outline-secondary w-100">Buy Now</button>
            <ul className="list-unstyled small text-muted mt-3 mb-0">
              <li><i className="bi bi-check2"></i> 10 hours on-demand video</li>
              <li><i className="bi bi-check2"></i> Certificate of completion</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4" role="tablist">
        {tabs.map(tab => (
          <li key={tab.id} className="nav-item" role="presentation">
            <button
              className={`nav-link ${active === tab.id ? 'active' : ''}`}
              id={`tab-${tab.id}`}
              onClick={() => handleClick(tab.id)}
              role="tab"
              aria-selected={active === tab.id}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content border rounded p-4 bg-white shadow-sm">
        <Suspense fallback={<div className="text-center py-5 text-secondary">Loading content...</div>}>
          {renderActive()}
        </Suspense>
      </div>
    </div>
  );
}
