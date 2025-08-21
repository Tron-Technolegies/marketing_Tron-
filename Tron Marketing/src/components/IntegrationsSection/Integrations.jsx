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
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                   {" "}
          <h3 className="text-red-400 text-base sm:text-lg md:text-xl font-bold mb-4">
                        INTEGRATIONS          {" "}
          </h3>{" "}
          <h2 className="text-black text-xl sm:text-3xl md:text-5xl font-bold mb-6">
                        Will it work with my other tools?{" "}
          </h2>
                   {" "}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl">
                        Referral programs, push notifications, social sharing, payment gateways, A/B
            testing,             desktop editors, mobile apps, comments, notifications. Yes.        
             {" "}
          </p>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
}
