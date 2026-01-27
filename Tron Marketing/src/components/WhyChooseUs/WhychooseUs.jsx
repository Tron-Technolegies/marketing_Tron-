import React, { useState } from "react";
import "./WhyChooseUs.css";
import { handleChatClickCustom } from "../../utils/whatsapp";

const whyChooseUsData = [
  {
    id: 1,
    title: "Data-Driven Marketing",
    description: `All of our decisions are informed by data and actual performance details. SEO is one of the strategies that we consider to achieve a steady and sustainable business development, and paid campaigns are just one of the tools`,
  },
  {
    id: 2,
    title: "End-to-End Solutions",
    description: `Our digital advertising offerings in Abu Dhabi are absolutely comprehensive, protecting method, execution, optimization, and reporting. This makes every one of your digital endeavors streamline in the direction of achievable business objectives.`,
  },
  {
    id: 3,
    title: "Creative Excellence",
    description: `We are a creative, strategic team that would design campaigns that can connect with your audience and develop your brand with online platforms.`,
  },
  {
    id: 4,
    title: "Proven Track Record",
    description: `We are a reliable Abu Dhabi-based digital marketing firm that has assisted companies in the UAE to expand, attain quality leads, and attain quantifiable outcomes.  `,
  },
];

export default function WhychooseUs() {
  // State to manage the active item. Initialized to the first item.
  const [activeItem, setActiveItem] = useState(whyChooseUsData[0]);

  return (
    <section className="whychooseus-section" id="why-choose-us">
      {/* Background geometric icon */}
      <img
        src="/whychooseus-icon.png"
        alt="Background Icon"
        className="section-icon"
      />

      {/* Title section */}
      <div className="whychooseus-title">
        <h3>Why Choose Us</h3>
        <p className="text-lg">MORE THAN JUST A SOCIAL MEDIA AGENCY</p>
        <p className="text-sm max-w-2xl mx-auto mt-2">
          As a results-oriented digital marketing agency in Abu Dhabi, we assist
          the brands in their development with the help of strategy, creativity
          and performance-oriented implementation. This is the advantage of Tron
          Marketing.
        </p>
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
        <button
          className="connect-btn"
          onClick={() =>
            handleChatClickCustom(
              "I would like to connect and work with Tron Marketing",
            )
          }
        >
          Connect Us
        </button>
      </div>
    </section>
  );
}
