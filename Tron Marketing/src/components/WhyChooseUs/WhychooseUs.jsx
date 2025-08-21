import React, { useState } from "react";
import "./WhychooseUs.css";

// Data for the 'Why Choose Us' section
const whyChooseUsData = [
  {
    id: 1,
    title: "Results Driven Marketing",
    description: `Our approach is centered on delivering and tracking tangible results for our clients. We measure success through concrete metrics and are constantly seeking ways to improve and exceed expectations. As your go-to social media advertising agency, we mix creativity with data smarts to make sure your brand not only shines online but actually rocks the charts.`,
  },
  {
    id: 2,
    title: "In-house Production",
    description: `We handle all of our content production in-house, giving us full control over quality and timelines. Our dedicated team of creators, designers, and video editors works together to bring your vision to life, ensuring a cohesive and high-quality brand presence across all platforms.`,
  },
  {
    id: 3,
    title: "Social Focused",
    description: `Our expertise is laser-focused on social media. We live and breathe the latest trends, algorithm changes, and best practices across all major social platforms, allowing us to create campaigns that are not only relevant but also highly effective.`,
  },
  {
    id: 4,
    title: "Idea Factory",
    description: `We're more than just an agency; we're a hub of creativity. Our team is constantly brainstorming innovative ideas and strategies to help your brand stand out in a crowded digital landscape. We love a good challenge and are always ready to push the boundaries.`,
  },
  {
    id: 5,
    title: "One-Stop Shop",
    description: `From strategy and content creation to ad management and analytics, we offer a comprehensive suite of services. You won't need to juggle multiple vendors; we've got you covered with a streamlined process that delivers maximum impact.`,
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
      <div className="title">
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
