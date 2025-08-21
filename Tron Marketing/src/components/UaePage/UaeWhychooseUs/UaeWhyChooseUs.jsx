import React, { useState } from "react";
import "./UaeWhyChooseUs.css";

// UAE-specific data
const uaeWhyChooseUsData = [
  {
    id: 1,
    title: "UAE Results Driven Marketing",
    description: `In the UAE market, our campaigns focus on achieving measurable outcomes tailored for the region. We combine creativity with data insights to ensure your brand stands out and achieves real growth.`,
  },
  {
    id: 2,
    title: "In-house Production Excellence",
    description: `All UAE-based content production is managed in-house, giving us full control over quality, speed, and local relevance.`,
  },
  {
    id: 3,
    title: "Social Media Expertise",
    description: `We stay updated with trends, algorithms, and user preferences across UAE's leading social platforms, delivering highly effective campaigns.`,
  },
  {
    id: 4,
    title: "Creative Innovation Hub",
    description: `We are constantly innovating to produce fresh, engaging ideas that connect with UAE audiences and boost brand visibility.`,
  },
  {
    id: 5,
    title: "One-Stop Marketing Partner",
    description: `From strategy to execution, we provide end-to-end services for UAE businesses, streamlining your marketing journey.`,
  },
];

export default function UaeWhyChooseUs() {
  const [activeItem, setActiveItem] = useState(uaeWhyChooseUsData[0]);

  return (
    <section className="uae-whychooseus-section">
      <img src="/whychooseus-icon.png" alt="Background Icon" className="uae-section-icon" />

      <div className="uae-title">
        <h3>Why Choose Us</h3>
        <p>Your Social Marketing Partner in the UAE</p>
      </div>

      <div className="uae-content-container">
        {/* Left side */}
        <div className="uae-content-Q">
          {uaeWhyChooseUsData.map((item) => (
            <div
              key={item.id}
              className={`uae-question-item ${activeItem.id === item.id ? "uae-active" : ""}`}
              onClick={() => setActiveItem(item)}
            >
              <h4>{item.title}</h4>
              {activeItem.id === item.id && (
                <div className="uae-active-indicator">
                  <div className="uae-arrow"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="uae-content-A">
          <div className="uae-answer-card">
            <h4>{activeItem.title}</h4>
            <p>{activeItem.description}</p>
            <img src="about-bg-img.png" alt="" className="uae-card-bg-img" />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="uae-connect-btn-container">
        <button className="uae-connect-btn">Connect With Us</button>
      </div>
    </section>
  );
}
