import React from "react";
import "./About-us.css";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function AboutUs() {
  return (
    <section className="about-section" id="about-us">
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
                Tron Marketing is a performance-based Abu Dhabi-based digital
                marketing agency that assists brands to create a robust and
                stable online presence. We design digital solutions by
                integrating strategy, creativity and data, that are aimed at not
                just inspiring, but also doing.
              </p>
              <p>
                Since we are a reliable digital marketing company in Abu Dhabi,
                we collaborate with companies in the UAE to enhance visibility,
                connect with the appropriate audience, and generate measurable
                growth with the help of SEO, performance marketing, paid
                advertising, and social media.
              </p>
              <span className="font-semibold text-lg">Our Mission</span>
              <p>
                To empower Abu Dhabi and the UAE business with performance-based
                digital marketing plans that enhance brands, reputation, and
                facilitate long-run expansion.
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

            <button
              className="know-more-btn"
              onClick={() =>
                handleChatClickCustom(
                  "I would like to know more about Tron Marketing",
                )
              }
            >
              Know more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
