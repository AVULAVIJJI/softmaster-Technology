import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import RegisterModal from "./RegisterModal.js";
import { useNavigate } from "react-router-dom";   // <-- Add this

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();   // <-- Initialize navigation

  // Background images array
  const images = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Floating Request Callback Button */}
      <div className="callback-bton" onClick={() => setShowModal(true)}>
        Request a Call Back
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://whatsapp.com/channel/0029VaynkiWLY6dDqM1uUJ1t"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <img
          src="https://img.icons8.com/color/48/whatsapp.png"
          alt="WhatsApp"
          className="whatsapp-img"
        />
      </a>

      {/* Hero Content */}
      <div className="hero-content">
        <h2 className="hero-subtitle animate-text">Educate. Elevate.Excel with</h2>
        <h1 className="hero-title animate-text">
         Softmaster Technology
        </h1>

        {/* Buttons */}
        <div className="button-group">
          <button
            className="search-btnn"
            onClick={() => navigate("/courses")}   // <-- Navigate here
          >
            Search
          </button>

          <button
            className="enquire-btnn"
            onClick={() => setShowModal(true)}
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default HeroSection;
