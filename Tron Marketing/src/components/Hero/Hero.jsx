import React from "react";
import "./Hero.css";
import "../../assets/fonts/benzGrotesk.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content relative">
        <img src="/green-dots.png" alt="green dots" className="absolute -top-6 left-0 h-6" />
        <h1 className="main-title">
          Where your <br />
          <span className="brand-h1">
            <span className="relative inline-block">
              BRAND
              <img
                src="/purple-arrow.png"
                alt="cursor icon"
                className="absolute -bottom-20 left-2 h-24 w-auto"
              />
            </span>
            GRO
            <img src="/O.png" alt="O icon" className="inline-icon-large" />
            WS
          </span>
          <br />
          <span className="tron-h1">
            <span className="tron-text">Tron</span> leads the way
          </span>
        </h1>

        <p className="hero-description">
          <img src="/globe.png" alt="globe icon" className="inline-icon-small" />
          At Tron Marketing, we blend creative thinking with data-backed decisions to help
          businesses grow smarter, not louder. Our campaigns are built to adapt, perform, and
          deliver results where it matters most—your bottom line.
        </p>

        <button className="hero-btn">
          <img src="/start-icon.png" alt="start icon" className="btn-icon" />
          Start here
        </button>
      </div>
    </section>
  );
}
