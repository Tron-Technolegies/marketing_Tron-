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
            <h2 className="about-title">How Tron Marketing Started?</h2>

            <div className="about-description">
              <p>
                In 2020, two passionate marketers came together with a shared vision — to build a
                digital marketing agency that truly puts clients first.
              </p>

              <p>
                Frustrated by the industry's overuse of buzzwords and under-delivery of results,
                they saw a clear gap in the market: businesses were spending more but gaining less,
                and many were stuck with generic strategies that didn't align with their goals. With
                a strong foundation in strategy, branding, and performance marketing, the duo
                decided to change the game.
              </p>

              <p>
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
              </p>
            </div>

            <button className="know-more-btn">Know more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
