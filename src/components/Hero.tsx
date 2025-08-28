
import React from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const handleRequestCV = async () => {
    try {
      console.log("Sending CV request email...");
      
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_w49zm8s", // Service ID
        "template_vgtrc28", // Template ID
        {
          user_name: "CV Request",
          user_email: "visitor@portfolio.com",
          message: "Hi Malshi, I came across your portfolio and would like to request your CV to explore a possible opportunity to work together. Looking forward to hearing from you. Best regards,",
        },
        "JPBmI8fkroXaXk02R" // Public Key
      );

      console.log("CV request email sent:", result);

      toast({
        title: "CV Request Sent!",
        description: "Your CV request has been sent successfully. Malshi will get back to you soon!",
      });
    } catch (error) {
      console.error("Failed to send CV request:", error);
      
      // Fallback to mailto if EmailJS fails
      const email = "malshihansana128@gmail.com";
      const subject = "Request for CV – Potential Collaboration";
      const body = `Hi Malshi,

I came across your portfolio and would like to request your CV to explore a possible opportunity to work together.

Looking forward to hearing from you.

Best regards,`;
      
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Opening Email Client",
        description: "Opening your default email client to send the CV request.",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-8"
      style={{
        backgroundImage: "radial-gradient(circle at 30% 40%, #0047FF 0%, #000000 70%)",
      }}
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[#FFD700]/20 blur-[60px] sm:blur-[80px]"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#0047FF]/30 blur-[80px] sm:blur-[100px]"></div>
      </div>

      <div className="container mx-auto z-10 max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-wide leading-tight">
              <span className="text-white">MAKE YOUR</span>
              <br />
              <span className="text-[#00e5ff]">BRAND UNFORGETTABLE</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              A 19 years old halfway software engineer turned into an unapologetic branding strategist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={handleRequestCV} className="bg-[#00e5ff] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00e5ff]/90 transition-colors">
                Get eBook
              </button>
              <a href="https://www.linkedin.com/in/malshi-hansana" className="border border-[#00e5ff] text-[#00e5ff] px-8 py-3 rounded-lg font-semibold hover:bg-[#00e5ff]/10 transition-colors" target="_blank" rel="noopener noreferrer">
                Let's talk
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2 relative">
            {/* Floating UI Elements */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-[#00e5ff] to-[#0099cc] rounded-xl p-4 shadow-lg animate-float">
              <div className="text-white text-sm font-semibold">Digital Suite</div>
              <div className="text-xs text-gray-200">Top 15%</div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-lg animate-float" style={{animationDelay: "1s"}}>
              <div className="text-black text-sm font-semibold">150+ CONS</div>
              <div className="text-xs text-gray-600">Converted</div>
            </div>

            <div className="absolute top-12 -left-12 w-16 h-16 bg-gradient-to-br from-[#ff6b6b] to-[#ee5a52] rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: "0.5s"}}>
              <div className="text-white text-xs font-bold">UI/UX</div>
            </div>

            {/* Main Image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#00e5ff] shadow-[0_0_40px_rgba(0,229,255,0.3)]">
                <img
                  src="/lovable-uploads/d6df25b7-3e50-4827-ad70-43fc4bb88cfa.png"
                  alt="Malshi Hansana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Marquee Section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-black/80 backdrop-blur-sm border-t border-[#00e5ff]/20 overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(2).fill(0).map((_, index) => (
              <div key={index} className="flex items-center gap-8 px-8">
                <span className="text-white text-sm">❄</span>
                <span className="text-[#00e5ff] text-lg font-semibold">Ghostwriting</span>
                <span className="text-white text-sm">❄</span>
                <span className="text-[#00e5ff] text-lg font-semibold">Branding</span>
                <span className="text-white text-sm">❄</span>
                <span className="text-[#00e5ff] text-lg font-semibold">Designing</span>
                <span className="text-white text-sm">❄</span>
                <span className="text-[#00e5ff] text-lg font-semibold">LinkedIn</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
