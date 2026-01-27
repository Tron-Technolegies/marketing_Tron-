import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { CiMail, CiLocationOn } from "react-icons/ci"; // Using CiMail and CiLocationOn for consistency
import { TbPhoneCall } from "react-icons/tb";
import "./FooterSection.css";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="/logo.png" alt="Tron Marketing" className="footer-logo" />
          <p className="contact-item">
            <CiMail className="contact-icon" />
            <a href="mailto:rizwan@trondigital.ae">rizwan@trondigital.ae</a>
          </p>
          <p className="contact-item">
            <CiLocationOn className="contact-icon" />
            <span>Plaza 30, Unit 2B-SF - Delma St - Abu Dhabi</span>
          </p>
          <p className="contact-item">
            <TbPhoneCall className="contact-icon" />
            <a href="tel:+919744866003">+91 9744866003</a>
          </p>
          <p className="contact-item phone-break">
            {" "}
            <a href="tel:+971568145866">+971 56 814 5866</a>
          </p>
        </div>

        <div className="footer-middle">
          <p className="location-title">Location we serve</p>
          <div className="location-btns">
            <Link to="/kerala" className="location-btn">
              Kerala ↗
            </Link>
            <Link to="/uae" className="location-btn">
              UAE ↗
            </Link>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <div className="footer-links-column">
              <a href="/services">Services</a>
              <a href="/who-we-serve">Who we serve</a>
              <a href="/case-studies">Case studies</a>
              <a href="/about-us">About us</a>
              <a href="/blog">Blog</a>
            </div>
            {/* <div className="footer-links-column">
              <a href="/terms">Terms of Service</a>
              <a href="/privacy">Privacy Policy</a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <div className="subscribe">
          <p className="subscribe-title">
            Subscribe to get tips and tactics
            <br />
            to grow the way you want.
          </p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">→</button>
          </form>
        </div> */}
        <div className="social-icons">
          <a
            target="_blank"
            href="https://www.instagram.com/trondigital_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/tronsocial">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
