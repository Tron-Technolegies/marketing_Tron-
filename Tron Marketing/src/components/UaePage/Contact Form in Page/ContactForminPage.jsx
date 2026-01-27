import React, { useState } from "react";
import "./ContactForminPage.css";
import { handleEnquiryFormClick } from "../../../utils/whatsapp";

export default function ContactForminPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  return (
    <section className="contact-section" id="contact">
      <div className="contact-page-title">
        <h3>Get in contact & Get your free proposal</h3>
        <p>Submit and receive a custom strategy to grow your business.</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEnquiryFormClick({
            firstName,
            lastName,
            phone,
            email,
            message,
          });
          setFirstName("");
          setemail("");
          setlastName("");
          setphone("");
          setmessage("");
        }}
        className="contact-form"
      >
        <div className="name-container">
          <div className="first-name">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="fname"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="last-name">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="lname"
              required
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mobile">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            id="mobile"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="7"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="cursor-pointer bg-black p-2 rounded-md text-white w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
