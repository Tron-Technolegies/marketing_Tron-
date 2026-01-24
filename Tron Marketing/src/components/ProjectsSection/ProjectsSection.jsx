import React from "react";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  // Using placeholder images for the projects array
  const projects = [
    {
      image: "https://placehold.co/400x400/cccccc/333333?text=Project+1",
      title: "Project 1",
      content: "UI, Art Direction",
    },
    {
      image: "https://placehold.co/400x400/cccccc/333333?text=Project+2",
      title: "Project 2",
      content: "UI, Art Direction",
    },
    {
      image: "https://placehold.co/400x400/cccccc/333333?text=Project+3",
      title: "Project 3",
      content: "UI, Art Direction",
    },
    {
      image: "https://placehold.co/400x400/cccccc/333333?text=Project+4",
      title: "Project 4",
      content: "UI, Art Direction",
    },
    {
      image: "https://placehold.co/400x400/cccccc/333333?text=Project+5",
      title: "Project 5",
      content: "UI, Art Direction",
    },
    {
      image: "https://placehold.co/400x400/cccccc/333333?text=Project+6",
      title: "Project 6",
      content: "UI, Art Direction",
    },
  ];

  return (
    <section className="projects-section">
      {/* Background icons with placeholder images */}
      <div className="bg-icon-1">
        <img src="/bg-icon-1.png" alt="Background Icon" />
      </div>
      <div className="bg-icon-2">
        <img src="/bg-icon-cube.png" alt="Background Cube Icon" />
      </div>

      <div className="projects-header">
        <div className="project-title">
          <h3>Our Projects</h3>
          <p>
            Our social media agency helps you define your brand voice and give it that special tone
            so it stands out, but not by saying what you want to say louder. Our expertise helps you
            speak to your audience with authority, elevating brand awareness. We don’t just make
            noise; we make sense of your brand.
          </p>
        </div>
      </div>

      {/* Project cards in a responsive grid */}
      <div className="projects-container">
        {projects.map((item, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      <div className="more-details-btn-container">
        <button className="more-details-btn">More Details</button>
      </div>
    </section>
  );
}
