import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>Digital Marketing Agency in Thrissur | Tron Digital Kerala</title>
        <meta
          name="description"
          content="Boost your brand’s online visibility with Tron Digital Thrissur’s trusted digital marketing agency offering SEO, social media, web design, and performance marketing services."
        />
        <meta
          name="keywords"
          content="digital marketing agency in Thrissur, SEO company in Thrissur, social media marketing Thrissur, branding agency Kerala"
        />
        <meta
          property="og:title"
          content="Digital Marketing Agency in Thrissur | Tron Digital Kerala"
        />
        <meta
          property="og:description"
          content="Boost your brand’s online visibility with Tron Digital Thrissur’s trusted digital marketing agency offering SEO, social media, web design, and performance marketing services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/tron-digital-thumbnail.png" />
      </Helmet>

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
    </>
  );
};

export default KeralaPage;
