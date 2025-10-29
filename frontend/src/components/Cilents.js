import React, { useState } from "react";
import "./Cilents.css";

const Clients = () => {
  const testimonials = [
    {
      name: "Ekta Chouksey",
      title: "Senior Software Engineer",
      feedback: "Great material, concepts explained very well. Very helpful",
      image: "https://via.placeholder.com/100x100.png?text=Ekta",
    },
    {
      name: "Kalpesh Mantri",
      title: "Manager",
      feedback: "Training program was very good. Got detailed insight of the subject. Thank you!",
      image: "https://via.placeholder.com/100x100.png?text=Kalpesh",
    },
    {
      name: "Rahul Verma",
      title: "Data Analyst",
      feedback: "Excellent faculty and well-structured curriculum!",
      image: "https://via.placeholder.com/100x100.png?text=Rahul",
    },
    {
      name: "Richa Kulshrestha",
      title: "Technical Solution Consultant",
      feedback: "The training provided was very helpful, effective and reliable. Interactive session",
      image: "https://via.placeholder.com/100x100.png?text=Richa",
    },
    {
      name: "R. Jeevan Kumar",
      title: "Software Project Manager",
      feedback: "Valuable & Effective, Good insight of the tools & techniques",
      image: "https://via.placeholder.com/100x100.png?text=Jeevan",
    },
    {
      name: "Neha Srivastava",
      title: "Business Analyst",
      feedback: "Loved the hands-on exercises. Made concepts very clear!",
      image: "https://via.placeholder.com/100x100.png?text=Neha",
    },
    {
      name: "Amit Dey",
      title: "DevOps Engineer",
      feedback: "Thorough content and great explanation. 10/10",
      image: "https://via.placeholder.com/100x100.png?text=Amit",
    },
    {
      name: "Priya Mehra",
      title: "UX Designer",
      feedback: "Clear and crisp teaching with practical examples.",
      image: "https://via.placeholder.com/100x100.png?text=Priya",
    },
    {
      name: "Sandeep Rao",
      title: "AI Researcher",
      feedback: "Impressed with the depth of knowledge and examples shared.",
      image: "https://via.placeholder.com/100x100.png?text=Sandeep",
    },
    {
      name: "Tanvi Bhatia",
      title: "QA Engineer",
      feedback: "Good pace and great coverage of testing tools.",
      image: "https://via.placeholder.com/100x100.png?text=Tanvi",
    },
  ];

  // Group testimonials into pairs (2 per slide)
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="clients-section">
      <h2>Our Happy Clients</h2>

      <div className="clients-container">
        {groupedTestimonials[activeIndex].map((client, index) => (
          <div className="client-card" key={index}>
            <div className="client-image">
              <img src={client.image} alt={client.name} />
              <div className="linkedin-badge">in</div>
            </div>
            <p className="client-feedback">{client.feedback}</p>
            <p className="client-name">{client.name}</p>
            <p className="client-title">{client.title}</p>
          </div>
        ))}
      </div>

      <div className="dots">
        {groupedTestimonials.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Clients;
