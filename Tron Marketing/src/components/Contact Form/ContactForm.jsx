import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-title">
        <h3>Get in contact & Get your free proposal</h3>
        <p>Submit and receive a custom strategy to grow your business.</p>
      </div>
      <div className="contact-form">
        <div className="name-container">
          <div className="first-name">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" />
          </div>
          <div className="last-name">
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="mobile">
          <label htmlFor="mobile">Mobile</label>
          <input type="tel" id="mobile" />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="7"></textarea>
        </div>
        <div className="submit-button">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </section>
  );
}
