import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top shadow">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          Anna University
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link to="/admissions" className="nav-link">
                Admissions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Academics" className="nav-link">
                Academics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
