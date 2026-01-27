import React, { useState } from "react";
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
  {
    icon: <FaChartBar />,
    title: "Search Engine Optimization (SEO)",
    content:
      "Our SEO services are professional and enhance visibility to search and generate steady organic traffic. We are a reputable search engine optimization agency across Abu Dhabi which specializes in optimization techniques, content marketing, and responsible behaviour to achieve the positioning of the brands and reach the appropriate audience.",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Local SEO",
    content:
      "Our local search engine optimization techniques assist companies to be featured highly in the location-specific queries within Abu Dhabi and UAE. We work on Google Business Profiles, local keywords, and citations to make it more visible, attract foot traffic, and enquiries.",
  },
  {
    icon: <FaGoogle />,
    title: "Google Ads/ Performance marketing.",
    content:
      "We handle ROI-based Google Ads campaigns which give us qualified leads and conversions. Our performance marketing model will make sure that all your ad funds are tracked, optimized, and aligned with your business goals.",
  },
  {
    icon: <FaFacebookF />,
    title: "Social Media Management",
    content:
      "Our social media strategies are developed and executed to create brand awareness, engagement and trust. We can help brands reach their audience in the platforms that are most significant to them, through content planning and paid promotions.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Web Design & Development",
    content:
      "We create and build user centric, conversion oriented websites which can aid in your online marketing objectives. Our websites are responsive, fast and search engine friendly.",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Marketing",
    content:
      "The email marketing campaigns enable companies to develop leads, maintain clients, and compel reiteration by means of customized and information-driven communication.",
  },
  {
    icon: <FaBullhorn />,
    title: "Brand Strategy & Design",
    content:
      "We assist companies to create brand equity through effective communication, visual coherence as well as strategic positioning that enables sustainable expansion in competitive markets.",
  },
];

export default function ExpertiseSection() {
  const [selected, setSelected] = useState("");
  return (
    <section className="expertise-section" id="expertise">
      <div className="grid md:grid-cols-2 gap-3 w-full lg:w-1/2 ">
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className={`expertise-card cursor-pointer ${selected === item.title && "md:col-span-2"}`}
            onClick={() => {
              !selected ? setSelected(item.title) : setSelected("");
            }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            {selected === item.title && (
              <p className="text-sm w-fit">{item.content}</p>
            )}
          </div>
        ))}
      </div>

      <div className="expertise-text">
        <h2>Our Digital Marketing Expertise</h2>
        <p>
          Tron Marketing is a digital marketing agency based in Abu Dhabi, a
          performance-based company that provides a full range of digital
          solutions aimed to assist companies in achieving their growth,
          competition, and success online. We use our knowledge of strategy,
          creativity, and data to provide quantifiable outputs in all digital
          channels.
        </p>
      </div>
    </section>
  );
}
