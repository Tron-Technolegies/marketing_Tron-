import React from "react";
import "./CoreValues.css";

export default function CoreValues() {
  const letters = ["T", "R", "O", "N"];

  const values = [
    {
      icon: "/transparency.png",
      title: "TRANSPARENCY",
      desc: "Communication at all levels of the process is honest and transparent to us. Being an honest digital marketing agency in Abu Dhabi, we make you aware of the simple tactics, transparent reporting and no secret deals, to know how your campaigns are doing at any given moment.",
    },
    {
      icon: "results.png",
      title: "RESULTS",
      desc: "Everything we do is based on the results. The results that we concentrate on are quantifiable; it could be the increase in organic traffic due to the use of the best SEO, the creation of qualitative leads, or the enhancement of conversions. All the campaigns are created with performance and business prosperity in mind",
    },
    {
      icon: "/ownership.png",
      title: "OWNERSHIP",
      desc: "We assume full responsibility on any project that we are dealing with. Bringing your targets on board is our business and we are well inclined to attain them through careful planning, continuous optimization and results-based digital marketing initiatives.",
    },
    {
      icon: "/nextlevel.png",
      title: "NEXT-LEVEL THINKING",
      desc: "We don’t settle for average. Our group keeps on trying to be smarter and more creative in assisting the brands to expand in competitive markets. Our digital marketing solutions involving the integration of creativity, data and experience are above the normal practices",
    },
  ];

  return (
    <section className="core-values" id="core-values">
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
