import React, { useState } from "react";
import "./Navbar.css";
import "../../assets/fonts/benzGrotesk.css";
import { handleChatClickCustom } from "../../utils/whatsapp";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav>
      {/* Logo */}
      <div className="logo" onClick={() => scrollToSection("hero")}>
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <button
          onClick={() => scrollToSection("expertise")}
          className="cursor-pointer"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer"
        >
          Case Study
        </button>
        <button
          onClick={() => scrollToSection("why-choose-us")}
          className="cursor-pointer"
        >
          Why Choose Us
        </button>
        <button
          onClick={() => scrollToSection("about-us")}
          className="cursor-pointer"
        >
          About us
        </button>
        <button
          onClick={() => scrollToSection("blogs")}
          className="cursor-pointer"
        >
          Blog
        </button>
        <button
          className="contact-btn mobile-contact"
          onClick={() =>
            handleChatClickCustom("I Like to Know more about Tron Marketing")
          }
        >
          Contact
        </button>
      </div>

      {/* Desktop Contact Button */}
      <div className="nav-btn">
        <button
          className="contact-btn"
          onClick={() =>
            handleChatClickCustom("I Like to Know more about Tron Marketing")
          }
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
