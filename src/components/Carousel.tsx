
import React from "react";

const Carousel = () => {
  return (
    <section className="bg-brand-blue/50 overflow-hidden py-[18px] -mt-[10px] px-0 rounded-sm">
      <div className="marquee-container relative whitespace-nowrap">
        <div className="flex animate-marquee">
          {/* Duplicate the content to create seamless looping */}
          {Array(2).fill(0).map((_, index) => (
            <div key={index} className="flex items-center gap-4 mx-4">
              <span className="text-white">❄</span>
              <span className="text-brand-yellow text-xl font-semibold">Web Development</span>
              <span className="text-white">❄</span>
              <span className="text-brand-yellow text-xl font-semibold">UI/UX Designs</span>
              <span className="text-white">❄</span>
              <span className="text-brand-yellow text-xl font-semibold">Graphic Design</span>
              <span className="text-white">❄</span>
              <span className="text-brand-yellow text-xl font-semibold">Social Media Marketing</span>
              <span className="text-white">❄</span>
              <span className="text-brand-yellow text-xl font-semibold">SEO</span>
              <span className="text-white">❄</span>
              <span className="text-brand-yellow text-xl font-semibold">Performance Marketing</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
