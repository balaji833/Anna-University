import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="d-flex justify-content-center gap-4 py-4" style={{ backgroundColor: "#011F4B", color: "white" }}>
      <a
        href="https://www.facebook.com/AnnaUniversity"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white fs-5 text-decoration-none"
        onMouseEnter={(e) => (e.currentTarget.style.color = "#1877F2")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/AnnaUniversity"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white fs-5 text-decoration-none"
        onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/AnnaUniversity"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white fs-5 text-decoration-none"
        onMouseEnter={(e) => (e.currentTarget.style.color = "#AAB8C2")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.linkedin.com/school/anna-university/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white fs-5 text-decoration-none"
        onMouseEnter={(e) => (e.currentTarget.style.color = "#0A66C2")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialLinks;
