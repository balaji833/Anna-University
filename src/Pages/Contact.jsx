import React from "react";

const Contact = () => {
  return (
    <section className="bg-light text-dark min-vh-100">
      {/* Hero Section */}
      <div
        className="text-center py-5 px-3 text-white shadow"
        style={{
          background: "linear-gradient(to right, #004080, #007bff, #004080)",
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
        <p className="lead mx-auto" style={{ maxWidth: "720px" }}>
          Reach out to Anna University — we're here to assist, inform, and connect.
        </p>
      </div>

      {/* Contact Info & Form */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Details */}
          <div className="col-md-6">
            <h3 className="h4 fw-semibold text-primary mb-3">Get in Touch</h3>
            <p>
              If you have any questions, feedback, or need assistance, feel free to reach out.
              We’re happy to help!
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-2"><strong>📍 Address:</strong> Anna University, Guindy, Chennai - 600025, Tamil Nadu, India</li>
              <li className="mb-2"><strong>📞 Phone:</strong> +91-44-2235-7004</li>
              <li><strong>📧 Email:</strong> info@annauniv.edu</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="bg-white shadow rounded p-4">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
