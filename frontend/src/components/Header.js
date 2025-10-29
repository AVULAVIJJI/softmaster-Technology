import React, { useState } from "react";
import "./Header.css"; // We'll define CSS for styling

function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <header className="header">
      <div className="logo">
        <h2>Pro Stack <span>Academy</span></h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li onMouseEnter={() => toggleMenu("programs")} onMouseLeave={() => toggleMenu(null)}>
            <a href="#">Programs ▾</a>
            {openMenu === "programs" && (
              <ul className="dropdown">
                <li><a href="#">MERN Fullstack</a></li>
                <li><a href="#">MERN Internship</a></li>
                <li><a href="#">Django</a></li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => toggleMenu("internship")} onMouseLeave={() => toggleMenu(null)}>
            <a href="#">Internship ▾</a>
            {openMenu === "internship" && (
              <ul className="dropdown">
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">Our Partners</a></li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => toggleMenu("placements")} onMouseLeave={() => toggleMenu(null)}>
            <a href="#">Placements ▾</a>
            {openMenu === "placements" && (
              <ul className="dropdown">
                <li><a href="#">Student Projects</a></li>
                <li><a href="#">Live Projects</a></li>
              </ul>
            )}
          </li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
