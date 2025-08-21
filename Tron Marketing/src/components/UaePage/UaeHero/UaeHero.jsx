import React from "react";
import "./UaeHero.css";
import { IoArrowForward } from "react-icons/io5";

export default function UaeHero() {
  return (
    <section className="uae-hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Stay ahead of the curve with our forward-thinking</h1>
          <p>
            An award-winning SEO agency with disciplines in digital marketing, design, and website
            development. Focused on understanding you.
          </p>

          <button>
            <span>Schedule Call</span>
            <IoArrowForward size={20} />
          </button>

          <div className="trusted-section">
            <p>
              Trusted by the world's <br /> biggest brands
            </p>
            <div className="trusted-logos">
              <img src="/afterpay.png" alt="Brand 1" />
              <img src="/basecamp.png" alt="Brand 2" />
              <img src="/maze.png" alt="Brand 3" />
            </div>
          </div>
        </div>

        <div className="hero-img">
          <img src="/uae-hero-img.png" alt="UAE Hero" />
        </div>
      </div>
    </section>
  );
}
