import React, { useState } from "react";
import "./Navbar.css";
import "../../assets/fonts/benzGrotesk.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <nav>
      {/* Logo */}
      <div className="logo" onClick={() => scrollToSection("hero")}>
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Hamburger */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <button onClick={() => scrollToSection("brand")}>Services</button>
        <button onClick={() => scrollToSection("projects")}>Case Study</button>
        <button onClick={() => scrollToSection("expertise")}>Who we serve</button>
        <button onClick={() => scrollToSection("about-us")}>About us</button>
        <button onClick={() => scrollToSection("blogs")}>Blog</button>
        <button className="contact-btn mobile-contact" onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </div>

      {/* Desktop Contact Button */}
      <div className="nav-btn">
        <button className="contact-btn" onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
}
