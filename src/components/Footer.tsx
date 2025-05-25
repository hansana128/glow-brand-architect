
import React from "react";
import { Linkedin, Mail, Instagram, BarChart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black relative overflow-hidden border-t border-brand-orange/20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-orange/20 blur-[80px]"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-brand-orange/20 blur-[60px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12 relative">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Profile Section */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-orange flex items-center justify-center">
                <img 
                  src="/lovable-uploads/a41d6dad-fc01-4a08-9a83-8f9a1bc2d671.png" 
                  alt="Malshi Hansana Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-brand-orange">Malshi</span> Hansana
                </h3>
                <p className="text-gray-300 text-sm">
                  Web Developer | Digital Marketer
                </p>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-gray-300 text-sm leading-relaxed">
                Helping brands stand out with bold strategies, standout visuals & strong online presence.
                Personal UI/UX Designer | Vibe Coder who loves working with AI
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/malshi-hansana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-white hover:bg-brand-orange hover:text-black transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:malshihansana128@gmail.com"
                className="w-12 h-12 rounded-full bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-white hover:bg-brand-orange hover:text-black transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="#analytics"
                className="w-12 h-12 rounded-full bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-white hover:bg-brand-orange hover:text-black transition-colors duration-300"
              >
                <BarChart size={20} />
              </a>
              <a
                href="https://www.instagram.com/malshi__xii/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-brand-orange/20 border border-brand-orange flex items-center justify-center text-white hover:bg-brand-orange hover:text-black transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold text-brand-orange mb-2">Quick Links</h4>
            <span
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-brand-orange transition-colors duration-300 cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-brand-orange transition-colors duration-300 cursor-pointer"
            >
              About
            </span>
            <span
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-brand-orange transition-colors duration-300 cursor-pointer"
            >
              Services
            </span>
            <span
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-300 hover:text-brand-orange transition-colors duration-300 cursor-pointer"
            >
              Portfolio
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold text-brand-orange mb-2">Get in Touch</h4>
            <span
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-brand-orange transition-colors duration-300 cursor-pointer"
            >
              Contact me
            </span>
            <a
              href="mailto:malshihansana128@gmail.com"
              className="text-gray-300 hover:text-brand-orange transition-colors duration-300"
            >
              malshihansana128@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © Copyright {new Date().getFullYear()} by Malshi Hansana. All rights reserved
            </p>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-brand-orange text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-orange/90 transition-colors duration-300"
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
