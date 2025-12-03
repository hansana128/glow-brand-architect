
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
    <footer className="bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-brand-yellow/20 blur-[60px] sm:blur-[80px]"></div>
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-brand-yellow/20 blur-[40px] sm:blur-[60px]"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 max-w-7xl py-8 sm:py-12 md:py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Left Side - Profile & Description */}
          <div className="flex flex-col space-y-4 sm:space-y-6 items-center lg:items-start text-center lg:text-left">
            {/* Profile Section */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-brand-yellow flex items-center justify-center flex-shrink-0">
                <img 
                  src="/lovable-uploads/406d1338-beed-4b08-8cf9-6088435fbdfc.png" 
                  alt="Malshi Hansana Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-brand-yellow">Malshi</span> Hansana
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Web Developer | Digital Marketer
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-md">
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Helping brands stand out with bold strategies, standout visuals & strong online presence
                Personal UI/UX Designer | Vibe Coder who loves working with AI
              </p>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-3 sm:gap-y-4">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <span
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 text-sm sm:text-lg hover:text-brand-yellow transition-colors duration-300 cursor-pointer"
                >
                  Home
                </span>
                <span
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 text-sm sm:text-lg hover:text-brand-yellow transition-colors duration-300 cursor-pointer"
                >
                  About
                </span>
                <span
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 text-sm sm:text-lg hover:text-brand-yellow transition-colors duration-300 cursor-pointer"
                >
                  Services
                </span>
              </div>
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <span
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-300 text-sm sm:text-lg hover:text-brand-yellow transition-colors duration-300 cursor-pointer"
                >
                  Portfolio
                </span>
                <span
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 text-sm sm:text-lg hover:text-brand-yellow transition-colors duration-300 cursor-pointer"
                >
                  Contact us
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social Icons */}
        <div className="bg-gray-800/30 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-6 sm:pt-0">
            {/* Copyright */}
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © Copyright {new Date().getFullYear()} by Malshi Hansana. All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.linkedin.com/in/malshi-hansana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-yellow hover:border-brand-yellow transition-colors duration-300"
              >
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:malshihansana128@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-yellow hover:border-brand-yellow transition-colors duration-300"
              >
                <Mail size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#analytics"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-yellow hover:border-brand-yellow transition-colors duration-300"
              >
                <BarChart size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/malshi__xii/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-yellow hover:border-brand-yellow transition-colors duration-300"
              >
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Contact us floating button */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
