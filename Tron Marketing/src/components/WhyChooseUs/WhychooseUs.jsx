import React, { useState } from "react";
import "./WhyChooseUs.css";

const whyChooseUsData = [
  {
    id: 1,
    title: "Data-Driven Marketing",
    description: `Every campaign is backed by analytics and performance insights. We make decisions based on data, not assumptions, ensuring every move we make drives measurable growth.`,
  },
  {
    id: 2,
    title: "End-to-End Solutions",
    description: `From SEO to paid ads and automation, we handle everything under one roof. Our holistic approach ensures all your marketing efforts work seamlessly together.`,
  },
  {
    id: 3,
    title: "Creative Excellence",
    description: `We blend strategy with design to deliver content that converts. Every piece of creative work we produce is made to engage, inspire, and perform.`,
  },
  {
    id: 4,
    title: "Proven Track Record",
    description: `With 250+ successful projects across multiple industries, our results speak for themselves. We’ve built a reputation on delivering success consistently.`,
  },
];

export default function WhychooseUs() {
  // State to manage the active item. Initialized to the first item.
  const [activeItem, setActiveItem] = useState(whyChooseUsData[0]);

  return (
    <section className="whychooseus-section">
      {/* Background geometric icon */}
      <img src="/whychooseus-icon.png" alt="Background Icon" className="section-icon" />

      {/* Title section */}
      <div className="whychooseus-title">
        <h3>Why Choose Us</h3>
        <p>More Than Just A Social Marketing Agency</p>
      </div>

      {/* Main content container */}
      <div className="content-container">
        {/* Left side: Questions/Buttons */}
        <div className="content-whychooseus-Q">
          {whyChooseUsData.map((item) => (
            <div
              key={item.id}
              className={`question-item ${activeItem.id === item.id ? "active" : ""}`}
              onClick={() => setActiveItem(item)}
            >
              <h4>{item.title}</h4>
              {activeItem.id === item.id && (
                <div className="active-indicator">
                  <div className="arrow"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Answers/Details Card */}
        <div className="content-whychooseus-A">
          <div className="answer-card">
            <h4>{activeItem.title}</h4>
            <p>{activeItem.description}</p>
            {/* Static background image for the card */}
            <img src="about-bg-img.png" alt="" className="card-bg-img" />
          </div>
        </div>
      </div>

      {/* Centered button at the bottom */}
      <div className="connect-btn-container">
        <button className="connect-btn">Connect Us</button>
      </div>
    </section>
  );
}
