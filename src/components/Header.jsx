import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/Anna.jpg";
import logo from "../assets/logo.png";
import back from "../assets/back.jpg";
import mit from "../assets/mit.jpg";
import univ9 from "../assets/univ9.jpg";
import Untiled from "../assets/Untitled.jpg";
import slide from "../assets/slide.jpeg";

import "../styles/Header.css";

const Header = () => {
  return (
    <>
      {/* Announcements Bar */}
      <div className="bg-light border-top border-bottom py-2 d-flex align-items-center">
        <span className="bg-warning px-3 py-1 fw-semibold me-2 rounded-end">Announcements</span>
        <marquee behavior="scroll" direction="left" className="text-dark fw-medium">
          Submitting the Application: 10.03.2025 | CHAKRAVYUHA'25 - Innovation and Technology Celebration at MIT CAMPUS, ANNA UNIVERSITY | Cartify - E-Commerce Workshop coming soon!
        </marquee>
      </div>

      {/* Hero Section */}
      <div
        className="position-relative text-white text-center py-5"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

        <div className="position-relative z-1 container animate-fadeIn">
          <div className="mb-4 d-flex justify-content-center">
            <img
              src={logo}
              alt="Anna University Logo"
              className="rounded-circle border border-white shadow-lg"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          </div>

          <h1 className="fs-3 fw-bold mb-1 text-white">அண்ணா பல்கலைக்கழகம்</h1>
          <h2
            className="display-4 fw-bolder mb-3"
            style={{
              background: "linear-gradient(to right, #93c5fd, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Anna University
          </h2>

          <p className="lead text-light mb-4">
            Premier institution in technical education and research in India.
          </p>

          <Link to="/learn-more" className="btn btn-primary px-4 py-2 fw-semibold shadow">
            Learn More
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-5 text-white" style={{ backgroundColor: "#3B82F6" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-2 col-6 mb-4">
              <h3 className="fw-bold">2.8K</h3>
              <p className="mb-0">Under Graduates</p>
            </div>
            <div className="col-md-2 col-6 mb-4">
              <h3 className="fw-bold">216</h3>
              <p className="mb-0">Post Graduates</p>
            </div>
            <div className="col-md-2 col-6 mb-4">
              <h3 className="fw-bold">306</h3>
              <p className="mb-0">PhD Scholars</p>
            </div>
            <div className="col-md-2 col-6 mb-4">
              <h3 className="fw-bold">11</h3>
              <p className="mb-0">UG Programs</p>
            </div>
            <div className="col-md-2 col-6 mb-4">
              <h3 className="fw-bold">14</h3>
              <p className="mb-0">PG Programs</p>
            </div>
            <div className="col-md-2 col-6 mb-4">
              <h3 className="fw-bold">210 / 124</h3>
              <p className="mb-0">Faculty / Staff</p>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={back}
              alt="Anna University Campus"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "400px",
              }}
            />
          </div>

          <div className="col-md-7">
            <h2 className="fw-bold text-primary mb-3">Welcome To University</h2>
            <p className="text-muted mb-3">
              Anna University was established on 4<sup>th</sup> September, 1978 as a unitary type of University. This University was named after Late Dr. C. N. Annadurai, former Chief Minister of Tamil Nadu. It offers higher education in Engineering, Technology, Architecture and Applied Sciences relevant to the current and projected needs of the society. Besides promoting research and disseminating knowledge gained therefrom, it fosters cooperation between the academic and industrial communities.
            </p>
            <p className="text-muted">
              The University was formed by bringing together and integrating four well-known technical institutions in the city of Madras (now Chennai), namely:
            </p>
            <ul className="text-muted">
              <li>College of Engineering (CEG) – Established in 1794</li>
              <li>Alagappa College of Technology (ACT) – Established in 1944</li>
              <li>Madras Institute of Technology (MIT) – Established in 1949</li>
              <li>School of Architecture and Planning (SAP) – Established in 1957</li>
            </ul>
          </div>
        </div>
      </div>

      {/* University Campuses Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5 text-dark">University Campuses</h2>
        <div className="row g-4">
          {/* CEG */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow h-100 border-0">
              <img
                src={slide}
                className="card-img-top"
                alt="College of Engineering, Guindy"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">CEG</h5>
              </div>
            </div>
          </div>

          {/* MIT */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow h-100 border-0">
              <img
                src={mit}
                className="card-img-top"
                alt="Madras Institute of Technology"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">MIT</h5>
              </div>
            </div>
          </div>

          {/* ACT */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow h-100 border-0">
              <img
                src={univ9}
                className="card-img-top"
                alt="Alagappa College of Technology"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">ACT</h5>
              </div>
            </div>
          </div>

          {/* SAP */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow h-100 border-0">
              <img
                src={Untiled}
                className="card-img-top"
                alt="School of Architecture and Planning"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">SAP</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section with Marquee */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 text-dark">Facilities</h2>
          <marquee behavior="scroll" direction="left" scrollamount="6">
            <div className="d-flex align-items-center gap-4">
              {[
                { name: "PDA", icon: "https://img.icons8.com/fluency/48/brain.png" },
                { name: "Tamil Mandram", icon: "https://img.icons8.com/color/48/mustache.png" },
                { name: "Rotaract Club", icon: "https://img.icons8.com/external-flat-icons-inmotus-design/48/brainstorm.png" },
                { name: "Computer Society", icon: "https://img.icons8.com/color/48/computer.png" },
                { name: "TBO", icon: "https://img.icons8.com/color/48/movie-ticket.png" },
                { name: "MIT Quill", icon: "https://img.icons8.com/color/48/quill-pen.png" },
                { name: "Variety Team", icon: "https://img.icons8.com/ios-filled/48/bull.png" },
                { name: "Museum", icon: "https://img.icons8.com/color/48/museum.png" },
                { name: "MITRA", icon: "https://img.icons8.com/color/48/train.png" },
              ].map((facility, index) => (
                <div
                  key={index}
                  className="bg-white rounded-4 shadow-sm px-4 py-3 text-center"
                  style={{ minWidth: "140px" }}
                >
                  <img src={facility.icon} alt={facility.name} className="mb-2" />
                  <div className="fw-semibold text-dark">{facility.name}</div>
                </div>
              ))}
            </div>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Header;
