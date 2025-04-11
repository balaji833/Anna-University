import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

// Footer Component (included at the bottom)
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <div className="container text-center">
        <small>
          © 2025 Anna University | Guindy, Chennai - 600025 | All rights reserved.
        </small>
      </div>
    </footer>
  );
};

const quickLinks = [
  {
    category: "Academics",
    links: [
      { name: "Academic Calendar", url: "/academic-calendar" },
      { name: "Syllabus", url: "/syllabus" },
      { name: "Exam Schedule", url: "/exam-schedule" },
      { name: "Results Portal", url: "/results" },
      { name: "Digital Learning (NPTEL)", url: "https://nptel.ac.in" },
    ],
  },
  {
    category: "Admissions",
    links: [
      { name: "UG Admissions", url: "/admissions/ug" },
      { name: "PG Admissions", url: "/admissions/pg" },
      { name: "Ph.D Admissions", url: "/admissions/phd" },
      { name: "Lateral Entry", url: "/admissions/lateral-entry" },
      { name: "International Students", url: "/admissions/international" },
    ],
  },
  {
    category: "Student Services",
    links: [
      { name: "Library Portal", url: "/library" },
      { name: "Hostel Info", url: "/hostel" },
      { name: "Placement Cell", url: "/placement" },
      { name: "Student Grievances", url: "/grievances" },
      { name: "Anti-Ragging Policy", url: "/anti-ragging" },
    ],
  },
  {
    category: "Research & Development",
    links: [
      { name: "Research Centers", url: "/research/centers" },
      { name: "Sponsored Projects", url: "/research/projects" },
      { name: "Patent Filing", url: "/research/patents" },
      { name: "Innovation Cell", url: "/innovation-cell" },
    ],
  },
  {
    category: "Online Services",
    links: [
      { name: "Online Fee Payment", url: "/fee-payment" },
      { name: "Hall Ticket Download", url: "/hall-ticket" },
      { name: "Certificate Verification", url: "/certificate-verification" },
      { name: "Student Portal", url: "/student-portal" },
    ],
  },
  {
    category: "Campus Life",
    links: [
      { name: "Clubs & Societies", url: "/campus/clubs" },
      { name: "Sports Facilities", url: "/campus/sports" },
      { name: "Events & Fests", url: "/campus/events" },
      { name: "NSS / NCC", url: "/campus/nss-ncc" },
    ],
  },
  {
    category: "Alumni",
    links: [
      { name: "Notable Alumni", url: "/alumni" },
      { name: "Alumni Association", url: "/alumni/association" },
      { name: "Give Back", url: "/alumni/donate" },
    ],
  },
  {
    category: "Governance",
    links: [
      { name: "RTI Act", url: "/governance/rti" },
      { name: "University Act & Statutes", url: "/governance/statutes" },
      { name: "Committees & Councils", url: "/governance/committees" },
    ],
  },
];

const QuickLinks = () => {
  return (
    <>
      <div className="min-vh-100 bg-light py-5 px-3 px-md-5">
        <div className="container">
          <h1 className="display-5 fw-bold text-primary mb-5 border-start border-4 ps-3 border-primary">
            Quick Links
          </h1>
          <div className="row g-4">
            {quickLinks.map((section, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-semibold mb-3">
                      {section.category}
                    </h5>
                    <ul className="list-unstyled">
                      {section.links.map((link, idx) => {
                        const isInternal = link.url.startsWith("/");
                        return (
                          <li key={idx} className="mb-2">
                            {isInternal ? (
                              <Link
                                to={link.url}
                                className="text-decoration-none text-dark d-flex align-items-center"
                              >
                                <ExternalLink size={16} className="me-2 text-primary" />
                                <span className="fw-medium">{link.name}</span>
                              </Link>
                            ) : (
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-dark d-flex align-items-center"
                              >
                                <ExternalLink size={16} className="me-2 text-primary" />
                                <span className="fw-medium">{link.name}</span>
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default QuickLinks;
