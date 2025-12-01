import React, { useEffect, useRef } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    message: "Softmaster Technology transformed my career! Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Python Developer",
    message: "The internship program is very practical and insightful.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "MERN Stack Developer",
    message: "I learned so much in such a short time. Excellent guidance!",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Sarah Connor",
    role: "DevOps Engineer",
    message: "The trainers are very supportive and knowledgeable.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Kim",
    role: "Cloud Engineer",
    message: "Great hands-on experience. The projects helped me build confidence.",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Emily Clark",
    role: "UI/UX Designer",
    message: "The course structure is perfect for beginners and professionals alike.",
    avatar: "https://randomuser.me/api/portraits/women/85.jpg",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;

    const scrollSpeed = 1; // pixels per tick
    const intervalTime = 20; // ms

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }, intervalTime);

    return () => clearInterval(scrollInterval);
  }, []);

  // Duplicate testimonials for seamless loop
  const loopTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="testimonials-container">
      <h2 className="testimonials-title">What Our Students Say</h2>
      <div className="testimonials-grid" ref={scrollRef}>
        {loopTestimonials.map((testi, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testi.avatar} alt={testi.name} className="testimonial-avatar" />
            <h3 className="testimonial-name">{testi.name}</h3>
            <p className="testimonial-role">{testi.role}</p>
            <p className="testimonial-message">"{testi.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
