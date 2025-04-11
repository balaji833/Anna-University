import React from "react";
import { BellIcon } from "lucide-react";

const NotificationPanel = () => {
  const notifications = [
    {
      title: "Exam Schedule Released",
      date: "April 7, 2025",
      link: "#"
    },
    {
      title: "Reopening Date for UG/PG Courses",
      date: "April 10, 2025",
      link: "#"
    },
    {
      title: "Ph.D Admission Notification",
      date: "April 5, 2025",
      link: "#"
    },
    {
      title: "Online Course Registration Deadline Extended",
      date: "April 3, 2025",
      link: "#"
    },
    {
      title: "Hostel Allotment List Published",
      date: "April 2, 2025",
      link: "#"
    },
    {
      title: "Anna University Convocation 2025 - Registrations Open",
      date: "April 1, 2025",
      link: "#"
    },
    {
      title: "Internship Opportunity - NASSCOM AI Program",
      date: "March 30, 2025",
      link: "#"
    },
    {
      title: "Last Date to Pay Semester Fees",
      date: "March 28, 2025",
      link: "#"
    },
    {
      title: "Workshop on Cybersecurity - Register Now!",
      date: "March 25, 2025",
      link: "#"
    },
    {
      title: "NAAC Peer Team Visit Schedule Announced",
      date: "March 20, 2025",
      link: "#"
    }
  ];

  return (
    <section className="bg-white border-top border-bottom py-5 px-3 px-md-5">
      <div className="container">
        <div className="d-flex align-items-center gap-3 mb-4">
          <BellIcon className="text-danger" size={28} />
          <h2 className="h4 fw-bold text-dark mb-0">Notifications</h2>
        </div>
        <ul className="list-unstyled">
          {notifications.map((note, idx) => (
            <li
              key={idx}
              className="d-flex justify-content-between align-items-center border rounded p-3 mb-3 hover-shadow"
              style={{ transition: "0.3s", cursor: "pointer" }}
            >
              <a
                href={note.link}
                className="text-decoration-none text-primary fw-medium"
              >
                {note.title}
              </a>
              <span className="text-muted small">{note.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NotificationPanel;
