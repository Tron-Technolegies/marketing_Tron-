import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./UaeTestimonial.css";
import quoteImg from "/quote.png";

const testimonials = [
  {
    id: 1,
    text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaiser",
    role: "CEO of Resource Corp",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    text: "Their strategies have transformed our online presence and driven measurable growth. Professional, creative, and results-oriented.",
    name: "Sofia Martinez",
    role: "Marketing Director, Luxe Interiors",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    text: "An exceptional team that understands our brand vision and turns it into powerful campaigns. Highly recommended.",
    name: "Ahmed Al Farsi",
    role: "Founder, Gulf Ventures",
    img: "https://via.placeholder.com/50",
  },
];

export default function UaeTestimonial() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto scroll every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="uae-testimonial-section">
      <img src={quoteImg} alt="quote" className="uae-testimonial-quote" />
      <div className="uae-testimonial-container">
        <h3 className="uae-testimonial-title">
          What Our Clients
          <br />
          Have To Say
        </h3>
        <p className="uae-testimonial-text">“ {testimonials[current].text} ”</p>

        <div className="uae-testimonial-author">
          <img src={testimonials[current].img} alt={testimonials[current].name} />
          <div>
            <h4>{testimonials[current].name}</h4>
            <span>{testimonials[current].role}</span>
          </div>
        </div>

        <div className="uae-testimonial-controls">
          <button onClick={prevSlide}>
            <AiOutlineLeft />
          </button>
          <span className="uae-testimonial-count">
            {String(current + 1).padStart(2, "0")}/{String(testimonials.length).padStart(2, "0")}
          </span>
          <button onClick={nextSlide} className="uae-next-btn">
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </section>
  );
}
