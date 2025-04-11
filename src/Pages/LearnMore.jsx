import React from "react";

const LearnMore = () => {
  return (
    <div className="min-vh-100 bg-light text-dark py-5 px-3 px-md-5">
      <h1 className="text-center text-primary fw-bold mb-5">
        Learn More About Anna University
      </h1>

      {/* Overview */}
      <section className="mb-5 bg-white p-4 p-md-5 rounded-4 shadow">
        <h2 className="text-secondary fw-semibold mb-3 fs-4">Overview</h2>
        <p className="fs-5 lh-lg">
          Anna University, situated in Chennai, Tamil Nadu, is a premier technical university
          known for its academic excellence and industry partnerships. Established in 1978, it
          has become a center of excellence in engineering, technology, and applied sciences.
        </p>
      </section>

      {/* History */}
      <section className="mb-5 bg-white p-4 p-md-5 rounded-4 shadow">
        <h2 className="text-secondary fw-semibold mb-3 fs-4">History</h2>
        <p className="fs-5 lh-lg">
          The university was formed by combining four well-known technical institutions in
          Chennai. Over the years, it has expanded to include numerous affiliated colleges
          across Tamil Nadu, significantly contributing to the growth of technical education
          in the state.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="mb-5 bg-white p-4 p-md-5 rounded-4 shadow">
        <h2 className="text-secondary fw-semibold mb-3 fs-4">Vision & Mission</h2>
        <p className="fs-5 lh-lg mb-2">
          <strong>Vision:</strong> To be a globally recognized institution for excellence in
          technical education and research.
        </p>
        <p className="fs-5 lh-lg">
          <strong>Mission:</strong> To provide high-quality education, promote innovation, and
          develop socially responsible professionals.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="bg-white p-4 p-md-5 rounded-4 shadow">
        <h2 className="text-secondary fw-semibold mb-3 fs-4">Key Highlights</h2>
        <ul className="fs-5 lh-lg ps-4">
          <li>500+ affiliated colleges across Tamil Nadu</li>
          <li>Cutting-edge research facilities</li>
          <li>Active industry collaborations and internships</li>
          <li>International academic exchange programs</li>
          <li>Incubation centers and startup support</li>
        </ul>
      </section>
    </div>
  );
};

export default LearnMore;
