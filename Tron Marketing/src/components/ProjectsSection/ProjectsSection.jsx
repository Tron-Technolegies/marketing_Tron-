import React from "react";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  // Using placeholder images for the projects array
  const projects = [
    {
      image: "/dahab.jpg",
      title: "Dahab Miners",
      content: "SEO, Social Media, Website",
    },
    {
      image: "/handcar.jpg",
      title: "HandCar",
      content: "Ads, Social Media, Website",
    },
    {
      image: "/intermine.jpg",
      title: "Intermine Solutions",
      content: "Ads, Social Media",
    },
    {
      image: "/tikka.jpg",
      title: "Tikka Tonight",
      content: "Social Media, Ads, Website",
    },
    {
      image: "/pizza.jpg",
      title: "Pizza Club",
      content: "Social Media, Website",
    },
    {
      image: "/precious.jpg",
      title: "Precious Stores",
      content: "Ads, Website, Videos",
    },
    {
      image: "/leb.jpg",
      title: "Lebaneese Mill",
      content: "Ads, Website, Videos",
    },
    {
      image: "/collective.jpg",
      title: "Collective Transportations",
      content: " Website",
    },
    {
      image: "/earth.png",
      title: "Earth Craft",
      content: "Ads, Website, Videos",
    },
  ];

  return (
    <section className="projects-section" id="projects">
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
            Results-oriented digital marketing agency Tron Marketing in Abu
            Dhabi is illustrated by our projects, which are about strategic
            thinking, creativity, and quantifiable performance. We guide the
            brands to develop a strong digital voice and reach their audience in
            a manner that is meaningful.
          </p>
          <p>
            Our efforts are planned to create brand awareness, authority, and
            long-term growth through the use of SEO and social media, as well as
            performance marketing. We do not merely come up with campaigns, but
            we provide digital marketing solutions, which are sensible in your
            business.
          </p>
        </div>
      </div>

      {/* Project cards in a responsive grid */}
      <div className="projects-container">
        {projects.map((item, index) => (
          <div
            key={index}
            className="shadow-lg p-3 rounded-lg flex flex-col gap-3 items-center"
          >
            <div className="w-[300px] object-cover">
              <img src={item.image} alt={item.title} />
            </div>
            <h4 className="text-xl font-semibold">{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      {/* <div className="more-details-btn-container">
        <button className="more-details-btn">More Details</button>
      </div> */}
    </section>
  );
}
