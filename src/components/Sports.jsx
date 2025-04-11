import React from "react";
import { FaTrophy, FaRunning, FaFutbol } from "react-icons/fa";

const Sports = () => {
  return (
    <section className="bg-light min-vh-100">
      {/* Hero Section */}
      <div className="text-center py-5 px-3 text-white bg-gradient bg-primary" style={{ background: 'linear-gradient(to right, #1e3a8a, #2563eb, #1e3a8a)' }}>
        <h1 className="display-4 fw-bold mb-3">Sports & Athletics</h1>
        <p className="lead mx-auto" style={{ maxWidth: '720px' }}>
          Promoting holistic development through excellence in sports and athletic achievements.
        </p>
      </div>

      {/* Sports Highlights */}
      <div className="container my-5 py-4">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-center shadow-sm h-100 border-0 rounded-4">
              <div className="card-body">
                <FaRunning className="text-primary fs-1 mb-3" />
                <h5 className="card-title fw-semibold text-primary">Athletic Training</h5>
                <p className="card-text text-muted small">
                  Professional training for track and field events with a dedicated athletics department and expert coaches.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center shadow-sm h-100 border-0 rounded-4">
              <div className="card-body">
                <FaFutbol className="text-primary fs-1 mb-3" />
                <h5 className="card-title fw-semibold text-primary">Sports Infrastructure</h5>
                <p className="card-text text-muted small">
                  World-class facilities for football, cricket, basketball, tennis, swimming, and indoor games.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center shadow-sm h-100 border-0 rounded-4">
              <div className="card-body">
                <FaTrophy className="text-primary fs-1 mb-3" />
                <h5 className="card-title fw-semibold text-primary">Achievements</h5>
                <p className="card-text text-muted small">
                  Our students have won multiple inter-university, national, and international medals in various sports disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
