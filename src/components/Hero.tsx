
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
      className="relative py-12 sm:py-16 flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 30% 40%, #0047FF 0%, #000000 70%)",
      }}
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[#FFD700]/20 blur-[60px] sm:blur-[80px]"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#0047FF]/30 blur-[80px] sm:blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 max-w-6xl">
        <div className="grid-responsive-2 items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-wide">
              <span className="text-white">TURN </span>
              <span className="text-[#FFD700]">HEADS.</span>
              <br />
              <span className="text-white">BUILD </span>
              <span className="text-[#FFD700]">LEGACY.</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 max-w-lg text-center md:text-left">
              Not just a developer — a creative force transforming bold ideas into unforgettable brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Request CV Button - Links to LinkedIn */}
              <a href="https://www.linkedin.com/in/malshi-hansana" className="glow-btn btn-responsive" target="_blank" rel="noopener noreferrer">
                <span>Request My CV</span>
              </a>

              {/* Hire Me Button - Links to Contact Section */}
              <a href="#contact" className="glow-btn btn-responsive">
                <span>Hire Me</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center order-1 md:order-2 mb-4 md:mb-0">
            {/* MALSHI'S HERO IMAGE */}
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.5)]">
                <img
                  src="/lovable-uploads/d6df25b7-3e50-4827-ad70-43fc4bb88cfa.png"
                  alt="Malshi Hansana"
                  className="img-responsive"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 -right-2 sm:-right-4 w-5 h-5 sm:w-6 sm:h-6 bg-[#FFD700] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-3 sm:-bottom-2 sm:-left-6 w-6 h-6 sm:w-10 sm:h-10 bg-[#0047FF] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Marquee Section */}
      <div className="w-full mt-6">
        <section className="bg-brand-blue/50 overflow-hidden py-3 px-0">
          <div className="marquee-container relative whitespace-nowrap">
            <div className="flex animate-marquee">
              {/* Duplicate the content to create seamless looping */}
              {Array(2).fill(0).map((_, index) => (
                <div key={index} className="flex items-center gap-4 mx-4">
                  <span className="text-white">❄</span>
                  <span className="text-brand-yellow text-lg font-semibold">Web Development</span>
                  <span className="text-white">❄</span>
                  <span className="text-brand-yellow text-lg font-semibold">UI/UX Designs</span>
                  <span className="text-white">❄</span>
                  <span className="text-brand-yellow text-lg font-semibold">Graphic Design</span>
                  <span className="text-white">❄</span>
                  <span className="text-brand-yellow text-lg font-semibold">Social Media Marketing</span>
                  <span className="text-white">❄</span>
                  <span className="text-brand-yellow text-lg font-semibold">SEO</span>
                  <span className="text-white">❄</span>
                  <span className="text-brand-yellow text-lg font-semibold">Performance Marketing</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
