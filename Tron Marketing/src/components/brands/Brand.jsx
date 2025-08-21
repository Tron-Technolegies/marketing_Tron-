import React from "react";

export default function Brand() {
  return (
    <section className="flex flex-wrap justify-center gap-10 py-5  bg-white">
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className="brand-logo  w-32 flex justify-center">
          <img
            src={`/brand-${num}.png`}
            alt={`Brand ${num}`}
            className="object-contain h-16 md:h-20"
          />
        </div>
      ))}
    </section>
  );
}
