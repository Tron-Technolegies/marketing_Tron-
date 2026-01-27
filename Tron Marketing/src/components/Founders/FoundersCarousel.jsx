import React, { useState, useEffect } from "react";
import "./FoundersCarousel.css";

const FoundersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const founders = [
    {
      name: "RISHAAN",
      title: "CO-FOUNDER, CEO",
      description: "Entrepreneur, Digital Strategist",
      details:
        "Rishan is an entrepreneur and digital marketing strategist with a strong vision for building scalable, technology-driven businesses. As the CEO of the company, he leads with a focus on innovation, performance, and long-term growth. With deep expertise in digital marketing and business development, Rishan has helped shape the company into a results-oriented technology partner for modern businesses.",
      moreDetails:
        "Under his leadership, the company continues to deliver high-impact digital solutions that combine strategy, design, and engineering.",
      image: "/rishan.jpg",
    },
    {
      name: "RIZWAN KAMARUDHEEN",
      title: "CO-FOUNDER, MD",
      description: "Tech Visionary, Innovation Leader ",
      details:
        "Born and raised in the UAE, Rizwan has been active in the Bitcoin and crypto mining industry since 2020. With hands-on experience in mining operations, power strategy, and infrastructure, he has built streamlined solutions tailored to the UAE and emerging markets. Alongside his technical background, Rizwan serves as the Managing Director of Tron Marketing, where he leads strategic growth initiatives, digital transformation projects, and performance-driven marketing solutions for businesses across the region.",
      moreDetails:
        "Prior to Tron Marketing, he held leadership roles at firms including GreenGate and Tron Digital, contributing to energy-focused projects that shaped his expertise in operational efficiency and sustainable growth.",
      image: "/rizwan.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % founders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [founders.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % founders.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + founders.length) % founders.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const ArrowLeft = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#666"
      strokeWidth="2"
    >
      <polyline points="15,18 9,12 15,6"></polyline>
    </svg>
  );

  const ArrowRight = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#666"
      strokeWidth="2"
    >
      <polyline points="9,6 15,12 9,18"></polyline>
    </svg>
  );

  return (
    <div className="founders-section" id="founders">
      {/* Background Shapes */}
      <div className="founders-bg-shape founders-shape1"></div>
      <div className="founders-bg-shape founders-shape2"></div>
      <div className="founders-bg-shape founders-shape3"></div>
      <div className="founders-bg-shape founders-shape4"></div>

      {/* Header */}
      <div className="founders-header">
        <p className="founders-subtitle">INDUSTRY EXPERT LEADERSHIP</p>
        <h1 className="founders-title">MEET OUR FOUNDERS</h1>
      </div>

      {/* Carousel */}
      <div className="founders-carousel-container">
        <div className="founders-carousel-content">
          <div className="founders-image">
            <img
              className="object-cover object-top h-full"
              src={founders[currentSlide].image}
              alt={founders[currentSlide].name}
            />
          </div>
          <div className="founders-content">
            <h2 className="founders-name">{founders[currentSlide].name}</h2>
            <p className="founders-role">{founders[currentSlide].title}</p>
            <p className="founders-description">
              {founders[currentSlide].description}
            </p>
            <p className="founders-details">{founders[currentSlide].details}</p>
            <p className="founders-more-details">
              {founders[currentSlide].moreDetails}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="founders-nav-arrow founders-nav-prev"
          onClick={prevSlide}
        >
          <ArrowLeft />
        </button>
        <button
          className="founders-nav-arrow founders-nav-next"
          onClick={nextSlide}
        >
          <ArrowRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="founders-dots">
        {founders.map((_, index) => (
          <div
            key={index}
            className={`founders-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FoundersCarousel;
