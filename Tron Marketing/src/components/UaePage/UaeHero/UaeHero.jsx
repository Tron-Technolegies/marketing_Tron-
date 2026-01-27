import React from "react";
import "./UaeHero.css";
import { IoArrowForward } from "react-icons/io5";
import { handleChatClickCustom } from "../../../utils/whatsapp";

export default function UaeHero() {
  return (
    <section className="uae-hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Where Your Brand Grows, Tron Leads the Way — The Digital Marketing
            Agency in Kerala
          </h1>
          <p>
            At Tron, every brand has a story — and we turn that story into
            success. As a leading digital marketing agency in Kerala, we combine
            creativity, data, and strategy to help your business grow online and
            beyond. From web design and SEO to social media and performance
            campaigns, our goal is simple — to make your brand unforgettable.
            Because when your brand shines, we win together.
          </p>

          <button
            onClick={() =>
              handleChatClickCustom(
                "I like to schedule a call with Tron Marketing",
              )
            }
          >
            <span>Schedule Call</span>
            <IoArrowForward size={20} />
          </button>

          <div className="trusted-section">
            <p>
              Trusted by the world's <br /> biggest brands
            </p>
            {/* <div className="trusted-logos">
              <img src="/afterpay.png" alt="Brand 1" />
              <img src="/basecamp.png" alt="Brand 2" />
              <img src="/maze.png" alt="Brand 3" />
            </div> */}
          </div>
        </div>

        <div className="hero-img">
          <img src="/uae-hero-img.png" alt="UAE Hero" />
        </div>
      </div>
    </section>
  );
}
