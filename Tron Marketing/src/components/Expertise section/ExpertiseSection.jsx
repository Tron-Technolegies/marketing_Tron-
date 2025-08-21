import React from "react";
import {
  FaChartBar,
  FaGlobeAmericas,
  FaGoogle,
  FaFacebookF,
  FaPencilRuler,
  FaEnvelope,
  FaBullhorn,
} from "react-icons/fa";
import "./ExpertiseSection.css";

const expertiseItems = [
  { icon: <FaChartBar />, title: "Search Engine Optimization" },
  { icon: <FaGlobeAmericas />, title: "Local SEO" },
  { icon: <FaGoogle />, title: "Google Ads" },
  { icon: <FaFacebookF />, title: "Social Media Management" },
  { icon: <FaPencilRuler />, title: "Web Design & Development" },
  { icon: <FaEnvelope />, title: "Email Marketing" },
  { icon: <FaBullhorn />, title: "Brand Strategy & Design" },
];

export default function ExpertiseSection() {
  return (
    <section className="expertise-section">
      <div className="expertise-grid">
        {expertiseItems.map((item, index) => (
          <div key={index} className="expertise-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="expertise-text">
        <h2>Our Digital Marketing Expertise</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor
          Lorem ipsum dolor sit
        </p>
      </div>
    </section>
  );
}
