import React, { useState } from "react";
import "./FaqSection.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = {
  "User Accounts": [
    {
      question: "What plans are available, and what do they include?",
      answer:
        "We offer Basic, Pro, and Business plans. Each includes varying levels of content access, AI tools, analytics, and campaign features.",
    },
    {
      question: "Can I switch between plans at any time?",
      answer:
        "Yes, you can easily upgrade or downgrade your plan at any time from your account settings.",
    },
    {
      question: "Is there a free trial or demo available?",
      answer:
        "Yes, we offer a 14-day free trial that gives you full access to all Pro features. No credit card is required to start.",
    },
    {
      question: "Are there any discounts for students or teams?",
      answer:
        "Yes, we offer special pricing for students and teams. Please contact our sales team for more information.",
    },
    {
      question: "How do I know which plan is right for me?",
      answer:
        "Our plans are designed to fit different needs. The Basic plan is great for individuals, Pro for small teams, and Business for larger enterprises. You can also contact our support team for a personalized recommendation.",
    },
    {
      question: "Do all plans include campaign and analytics tools?",
      answer:
        "Campaign and analytics tools are included in our Pro and Business plans. The Basic plan provides essential features but does not include these advanced tools.",
    },
  ],
  "Plans & Features": [
    {
      question: "What features are included in the premium plan?",
      answer:
        "Our premium plan includes advanced AI content generation, real-time analytics, unlimited campaigns, and dedicated customer support.",
    },
    {
      question: "How do I get started?",
      answer:
        "To get started, simply sign up for an account and choose a plan. Our onboarding guide will walk you through the process.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all new subscriptions. If you are not satisfied, you can request a full refund.",
    },
  ],
  Campaigns: [
    {
      question: "How do I create a new campaign?",
      answer:
        "You can create a new campaign from your dashboard by clicking on the 'New Campaign' button and following the guided steps.",
    },
    {
      question: "Can I schedule my campaigns?",
      answer:
        "Yes, our platform allows you to schedule campaigns to be published at a specific date and time.",
    },
  ],
  Payments: [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, including Visa, Mastercard, and American Express. We also support PayPal.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, all payment information is encrypted and processed securely using industry-standard protocols. We do not store your credit card details on our servers.",
    },
  ],
};

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button className="faq-question-btn" onClick={onClick}>
        <span>{question}</span>
        <span className="faq-icon">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>
      {isOpen && (
        <div className="faq-answer-container">
          <p className="faq-answer">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState("User Accounts");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null); // Close all accordions when a new tab is selected
  };

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tabs = Object.keys(faqData);
  const currentFaqs = faqData[activeTab];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          We’re here to help with any questions you have about plans, and
          supported features.
        </p>
      </div>
      <div className="faq-content-wrapper">
        <div className="faq-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`faq-tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="faq-list">
          {currentFaqs.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
