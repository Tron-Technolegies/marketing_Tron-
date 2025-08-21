import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Brand from "../components/brands/Brand";
import AboutUs from "../components/About-us/AboutUs";
import WeWork from "../components/About-us/WeWork";
import FoundersCarousel from "../components/Founders/FoundersCarousel";
import CoreValues from "../components/CoreValues/CoreValues";
import ExpertiseSection from "../components/Expertise section/ExpertiseSection";
import Integrations from "../components/IntegrationsSection/Integrations";
import WhychooseUs from "../components/WhyChooseUs/WhychooseUs";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ClientReview from "../components/ClientReview/ClientReview";
import BlogsSection from "../components/BlogSection/BlogsSection";
import FaqSection from "../components/FaqSection/FaqSection";
import ContactForm from "../components/UaePage/Contact Form in Page/ContactForminPage";

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="brand">
        <Brand />
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="we-work">
        <WeWork />
      </section>

      <section id="founders">
        <FoundersCarousel />
      </section>

      <section id="core-values">
        <CoreValues />
      </section>

      <section id="expertise">
        <ExpertiseSection />
      </section>

      <section id="integrations">
        <Integrations />
      </section>

      <section id="why-choose-us">
        <WhychooseUs />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="client-review">
        <ClientReview />
      </section>

      <section id="blogs">
        <BlogsSection />
      </section>

      <section id="faq">
        <FaqSection />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}
