
import React, { useEffect, useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const icons = container.querySelectorAll('.floating-icon');
      
      icons.forEach((icon, index) => {
        const iconElement = icon as HTMLElement;
        const speed = (index + 1) * 0.5;
        const xOffset = (x - rect.width / 2) * speed * 0.01;
        const yOffset = (y - rect.height / 2) * speed * 0.01;
        
        iconElement.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <section id="about" className="py-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-[80px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-brand-orange/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image - Moved more to left with increased spacing */}
          <div className="flex justify-start md:justify-start">
            {/* MALSHI'S ABOUT IMAGE */}
            <div className="relative">
              <div className="w-72 h-80 rounded-xl overflow-hidden border border-brand-orange shadow-[0_0_25px_rgba(255,94,58,0.3)]">
                <img src="/lovable-uploads/d6e96e97-f894-4995-9509-9194140e94f9.png" alt="Malshi Hansana" className="w-full h-full object-cover" />
              </div>

              {/* Floating Logos with Cursor Motion */}
              <div ref={containerRef} className="floating-icons-container absolute inset-0 w-full h-full mx-0 my-0 px-[20px] py-[50px] rounded-lg bg-neutral-950/80 cursor-none">
                {/* Figma logo */}
                <div className="floating-icon absolute top-[-20px] right-[-20px] w-12 h-12 bg-black/80 rounded-full p-2 animate-float shadow-lg transition-transform duration-200 ease-out">
                  <img src="/lovable-uploads/20098842-4e3f-40e0-a68d-4593037eb0fe.png" alt="Figma" className="w-full h-full object-contain" />
                </div>
                
                {/* Developer logo */}
                <div className="floating-icon absolute top-[20%] left-[-30px] w-14 h-14 bg-black/80 rounded-full p-2 animate-float shadow-lg transition-transform duration-200 ease-out" style={{
                animationDelay: "0.5s"
              }}>
                  <img src="/lovable-uploads/406d1338-beed-4b08-8cf9-6088435fbdfc.png" alt="Developer" className="w-full h-full object-contain" />
                </div>
                
                {/* Third logo - using first logo again */}
                <div className="floating-icon absolute bottom-[30%] right-[-25px] w-10 h-10 bg-black/80 rounded-full p-2 animate-float shadow-lg transition-transform duration-200 ease-out" style={{
                animationDelay: "1s"
              }}>
                  <img src="/lovable-uploads/20098842-4e3f-40e0-a68d-4593037eb0fe.png" alt="Design" className="w-full h-full object-contain" />
                </div>
                
                {/* Developer logo again */}
                <div className="floating-icon absolute bottom-[-15px] left-[30%] w-12 h-12 bg-black/80 rounded-full p-2 animate-float shadow-lg transition-transform duration-200 ease-out" style={{
                animationDelay: "1.5s"
              }}>
                  <img src="/lovable-uploads/406d1338-beed-4b08-8cf9-6088435fbdfc.png" alt="Development" className="w-full h-full object-contain" />
                </div>
                
                {/* Figma logo again */}
                <div className="floating-icon absolute top-[40%] left-[90%] w-11 h-11 bg-black/80 rounded-full p-2 animate-float shadow-lg transition-transform duration-200 ease-out" style={{
                animationDelay: "2s"
              }}>
                  <img src="/lovable-uploads/20098842-4e3f-40e0-a68d-4593037eb0fe.png" alt="UI/UX" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content - More spacing from image */}
          <div className="text-left px-2">
            <h2 className="text-2xl font-bold mb-3">
              <span className="text-brand-orange">🔥</span> About Malshi
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
                  <span className="text-brand-orange mr-2">✅</span>
                  <span>Modern web development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">✅</span>
                  <span>Creative design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">✅</span>
                  <span>Smart digital marketing</span>
                </li>
              </ul>
              
              <p>
                I've worked with dozens of brands to turn basic ideas into stunning, high-performing websites — paired with content that actually connects and campaigns that grow fast.
              </p>

              <ul className="ml-5 space-y-1">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">🚀</span>
                  <span>Stronger online visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">🚀</span>
                  <span>Better user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">🚀</span>
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
    </section>;
};

export default About;
