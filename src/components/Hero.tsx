
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-16 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 30% 40%, #1E40AF 0%, #000000 70%)",
      }}
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-brand-yellow/20 blur-[80px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-brand-blue/30 blur-[100px]"></div>
      </div>

      <div className="container px-4 mx-auto z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
              <span className="text-white">TURN </span>
              <span className="text-brand-yellow">HEADS.</span>
              <br />
              <span className="text-white">BUILD </span>
              <span className="text-brand-yellow">LEGACY.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-lg">
              Not just a developer — a creative force transforming bold ideas into unforgettable brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Download CV Button */}
              <a href="https://drive.google.com/file/d/1O0sZHZMcy52LWxOM0sjwAN3PbOBTYT8i/view?usp=sharing" className="glow-btn" target="_blank" rel="noopener noreferrer">
                <span>Download CV</span>
              </a>

              {/* Hire Me Button */}
              <a href="https://www.linkedin.com/in/malshi-hansana" className="glow-btn" target="_blank" rel="noopener noreferrer">
                <span>Hire Me</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* MALSHI'S HERO IMAGE */}
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-brand-yellow shadow-[0_0_25px_rgba(255,215,0,0.5)]">
                <img
                  src="/lovable-uploads/d6df25b7-3e50-4827-ad70-43fc4bb88cfa.png"
                  alt="Malshi Hansana"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 -right-4 w-8 h-8 bg-brand-yellow rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-6 w-12 h-12 bg-brand-blue rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
