import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUniversity,
  FaQuestionCircle,
} from "react-icons/fa";

const Admissions = () => {
  return (
    <section className="bg-light min-vh-100">
      {/* Hero Section */}
      <div
        className="text-center py-5 px-3 text-white shadow"
        style={{
          background: "linear-gradient(to right, #004080, #007bff, #004080)",
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Admissions</h1>
        <p className="lead mx-auto" style={{ maxWidth: "720px" }}>
          Explore programs, eligibility, and the admission process at Anna University.
        </p>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="lead text-secondary mx-auto" style={{ maxWidth: "720px" }}>
            Anna University offers undergraduate, postgraduate, and doctoral programs in various disciplines of engineering, technology, and applied sciences.
          </p>
        </div>

        <div className="row g-4">
          {/* UG Admissions */}
          <div className="col-md-6">
            <div className="bg-white rounded shadow p-4 border-start border-5 border-primary h-100">
              <div className="d-flex align-items-center mb-3">
                <FaUserGraduate className="me-2 text-primary fs-4" />
                <h4 className="fw-semibold text-primary mb-0">Undergraduate Programs (B.E / B.Tech)</h4>
              </div>
              <ul className="text-muted small ps-3">
                <li>Based on +2 marks via Tamil Nadu Engineering Admission (TNEA)</li>
                <li>Courses in Engineering & Technology</li>
                <li>Eligibility: Passed HSC or equivalent</li>
                <li>Online registration usually opens in May</li>
              </ul>
            </div>
          </div>

          {/* PG Admissions */}
          <div className="col-md-6">
            <div className="bg-white rounded shadow p-4 border-start border-5 border-primary h-100">
              <div className="d-flex align-items-center mb-3">
                <FaChalkboardTeacher className="me-2 text-primary fs-4" />
                <h4 className="fw-semibold text-primary mb-0">Postgraduate Programs (M.E / M.Tech / MBA / MCA)</h4>
              </div>
              <ul className="text-muted small ps-3">
                <li>Based on TANCET / GATE scores</li>
                <li>Specializations in technical and management fields</li>
                <li>Eligibility: Relevant undergraduate degree</li>
                <li>Applications open around March-April</li>
              </ul>
            </div>
          </div>

          {/* Ph.D Admissions */}
          <div className="col-md-6">
            <div className="bg-white rounded shadow p-4 border-start border-5 border-primary h-100">
              <div className="d-flex align-items-center mb-3">
                <FaUniversity className="me-2 text-primary fs-4" />
                <h4 className="fw-semibold text-primary mb-0">Doctoral Programs (Ph.D)</h4>
              </div>
              <ul className="text-muted small ps-3">
                <li>Admissions through written test and interview</li>
                <li>Research opportunities in cutting-edge fields</li>
                <li>Full-time / Part-time options available</li>
                <li>Admissions usually in January and July</li>
              </ul>
            </div>
          </div>

          {/* Contact / Help */}
          <div className="col-md-6">
            <div className="bg-white rounded shadow p-4 border-start border-5 border-primary h-100">
              <div className="d-flex align-items-center mb-3">
                <FaQuestionCircle className="me-2 text-primary fs-4" />
                <h4 className="fw-semibold text-primary mb-0">Need Help?</h4>
              </div>
              <p className="text-muted small">
                For more details, visit our official admission portal or contact the university helpdesk.
              </p>
              <a
                href="https://www.annauniv.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
              >
                Visit Official Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5" />
    </section>
  );
};

export default Admissions;
