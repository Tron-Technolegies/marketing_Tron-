import React from "react";
import "./About-us.css";

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-header">
          <p className="section-label">About us</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="/about-img.png"
              alt="Modern Building Architecture"
              className="building-image"
            />
          </div>

          <div className="about-text">
            <h2 className="about-title">Where Strategy Meets Creativity</h2>

            <div className="about-description">
              <p>
                Tron Marketing is a full-service digital marketing agency helping brands transform
                their online presence through strategy, creativity, and technology. With a
                passionate team of marketers, designers, and strategists, we deliver measurable
                results that fuel sustainable business growth.
              </p>

              <p>
                Our Mission: To empower businesses of all sizes with innovative marketing strategies
                that build strong digital identities and long-term customer relationships.
              </p>

              {/* <p>
                They didn't just want to offer digital services — they wanted to create meaningful
                growth. Their mission was to build a team that listens closely, crafts tailored
                solutions, and provides full transparency at every step. They envisioned an agency
                where success wasn't measured by numbers on a dashboard, but by the long-term impact
                they made on their businesses.
              </p>

              <p>
                And so, Tron Marketing was born — a digital partner built on trust, creativity, and
                results. From the very beginning, they were committed to helping brands in Kerala
                and the UAE grow smarter, scale faster, and stand out in an increasingly crowded
                digital world.
              </p> */}
            </div>

            <button className="know-more-btn">Know more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
