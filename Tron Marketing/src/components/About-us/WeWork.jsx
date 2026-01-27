// import React from "react";

// export default function WeWork() {
//   return (
//     <section className="py-12 bg-white">
//       <div className="flex justify-center items-center">
//         <div className="overflow-hidden max-w-full">
//           <img
//             src="/public/wework-banner.png"
//             alt="We Work Section"
//             className="max-w-full h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function WeWork() {
  return (
    <section
      className=" bg-white flex justify-center items-center "
      id="we-work"
    >
      <div className="relative max-w-[942px] w-full rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src="/public/wework-banner.png"
          alt="We Work Section"
          className="w-full h-auto"
        />

        {/* Overlay Text */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right max-w-[70%] md:max-w-[40%]">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            We Work
          </h2>
          <p className="text-sm md:text-base text-gray-700 mt-2 break-words leading-snug">
            How has our relationship with <br className="block md:hidden" />{" "}
            work changed?
          </p>
          <button
            onClick={() =>
              handleChatClickCustom("I would like to discuss about a project")
            }
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium mt-4 py-2 px-4 rounded"
          >
            Discuss your project
          </button>
        </div>
      </div>
    </section>
  );
}
