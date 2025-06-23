
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-[80px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-brand-yellow/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image - Hidden on mobile */}
          <div className="hidden md:flex justify-start md:justify-start">
            {/* MALSHI'S ABOUT IMAGE */}
            <div className="relative">
              <div className="w-72 h-80 rounded-xl overflow-hidden border border-brand-yellow shadow-[0_0_25px_rgba(255,215,0,0.3)]">
                <img src="/lovable-uploads/d6e96e97-f894-4995-9509-9194140e94f9.png" alt="Malshi Hansana" className="w-full h-full object-cover" />
              </div>

              {/* Floating Logos in Circle */}
              <div className="floating-icons-container absolute inset-0 w-full h-full">
                {/* Figma logo - Top - Updated with new image */}
                <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black/80 rounded-full p-2 animate-float shadow-lg">
                  <img src="/lovable-uploads/2ad9f6fc-6ba0-4d66-b07b-5ab11e530fc1.png" alt="Figma" className="w-full h-full object-contain" />
                </div>
                
                {/* WordPress logo - Top Right */}
                <div className="absolute top-[15%] right-[-25px] w-14 h-14 bg-black/80 rounded-full p-2 animate-float shadow-lg" style={{
                animationDelay: "0.5s"
              }}>
                  <img src="https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg" alt="WordPress" className="w-full h-full object-contain" />
                </div>
                
                {/* LinkedIn logo - Bottom Right */}
                <div className="absolute bottom-[15%] right-[-25px] w-10 h-10 bg-black/80 rounded-full p-2 animate-float shadow-lg" style={{
                animationDelay: "1s"
              }}>
                  <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn" className="w-full h-full object-contain" />
                </div>
                
                {/* HTML/CSS logo - Bottom */}
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black/80 rounded-full p-2 animate-float shadow-lg" style={{
                animationDelay: "1.5s"
              }}>
                  <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML/CSS" className="w-full h-full object-contain" />
                </div>
                
                {/* Canva logo - Top Left - Updated with new image */}
                <div className="absolute top-[15%] left-[-25px] w-11 h-11 bg-black/80 rounded-full p-2 animate-float shadow-lg" style={{
                animationDelay: "2s"
              }}>
                  <img src="/lovable-uploads/b5862b94-d81b-4f9e-a02d-b6ce1ee0f81e.png" alt="Canva" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content - Full width on mobile */}
          <div className="text-left px-2 md:col-span-1 col-span-2">
            <h2 className="text-2xl font-bold mb-3">
              <span className="text-brand-yellow">🔥</span> About Malshi
            </h2>

            <div className="space-y-3 text-gray-200">
              <p className="text-lg">
                Are you tired of boring websites that don't convert or digital marketing that doesn't deliver?
              </p>
              <p>
                If yes, you've landed on the right profile. I help startups, small businesses, and personal brands build a powerful online presence using the perfect mix of:
              </p>
              
              <ul className="ml-5 space-y-1">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">✅</span>
                  <span>Modern web development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">✅</span>
                  <span>Creative design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">✅</span>
                  <span>Smart digital marketing</span>
                </li>
              </ul>
              
              <p>
                I've worked with dozens of brands to turn basic ideas into stunning, high-performing websites — paired with content that actually connects and campaigns that grow fast.
              </p>

              <ul className="ml-5 space-y-1">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">🚀</span>
                  <span>Stronger online visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">🚀</span>
                  <span>Better user engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-2">🚀</span>
                  <span>Real customer engagement</span>
                </li>
              </ul>

              <p className="font-semibold">
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
