import React from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaCalendarAlt
} from "react-icons/fa";

const Academics = () => {
  const departments = [
    "Computer Science and Engineering",
    "Mechanical Engineering",
    "Electrical and Electronics Engineering",
    "Civil Engineering",
    "Information Technology",
    "Electronics and Communication Engineering",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Architecture",
  ];

  return (
    <section className="bg-light text-dark min-vh-100">
      {/* Hero Section */}
      <div
        className="text-center py-5 px-3 text-white shadow"
        style={{
          background: "linear-gradient(to right, #004080, #007bff, #004080)",
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Academics at Anna University</h1>
        <p className="lead mx-auto" style={{ maxWidth: "720px" }}>
          Excellence in technical education and academic brilliance shaping future leaders.
        </p>
      </div>

      <div className="container py-5">
        {/* Courses Offered */}
        <div className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <FaBook className="me-2 text-primary fs-4" />
            <h2 className="h3 fw-bold">Courses Offered</h2>
          </div>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">B.E. / B.Tech - Undergraduate Programs</li>
            <li className="list-group-item">M.E. / M.Tech - Postgraduate Programs</li>
            <li className="list-group-item">MBA / MCA - Management & Computer Applications</li>
            <li className="list-group-item">Ph.D. - Doctoral Programs in Various Disciplines</li>
          </ul>
        </div>

        {/* Departments */}
        <div className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <FaChalkboardTeacher className="me-2 text-primary fs-4" />
            <h2 className="h3 fw-bold">Departments</h2>
          </div>
          <div className="row g-3">
            {departments.map((dept, idx) => (
              <div className="col-sm-6 col-md-4" key={idx}>
                <div className="border rounded shadow-sm p-3 text-center h-100 bg-white">
                  <h5 className="text-primary fw-semibold mb-0">{dept}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <FaBook className="me-2 text-primary fs-4" />
            <h2 className="h3 fw-bold">Curriculum & Syllabus</h2>
          </div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-primary text-decoration-none">UG Curriculum - Regulation 2021</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-primary text-decoration-none">PG Curriculum - Regulation 2021</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-primary text-decoration-none">Syllabus PDFs by Department</a>
            </li>
          </ul>
        </div>

        {/* Academic Calendar */}
        <div className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <FaCalendarAlt className="me-2 text-primary fs-4" />
            <h2 className="h3 fw-bold">Academic Calendar</h2>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <ul className="mb-0 list-unstyled">
              <li className="mb-1">Semester Start: July 1st, 2025</li>
              <li className="mb-1">Mid-Semester Exams: September 2025</li>
              <li className="mb-1">Model Exams: November 2025</li>
              <li className="mb-1">End-Semester Exams: December 2025</li>
              <li className="mb-1">Vacation: Jan 2026</li>
              <li className="mb-1">Convocation: March 2026</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pb-5" />
    </section>
  );
};

export default Academics;
