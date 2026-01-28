import React from "react";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen py-12 sm:py-16 md:py-8 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/hero-bg.jpg)" }}
    >
      {/* Green dots icon - hidden on mobile */}
      <img
        src="/green-dots.png"
        alt="green dots"
        className="hidden md:block absolute top-4 left-4 md:top-6 md:left-6 h-6 md:h-8 w-auto z-10"
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Main heading section */}
        <div className="text-center mb-8 md:mb-8">
          <h1 className="font-black tracking-tight">
            {/* MOBILE VERSION - Simple clean text */}
            <div className="block md:hidden leading-tight">
              <div className="text-3xl sm:text-4xl mb-3">
                <span className="text-black">Where your</span>
              </div>
              <div className="text-3xl sm:text-4xl mb-4">
                <span className="text-black">BRAND GROWS</span>
              </div>
              <div className="text-2xl sm:text-3xl mt-6">
                <span className="text-blue-400">Tron </span>
                <span className="text-black">leads the way</span>
              </div>
            </div>

            {/* DESKTOP VERSION - Original with icons */}
            <div className="hidden md:block leading-[0.9]">
              {/* Line 1: Where your */}
              <div className="text-5xl md:text-7xl lg:text-8xl mb-2">
                <span className="text-black">Where your</span>
              </div>

              {/* Line 2: BRAND GROWS */}
              <div className="text-5xl md:text-7xl lg:text-8xl mb-2 relative inline-block">
                <div className="flex items-center justify-center flex-wrap gap-1 md:gap-2">
                  <span className="text-black relative inline-block">
                    BRAND
                    {/* Purple arrow below BRAND */}
                    <img
                      src="/purple-arrow.png"
                      alt="arrow"
                      className="absolute -bottom-12 md:-bottom-20 -left-2 md:-left-4 h-16 md:h-24 w-auto z-10"
                    />
                  </span>
                  <span className="text-black">GR</span>
                  {/* Blue circle O with play button */}
                  <span className="relative inline-block">
                    <img
                      src="/O.png"
                      alt="O"
                      className="h-16 md:h-24 lg:h-28 w-auto inline-block"
                    />
                  </span>
                  <span className="text-black">WS</span>
                </div>
              </div>

              {/* Line 3: Tron leads the way */}
              <div className="flex items-end justify-center gap-2 md:gap-4 text-5xl md:text-7xl lg:text-8xl mt-6 md:mt-8">
                <span className="text-blue-400">Tron</span>
                <span className="text-black">leads the</span>
                <span className="text-4xl md:text-6xl lg:text-7xl text-black">
                  way
                </span>
              </div>
            </div>
          </h1>
        </div>

        {/* Description section with globe icon */}
        <div className="flex justify-center mt-10 sm:mt-12 md:mt-16">
          <div className="max-w-2xl w-full">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-6 sm:mb-8 px-2">
              {/* Globe icon - hidden on mobile */}
              <div className="hidden sm:flex flex-shrink-0 rounded-lg p-3 sm:p-4">
                <img
                  src="/globe.png"
                  alt="globe"
                  className="h-14 w-14 sm:h-16 sm:w-16"
                />
              </div>
              <p className="text-sm sm:text-base md:text-base leading-relaxed text-gray-900 sm:pt-2 text-center sm:text-left">
                At Tron Marketing, We assist brands in developing online by
                using performance-based digital marketing approaches and
                strategies aimed at producing actual business outcomes. Being a
                reliable digital marketing company in Abu Dhabi, we focus on
                creating exposure, desirable leads, and enhancing conversions
                through digital platforms.
              </p>
            </div>

            {/* Start here button */}
            <div className="flex justify-center px-2">
              <button
                onClick={() =>
                  handleChatClickCustom(
                    "I like to have a consultation about marketing at Tron Marketing",
                  )
                }
                className="bg-black cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 sm:gap-3 hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg font-medium w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="hidden xs:inline">
                  Get Your Free Consultation
                </span>
                <span className="inline xs:hidden">Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
