
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-[#00e5ff] text-black rounded-lg p-3 shadow-lg z-10">
                <div className="text-xs font-semibold">150,000</div>
                <div className="text-xs">Instagram reach</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white text-black rounded-lg p-3 shadow-lg z-10">
                <div className="text-xs font-semibold">72,382 impressions</div>
                <div className="text-xs">Social media impact</div>
              </div>

              {/* Main Image */}
              <div className="w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-[#00e5ff]/30">
                <img src="/lovable-uploads/a9aa913b-9c7e-4d8d-989d-0b10d761142c.png" alt="Malshi Hansana" className="w-full h-full object-cover" />
              </div>

              {/* Floating Tool Icons */}
              <div className="absolute top-8 -right-8 w-12 h-12 bg-[#1e40af] rounded-full flex items-center justify-center shadow-lg animate-float">
                <div className="text-white text-xs font-bold">PS</div>
              </div>
              
              <div className="absolute top-20 -left-8 w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: "0.5s"}}>
                <div className="text-white text-xs font-bold">in</div>
              </div>
              
              <div className="absolute bottom-20 -right-8 w-12 h-12 bg-[#ff3366] rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: "1s"}}>
                <div className="text-white text-xs font-bold">Ai</div>
              </div>
              
              <div className="absolute bottom-8 -left-8 w-12 h-12 bg-[#9333ea] rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: "1.5s"}}>
                <div className="text-white text-xs font-bold">Fi</div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#00e5ff]">About Mahnoor</h2>
            <div className="h-1 w-16 bg-[#00e5ff] mb-6 mx-auto lg:mx-0"></div>

            <div className="space-y-4 text-gray-200">
              <p className="text-lg">
                Are you struggling to land your dream clients?
              </p>
              <p>
                If yes, then congratulations! You've come to the right place. I talk to 10+ business owners every month, helping them turn into either of these categories:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#00e5ff] mr-3">✅</span>
                  <span>Successful business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00e5ff] mr-3">✅</span>
                  <span>Exceptional brands</span>
                </li>
              </ul>
              
              <p>
                Every 2 out of 10 choose the latter with my:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#00e5ff] mr-3">✅</span>
                  <span>Bossy designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00e5ff] mr-3">✅</span>
                  <span>Strategic content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00e5ff] mr-3">✅</span>
                  <span>Kickass social media management.</span>
                </li>
              </ul>
              
              <p>
                In the last 3 years, I've helped over 57 ordinary businesses turn into extraordinary brands that stuck, volumes.
              </p>

              <p className="font-semibold">
                If you're looking for something similar, feel free to send me a DM "BOSS"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
