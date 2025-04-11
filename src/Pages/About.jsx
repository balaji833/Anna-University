import React from "react";
import { FaUniversity, FaHistory, FaBookOpen } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-light text-dark min-vh-100">
      {/* Hero Section */}
      <div
        className="text-center py-5 px-3 text-white shadow"
        style={{
          background: "linear-gradient(to right, #004080, #007bff, #004080)",
        }}
      >
        <h1 className="display-4 fw-bold mb-3">About Anna University</h1>
        <p className="lead mx-auto" style={{ maxWidth: "720px" }}>
          Excellence through knowledge, legacy, and innovation since 1978.
        </p>
      </div>

      {/* Info Cards */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Vision */}
          <div className="col-md-4">
            <div className="bg-white rounded shadow-sm text-center p-4 h-100">
              <FaUniversity className="text-primary fs-1 mb-3" />
              <h4 className="fw-semibold mb-2">Our Vision</h4>
              <p className="text-muted">
                To be a global beacon of excellence in education, research, and societal transformation.
              </p>
            </div>
          </div>
          {/* Mission */}
          <div className="col-md-4">
            <div className="bg-white rounded shadow-sm text-center p-4 h-100">
              <FaBookOpen className="text-primary fs-1 mb-3" />
              <h4 className="fw-semibold mb-2">Our Mission</h4>
              <p className="text-muted">
                Deliver high-quality technical education and nurture innovation, ethics, and entrepreneurship.
              </p>
            </div>
          </div>
          {/* Core Values */}
          <div className="col-md-4">
            <div className="bg-white rounded shadow-sm text-center p-4 h-100">
              <FaHistory className="text-primary fs-1 mb-3" />
              <h4 className="fw-semibold mb-2">Core Values</h4>
              <p className="text-muted">
                Integrity, Excellence, Inclusivity, Innovation, Sustainability, and Service to Society.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="container pb-4">
        <div className="mb-4 border-start border-4 border-primary ps-3">
          <h2 className="fw-bold text-dark">Our History</h2>
        </div>
        <p className="lead text-muted">
          Anna University was established on September 4, 1978, integrating prestigious institutions like CEG, MIT, ACT, and SAP.
          Named after former Tamil Nadu Chief Minister C.N. Annadurai, the university has since been at the forefront of higher education and research in India.
        </p>
      </div>

      {/* Academics Section */}
      <div className="container pb-5">
        <div className="mb-4 border-start border-4 border-primary ps-3">
          <h2 className="fw-bold text-dark">Education & Academics</h2>
        </div>
        <p className="lead text-muted">
          Anna University offers diverse programs in engineering, technology, applied sciences, and architecture.
          With a dynamic curriculum, innovative pedagogy, and cutting-edge research, the university empowers students to lead in a rapidly changing world.
          Over 500 affiliated colleges and multiple campuses make Anna University a hub for academic excellence across Tamil Nadu.
        </p>
      </div>
    </section>
  );
};

export default About;
