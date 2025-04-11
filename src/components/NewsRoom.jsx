import React from "react";

const newsItems = [
  {
    title: "Anna University Launches New AI Research Center",
    date: "April 5, 2025",
    description: "The university has inaugurated a state-of-the-art AI research center focusing on machine learning and robotics.",
    link: "#",
  },
  {
    title: "Admissions Open for 2025–2026",
    date: "March 20, 2025",
    description: "Online applications are now open for UG, PG, and Ph.D programs for the upcoming academic year.",
    link: "#",
  },
  {
    title: "Convocation 2025 Scheduled for May 15",
    date: "April 2, 2025",
    description: "The annual convocation ceremony will be held at the main auditorium with dignitaries from across the country.",
    link: "#",
  },
  {
    title: "Student Achieves Global Hackathon Win",
    date: "March 18, 2025",
    description: "A final-year CSE student secured 1st place at the Global CodeFest 2025 in Berlin, Germany.",
    link: "#",
  },
  {
    title: "NIRF Ranking 2025 Released",
    date: "April 1, 2025",
    description: "Anna University retains its spot among the Top 10 Engineering Institutions in India.",
    link: "#",
  },
];

const NewsRoom = () => {
  return (
    <div className="container-fluid bg-light py-5 px-3 px-md-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="position-sticky top-0 bg-white border rounded p-3 shadow-sm">
            <h5 className="text-primary fw-bold mb-3">Navigation</h5>
            <ul className="list-unstyled">
              {["News Room", "Admissions", "Academics", "Research", "Events"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-decoration-none d-block py-2 px-2 rounded text-dark fw-medium hover-bg-primary"
                    style={{ transition: "background 0.3s" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* News Cards */}
        <div className="col-md-9">
          <h1 className="display-5 fw-bold text-primary mb-4 border-start border-4 ps-3 border-primary">
            News Room
          </h1>
          <div className="row g-4">
            {newsItems.map((news, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm border-0 transition-transform" style={{ transition: 'transform 0.3s' }}>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary fw-semibold mb-2">{news.title}</h5>
                    <span className="badge bg-secondary mb-2">{news.date}</span>
                    <p className="card-text text-muted flex-grow-1">{news.description}</p>
                    <a href={news.link} className="btn btn-sm btn-outline-primary mt-auto">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover effect for cards */}
      <style>{`
        .card:hover {
          transform: translateY(-5px);
        }
        .hover-bg-primary:hover {
          background-color: #e9f2ff;
        }
      `}</style>
    </div>
  );
};

export default NewsRoom;
