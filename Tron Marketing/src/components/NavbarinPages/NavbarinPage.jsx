import React, { useState } from "react";
import "./NavbarinPage.css";
import { Link } from "react-router-dom";
import { handleChatClickCustom } from "../../utils/whatsapp";

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
        <Link to={"/"} className="navbarinpage-logo">
          <img src="/logo.png" alt="Tron Marketing" />
        </Link>

        {/* Nav Links */}
        <ul className={`navbarinpage-links ${menuOpen ? "active" : ""}`}>
          <a className="cursor-pointer" onClick={() => handleNavClick("hero")}>
            Home
          </a>
          <a
            className="cursor-pointer"
            onClick={() => handleNavClick("expertise")}
          >
            Services
          </a>
          <a
            className="cursor-pointer"
            onClick={() => handleNavClick("why-choose-us")}
          >
            Who we serve
          </a>
          <a
            className="cursor-pointer"
            onClick={() => handleNavClick("about-us")}
          >
            About us
          </a>
        </ul>

        {/* Contact Button */}
        <button
          className="bg-black text-white p-2 rounded-md cursor-pointer"
          onClick={() =>
            handleChatClickCustom(
              "I would like to know more about tron marketing",
            )
          }
        >
          Contact us
        </button>

        {/* Mobile Menu Toggle */}
        <div
          className="navbarinpage-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}
