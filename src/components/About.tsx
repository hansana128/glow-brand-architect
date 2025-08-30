
import React from "react";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-brand-blue/20 blur-[60px] sm:blur-[80px]"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-brand-yellow/10 blur-[80px] sm:blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid-responsive-2 items-center">
          {/* Left Column - Image - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex justify-start">
            {/* MALSHI'S ABOUT IMAGE */}
            <div className="relative">
              <div className="w-64 h-72 lg:w-72 lg:h-80 xl:w-80 xl:h-88 rounded-xl overflow-hidden border border-brand-yellow shadow-[0_0_25px_rgba(255,215,0,0.3)]">
                <img src="/lovable-uploads/6acdf247-5028-4e14-bf85-2b8b682f38ed.png" alt="Malshi Hansana" className="w-full h-full object-cover" />
              </div>

              {/* Floating Logos in Circle - Hidden on mobile for performance */}
              <div className="floating-icons-container absolute inset-0 w-full h-full hidden lg:block">
                {/* Figma logo - Top */}
                <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/80 rounded-full p-2 animate-float shadow-lg">
                  <img src="/lovable-uploads/2ad9f6fc-6ba0-4d66-b07b-5ab11e530fc1.png" alt="Figma" className="w-full h-full object-contain" />
                </div>
                
                {/* WordPress logo - Top Right */}
                <div className="absolute top-[15%] right-[-20px] w-12 h-12 lg:w-14 lg:h-14 bg-black/80 rounded-full p-2 animate-float shadow-lg" style={{
                animationDelay: "0.5s"
              }}>
                  <img src="https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg" alt="WordPress" className="w-full h-full object-contain" />
                </div>
                
                {/* LinkedIn logo - Bottom Right */}
                <div className="absolute bottom-[15%] right-[-20px] w-8 h-8 lg:w-10 lg:h-10 bg-black/80 rounded-full p-2 animate-float shadow-lg" style={{
                animationDelay: "1s"
              }}>
                  <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn" className="w-full h-full object-contain" />
                </div>
                
                {/* HTML/CSS logo - Bottom */}
                <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/80 rounded-full p-2 animate-float shadow-lg" style={{
                animationDelay: "1.5s"
              }}>
                  <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML/CSS" className="w-full h-full object-contain" />
                </div>
                
                {/* Canva logo - Top Left */}
                <div className="absolute top-[15%] left-[-20px] w-9 h-9 lg:w-11 lg:h-11 bg-black/80 rounded-full p-2 animate-float shadow-lg" style={{
                animationDelay: "2s"
              }}>
                  <img src="/lovable-uploads/b5862b94-d81b-4f9e-a02d-b6ce1ee0f81e.png" alt="Canva" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="text-center md:text-left">
            <h2 className="section-title mb-3 sm:mb-4">
              <span className="text-brand-yellow">🔥</span> About Malshi
            </h2>

            <div className="space-y-3 sm:space-y-4 text-gray-200">
              <p className="body-text">
                Are you tired of boring websites that don't convert or digital marketing that doesn't deliver?
              </p>
              <p className="text-sm sm:text-base">
                If yes, you've landed on the right profile. I help startups, small businesses, and personal brands build a powerful online presence using the perfect mix of:
              </p>
              
              <ul className="ml-3 sm:ml-5 space-y-1 sm:space-y-2">
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-brand-yellow mr-2">✅</span>
                  <span>Modern web development</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-brand-yellow mr-2">✅</span>
                  <span>Creative design</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-brand-yellow mr-2">✅</span>
                  <span>Smart digital marketing</span>
                </li>
              </ul>
              
              <p className="text-sm sm:text-base">
                I've worked with dozens of brands to turn basic ideas into stunning, high-performing websites — paired with content that actually connects and campaigns that grow fast.
              </p>

              <ul className="ml-3 sm:ml-5 space-y-1 sm:space-y-2">
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-brand-yellow mr-2">🚀</span>
                  <span>Stronger online visibility</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-brand-yellow mr-2">🚀</span>
                  <span>Better user engagement</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-brand-yellow mr-2">🚀</span>
                  <span>Real customer engagement</span>
                </li>
              </ul>

              <p className="font-semibold text-sm sm:text-base">
                Send me a message with the word "LEVEL UP" to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
