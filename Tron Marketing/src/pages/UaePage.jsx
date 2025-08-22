import React, { useEffect } from "react";
import UaeHero from "../components/UaePage/UaeHero/UaeHero";
import UaeAboutUs from "../components/UaePage/UaeAboutUs/Uae-AboutUs";
import ExpertiseSection from "../components/Expertise section/ExpertiseSection";
import UaeWhyChooseUs from "../components/UaePage/UaeWhychooseUs/UaeWhyChooseUs";
import UaeDigitalMarketingSection from "../components/UaePage/UaeDigitalMarketingSection/UaeDigitalMarketingSection";
import UaeDmFaq from "../components/UaePage/UaeDmFaq/UaeDmFaq";
import UaeTestimonial from "../components/UaePage/UaeTestimonial/UaeTestimonial";
import ContactForminPage from "../components/UaePage/Contact Form in Page/ContactForminPage";
import NavbarinPage from "../components/NavbarinPages/NavbarinPage";

export default function UaePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavbarinPage />
      <section id="hero">
        <UaeHero />
      </section>
      <section id="about-us">
        <UaeAboutUs />
      </section>
      <section id="why-choose-us">
        <UaeWhyChooseUs />
      </section>
      <section id="expertise">
        <ExpertiseSection />
      </section>
      <section id="digital-marketing">
        <UaeDigitalMarketingSection />
      </section>
      <section id="faq">
        <UaeDmFaq />
      </section>
      <section id="testimonial">
        <UaeTestimonial />
      </section>
      <section id="contact">
        <ContactForminPage />
      </section>
    </div>
  );
}
