import React, { useState, useEffect } from "react";
import "./FoundersCarousel.css";

const FoundersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const founders = [
    {
      name: "RISHAAN",
      title: "CO-FOUNDER, CEO",
      description:
        "Entrepreneur, UCSD Instructor, Industry Speaker, Bestselling Author, Influencer and World Renown Digital Strategist",
      details:
        'As CEO of Ignite Visibility, John is one of the world\'s most sought-after digital marketing strategists, a frequent industry speaker and former Search Engine Land "Search Marketer of the Year."',
      moreDetails:
        "With 20+ years of demanding industry experience, John has worked with 1,000+ online businesses, including amazing clients such as Tony Robbins, Morgan Stanley, Fox, Game Spot, New Egg, Tacori, Jacuzzi, Office Depot, USA Today, Sharp Healthcare and WeddingWire.",
      image: "/public/founder.jpg",
    },
    {
      name: "SARAH",
      title: "CO-FOUNDER, CTO",
      description:
        "Tech Visionary, Former Google Engineer, AI Specialist, Innovation Leader and Strategic Technology Consultant",
      details:
        "As CTO of our company, Sarah leads our technical vision and has been instrumental in developing cutting-edge solutions that have transformed how businesses approach digital transformation.",
      moreDetails:
        "With 15+ years in tech leadership, Sarah has worked with Fortune 500 companies and startups alike, specializing in AI, machine learning, and scalable architecture solutions.",
      image: "https://via.placeholder.com/320x500/444/fff?text=SARAH",
    },
    {
      name: "MICHAEL",
      title: "CO-FOUNDER, CMO",
      description:
        "Marketing Strategist, Brand Builder, Growth Hacker, Creative Director and Digital Marketing Expert",
      details:
        "Michael brings creative vision and strategic marketing expertise, having built brands from the ground up and scaled marketing operations for companies across various industries.",
      moreDetails:
        "His innovative approach to brand storytelling and customer acquisition has helped numerous companies achieve exponential growth and market leadership positions.",
      image: "https://via.placeholder.com/320x500/555/fff?text=MICHAEL",
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
      <polyline points="15,18 9,12 15,6"></polyline>
    </svg>
  );

  const ArrowRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
      <polyline points="9,6 15,12 9,18"></polyline>
    </svg>
  );

  return (
    <div className="founders-section">
      {/* Background Shapes */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>
      <div className="bg-shape shape3"></div>
      <div className="bg-shape shape4"></div>

      {/* Header */}
      <div className="header">
        <p className="subtitle">INDUSTRY EXPERT LEADERSHIP</p>
        <h1 className="title">MEET OUR FOUNDERS</h1>
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        <div className="carousel-content">
          <div className="founder-image">
            <img src={founders[currentSlide].image} alt={founders[currentSlide].name} />
          </div>
          <div className="founder-content">
            <h2 className="founder-name">{founders[currentSlide].name}</h2>
            <p className="founder-title">{founders[currentSlide].title}</p>
            <p className="founder-description">{founders[currentSlide].description}</p>
            <p className="founder-details">{founders[currentSlide].details}</p>
            <p className="founder-more-details">{founders[currentSlide].moreDetails}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow nav-arrow-prev" onClick={prevSlide}>
          <ArrowLeft />
        </button>
        <button className="nav-arrow nav-arrow-next" onClick={nextSlide}>
          <ArrowRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="dots-container">
        {founders.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FoundersCarousel;
