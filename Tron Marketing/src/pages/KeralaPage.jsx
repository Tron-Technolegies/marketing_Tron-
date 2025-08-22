import React, { useEffect } from "react";
import NavbarinPage from "../components/NavbarinPages/NavbarinPage";
import UaeHero from "../components/UaePage/UaeHero/UaeHero";
import UaeAboutUs from "../components/UaePage/UaeAboutUs/Uae-AboutUs";
import UaeWhyChooseUs from "../components/UaePage/UaeWhychooseUs/UaeWhyChooseUs";
import ExpertiseSection from "../components/Expertise section/ExpertiseSection";
import UaeDigitalMarketingSection from "../components/UaePage/UaeDigitalMarketingSection/UaeDigitalMarketingSection";
import UaeDmFaq from "../components/UaePage/UaeDmFaq/UaeDmFaq";
import UaeTestimonial from "../components/UaePage/UaeTestimonial/UaeTestimonial";
import ContactForminPage from "../components/UaePage/Contact Form in Page/ContactForminPage";

const KeralaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavbarinPage />
      <UaeHero />
      <UaeAboutUs />
      <UaeWhyChooseUs />
      <ExpertiseSection />
      <UaeDigitalMarketingSection />
      <UaeDmFaq />
      <UaeTestimonial />
      <ContactForminPage />
    </div>
  );
};

export default KeralaPage;
