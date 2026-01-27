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
      <Hero />
      {/* <Brand /> */}
      <AboutUs />
      <WeWork />
      <FoundersCarousel />
      <CoreValues />
      <ExpertiseSection />
      <Integrations />
      <WhychooseUs />
      <ProjectsSection />
      <ClientReview />
      <BlogsSection />
      <FaqSection />
      <ContactForm />
    </div>
  );
}
