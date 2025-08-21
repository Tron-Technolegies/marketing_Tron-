import React from "react";
import "./UaeDigitalMarketingSection.css";

const UaeDigitalMarketingSection = () => {
  const services = [
    {
      id: 1,
      readTime: "5min read",
      title: "How a Digital Marketing Agency Can Boost Your Business",
      description:
        "We are the top digital marketing agency for branding corp. We offer a full range of...",
      color: "blue",
    },
    {
      id: 2,
      readTime: "5min read",
      title: "The Latest Trends and Strategies with a Digital Marketing Agency",
      description:
        "Working with this digital marketing agency has been a true partnership. They have tak...",
      color: "orange",
    },
    {
      id: 3,
      readTime: "5min read",
      title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
      description:
        "What sets this digital marketing agency apart is their commitment to transparency a...",
      color: "purple",
    },
  ];

  return (
    <div className="uae-digital-marketing-section">
      <div className="container">
        {/* Header Section */}
        <div className="header">
          <div className="title">
            <h1>Digital Marketing & SEO ServicesThat Grow Traffic & Increase Revenue</h1>
          </div>

          <div className="description">
            <p>
              We are the top digital marketing agency for branding corp. We offer a full range of
              services to help clients improve their search engine rankings and drive more traffic
              to their websites.
            </p>
            <button className="see-more-btn">See more</button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-top">
                <div className={`color-dot ${service.color}`}></div>
                <span className="read-time">{service.readTime}</span>
              </div>

              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>

              <div className="card-footer">
                <button className="arrow-btn">
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UaeDigitalMarketingSection;
