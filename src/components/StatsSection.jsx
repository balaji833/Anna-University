import React from "react";
import { Banknote, BookOpen, User, GraduationCap } from "lucide-react";

const stats = [
  { title: "Affiliated Colleges", value: 494, icon: <Banknote /> },
  { title: "Constituent Colleges", value: 16, icon: <Banknote /> },
  { title: "UG Programmes", value: 84, icon: <BookOpen /> },
  { title: "PG Programmes", value: 171, icon: <BookOpen /> },
  { title: "UG Subjects", value: 4845, icon: <User /> },
  { title: "PG Subjects", value: 9690, icon: <User /> },
  { title: "Ph.D Enroll in 4 campuses", value: 2261, icon: <GraduationCap /> },
  { title: "Ph.D Enroll in other campuses", value: 13247, icon: <GraduationCap /> },
];

const StatsSection = () => {
  return (
    <div className="bg-white py-5 px-3">
      <div className="container">
        <div className="row g-4 text-center">
          {stats.map((stat, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="card bg-dark text-white border-0 shadow h-100 rounded-4 p-4">
                <div className="mb-2 text-info" style={{ fontSize: "2rem" }}>
                  {stat.icon}
                </div>
                <div className="fs-3 fw-bold text-info">{stat.value.toLocaleString()}</div>
                <div className="text-uppercase small mt-2">{stat.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
