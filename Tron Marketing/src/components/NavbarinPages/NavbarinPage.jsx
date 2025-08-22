import React, { useState } from "react";
import "./NavbarinPage.css";

export default function NavbarinPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbarinpage">
      <div className="navbarinpage-container">
        {/* Logo */}
        <div className="navbarinpage-logo" onClick={() => handleNavClick("hero")}>
          <img src="/logo.png" alt="Tron Marketing" />
        </div>

        {/* Nav Links */}
        <ul className={`navbarinpage-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => handleNavClick("hero")}>Home</li>
          <li onClick={() => handleNavClick("expertise")}>Services</li>
          <li onClick={() => handleNavClick("why-choose-us")}>Who we serve</li>
          <li onClick={() => handleNavClick("about-us")}>About us</li>
        </ul>

        {/* Contact Button */}
        <div className="navbarinpage-contact" onClick={() => handleNavClick("contact")}>
          Contact us
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbarinpage-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
