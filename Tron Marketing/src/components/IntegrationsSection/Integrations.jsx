import React from "react";

export default function Integrations() {
  return (
    <div className="flex justify-center items-center py-10">
           {" "}
      <div className="relative w-full max-w-7xl">
                 
        <img
          src="/SM-list.png"
          alt="Integrations"
          className="w-full h-auto mx-auto object-cover"
          style={{ minHeight: "00px" }}
        />
               {" "}
        <div className="absolute top-16 inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-0">
          <h3 className="text-red-400 text-xs sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
            INTEGRATIONS
          </h3>
          <h2 className="text-black text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            Will it work with my other tools?
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl leading-relaxed px-2">
            Referral programs, push notifications, social sharing, payment gateways, A/B testing,
            desktop editors, mobile apps, comments, notifications. Yes.
          </p>
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
}
