import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
    <>
      {/* ✅ SEO Meta Setup */}
      <Helmet>
        <title>Best Digital Marketing Agency in Abu Dhabi | Tron Digital UAE</title>
        <meta
          name="description"
          content="Tron Digital offers ROI focused digital marketing services in Abu Dhabi including SEO, PPC, branding, and social media marketing for growing businesses in the UAE."
        />
        <meta
          name="keywords"
          content="digital marketing agency in Abu Dhabi, SEO company UAE, performance marketing Abu Dhabi, branding agency Abu Dhabi"
        />
        <meta
          property="og:title"
          content="Best Digital Marketing Agency in Abu Dhabi | Tron Digital UAE"
        />
        <meta
          property="og:description"
          content="Tron Digital offers ROI focused digital marketing services in Abu Dhabi including SEO, PPC, branding, and social media marketing for growing businesses in the UAE."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/tron-digital-thumbnail.png" />
      </Helmet>

      {/* ✅ Page Sections */}
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
    </>
  );
}
