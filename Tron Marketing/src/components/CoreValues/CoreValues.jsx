import React from "react";
import "./CoreValues.css";

export default function CoreValues() {
  const letters = ["T", "R", "O", "N"];

  const values = [
    {
      icon: "/transparency.png",
      title: "TRANSPARENCY",
      desc: "we believe in clear, honest communication—no hidden agendas, no vague promises. from strategy to reporting, we keep you informed every step of the way.",
    },
    {
      icon: "results.png",
      title: "RESULTS",
      desc: "our focus is always on delivering measurable outcomes. every campaign is crafted to achieve specific goals, whether it’s traffic, leads, or conversions.",
    },
    {
      icon: "/ownership.png",
      title: "OWNERSHIP",
      desc: "we take full responsibility for the success of your project. your goals become our goals, and we’re fully invested in helping you achieve them.",
    },
    {
      icon: "/nextlevel.png",
      title: "NEXT-LEVEL THINKING",
      desc: "we don’t believe in settling for what’s standard—we constantly push boundaries to find smarter, more innovative ways to grow your brand.",
    },
  ];

  return (
    <section className="core-values">
      <h2 className="main-heading">OUR CORE VALUES</h2>
      <p className="subtitle">
        at the core of everything we do… <br />
        our process, service offerings and company culture.
      </p>

      <div className="values-container">
        {/* Row 1: TRON letters */}
        <div className="letters-grid">
          {letters.map((letter, index) => (
            <div key={index} className="letter">
              {letter}
            </div>
          ))}
        </div>

        {/* Row 2: Cards */}
        <div className="boxes-grid">
          {values.map((item, index) => (
            <div className="value-card" key={index}>
              <div className="icon-circle">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
