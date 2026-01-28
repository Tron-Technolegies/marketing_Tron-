import React from "react";
import "./UaeDigitalMarketingSection.css";
import { Link } from "react-router-dom";
import { blogs } from "../../../utils/blogs";

const UaeDigitalMarketingSection = () => {
  function limitHTML(html, maxLength) {
    const div = document.createElement("div");
    div.innerHTML = html;

    const text = div.textContent || div.innerText || "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div className="uae-digital-marketing-section">
      <div className="container">
        {/* Header Section */}
        <div className="header">
          <div className="title">
            <h1>
              Digital Marketing & SEO ServicesThat Grow Traffic & Increase
              Revenue
            </h1>
          </div>

          <div className="description">
            <p>
              We are the top digital marketing agency for branding corp. We
              offer a full range of services to help clients improve their
              search engine rankings and drive more traffic to their websites.
            </p>
            <Link to={"/blogs"} className="see-more-btn">
              See more
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {blogs.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-top">
                <div className={`color-dot blue`}></div>
                <span className="read-time">{"5 min read"}</span>
              </div>

              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <div
                  className="card-description"
                  dangerouslySetInnerHTML={{
                    __html: limitHTML(service.content, 150),
                  }}
                ></div>
              </div>

              <div className="card-footer">
                <Link to={`/blogs/${service.id}`} className="arrow-btn">
                  <svg
                    className="arrow-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UaeDigitalMarketingSection;
