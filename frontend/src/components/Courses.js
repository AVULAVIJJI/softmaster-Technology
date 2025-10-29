import React, { useRef } from 'react';
import './Courses.css';

const courses = [
  {
    title: 'Selenium/Automation Testing Course',
    duration: '3.5 Months',
    mode: 'Offline / Live Online',
    image: 'https://via.placeholder.com/400x200.png?text=Selenium+Testing',
  },
  {
    title: 'Software Testing Course',
    duration: '5 Months',
    mode: 'Offline / Live Online',
    image: 'https://via.placeholder.com/400x200.png?text=Software+Testing',
  },
  {
    title: 'Tableau Course',
    duration: '1 Month',
    mode: 'Offline / Live Online',
    image: 'https://via.placeholder.com/400x200.png?text=Tableau+Course',
  },
  {
    title: 'Manual Testing Course',
    duration: '2 Months',
    mode: 'Offline / Live Online',
    image: 'https://via.placeholder.com/400x200.png?text=Manual+Testing',
  },
  {
    title: 'API Testing Course',
    duration: '1.5 Months',
    mode: 'Offline / Live Online',
    image: 'https://via.placeholder.com/400x200.png?text=API+Testing',
  },
];

const Courses = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -330, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 330, behavior: 'smooth' });
    }
  };

  return (
    <div className="courses-container">
      <h2 className="title">Top Certification Courses</h2>
      <div className="scroll-buttons">
        <button className="arrow-button" onClick={() => scroll('left')}>&#8592;</button>
        <div className="card-grid-scroll" ref={scrollRef}>
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <h3>{course.title}</h3>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Mode:</strong> {course.mode}</p>
                <button className="know-more-btn">Know More</button>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow-button" onClick={() => scroll('right')}>&#8594;</button>
      </div>
    </div>
  );
};

export default Courses;
