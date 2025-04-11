import React from "react";
import Header from "../components/Header";
import StatsSection from "../components/StatsSection";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <StatsSection />
    </div>
  );
}

export default Home;
