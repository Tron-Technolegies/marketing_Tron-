import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./UaeDmFaq.css";
import { handleChatClickCustom } from "../../../utils/whatsapp";

const faqData = [
  {
    id: 1,
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    id: 2,
    question: "How can digital marketing help improve my website’s visibility?",
    answer:
      "Through strategies like SEO, content marketing, and social media promotion, digital marketing improves search rankings and increases online visibility.",
  },
  {
    id: 3,
    question:
      "How long does it take to see results from digital marketing efforts?",
    answer:
      "It depends on the strategy. SEO may take 3-6 months for noticeable changes, while paid ads can generate immediate traffic.",
  },
  {
    id: 4,
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "We measure campaign success using KPIs such as conversions, CTR, website traffic, engagement rates, and ROI.",
  },
];

export default function UaeDmFaq() {
  const [activeId, setActiveId] = useState(1);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="uae-dm-faq-section">
      <div className="uae-dm-faq-container">
        {/* Left side */}
        <div className="uae-dm-faq-content">
          <h3 className="uae-dm-faq-title">Digital Marketing FAQs</h3>
          <p className="uae-dm-faq-description">
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked
            questions to help our clients.
          </p>
          <div className="uae-dm-faq-btn-container">
            <div className="uae-dm-faq-more-qstn-btn">
              <button
                onClick={() =>
                  handleChatClickCustom(
                    "I would like to have more doubts about digital marketing in tron marketing",
                  )
                }
              >
                More Questions
              </button>
            </div>
            <div className="uae-dm-faq-contact-us-btn">
              <button
                onClick={() =>
                  handleChatClickCustom(
                    "I would like to know more about Tron Marketing",
                  )
                }
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Right side - FAQ accordion */}
        <div className="uae-dm-faq-dropdown">
          {faqData.map((faq) => (
            <div key={faq.id} className="uae-dm-faq-item">
              <div
                className="uae-dm-faq-question"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h4>{faq.question}</h4>
                <span className="uae-dm-faq-icon">
                  {activeId === faq.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>
              {activeId === faq.id && (
                <div className="uae-dm-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
