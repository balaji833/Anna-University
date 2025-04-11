import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SportsPage from "./Pages/Sports";
import Admissions from "./Pages/Admissions";
import Academics from "./Pages/Academics";
import Contact from "./Pages/Contact";

import LearnMore from "./Pages/LearnMore";
import NewsRoom from "./components/NewsRoom";
import Gallery from "./components/Gallery";
import Notifications from "./components/Notifications";
import Alumni from "./components/Alumni";


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn-more" element={<LearnMore />} />
       <Route path="/NewsRoom" element={<NewsRoom />}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/alumni" element={<Alumni />} />
      
        
      </Routes>
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
