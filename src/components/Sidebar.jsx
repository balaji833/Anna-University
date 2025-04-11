import React from "react";
import { Link } from "react-router-dom";
import {
  Newspaper,
  Image,
  Bell,
  Users,
  Link as LinkIcon,
} from "lucide-react";

const links = [
  {
    label: "News Room",
    to: "/NewsRoom",
    color: "bg-danger", // Bootstrap red
    icon: <Newspaper size={18} />,
  },
  {
    label: "Gallery",
    to: "/Gallery",
    color: "bg-primary", // Bootstrap blue
    icon: <Image size={18} />,
  },
  {
    label: "Notifications",
    to: "/Notifications",
    color: "bg-warning text-dark", // Yellow with dark text
    icon: <Bell size={18} />,
  },
  {
    label: "Alumni",
    to: "/Alumni",
    color: "bg-info text-dark", // Light blue with dark text
    icon: <Users size={18} />,
  },

];

const Sidebar = () => {
  return (
    <div
      className="position-fixed"
      style={{
        top: "35%",
        left: 0,
        zIndex: 1050,
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={`d-flex align-items-center px-3 py-2 rounded-end text-white shadow ${link.color} text-decoration-none`}
          style={{
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(8px) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0) scale(1)";
          }}
          aria-label={link.label}
        >
          <span className="me-2">{link.icon}</span>
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
