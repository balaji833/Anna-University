import React from "react";
import alumni_icon from "../assets/Anna.jpg"; // Make sure this image exists

const AlumniSection = () => {
  return (
    <section className="bg-white py-5 px-3">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Image Section */}
          <div className="col-md-6">
            <img
              src={alumni_icon}
              alt="Anna University Alumni"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="h2 fw-bold mb-4">Proud Alumni of Anna University</h2>
            
            <p className="text-muted fs-5">
              Anna University has a rich legacy of producing distinguished alumni who have made remarkable contributions across the globe in engineering, technology, business, and public service. Their success stories reflect the strong foundation and academic rigor the university provides.
            </p>

            <p className="text-muted fs-5">
              Our alumni network continues to support the university through mentorship, innovation, and industry collaboration, fostering a strong bridge between academics and the real world.
            </p>

            <p className="fw-semibold mt-4">
              Join our growing alumni community and stay connected with your alma mater.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
