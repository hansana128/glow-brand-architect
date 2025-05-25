
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
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-orange/20 blur-[80px]"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-brand-orange/20 blur-[60px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-16 relative">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Profile & Description */}
          <div className="flex flex-col space-y-6">
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-orange flex items-center justify-center">
                <img 
                  src="/lovable-uploads/d014bd77-30f4-4b0e-aa9f-74dcb03c1127.png" 
                  alt="Malshi Hansana Logo" 
                  className="w-full h-full object-cover"
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

            {/* Description */}
            <div className="max-w-md">
              <p className="text-gray-300 text-sm leading-relaxed">
                Helping BRANDS with bossy designs & strategies | Graphic Designer | 
                Personal Branding Strategist | Ravikan Top 10 in Personal Branding + 
                Audience Building
              </p>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="flex justify-end">
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
              <div className="flex flex-col space-y-4">
                <span
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 text-lg hover:text-brand-orange transition-colors duration-300 cursor-pointer"
                >
                  Home
                </span>
                <span
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 text-lg hover:text-brand-orange transition-colors duration-300 cursor-pointer"
                >
                  About
                </span>
                <span
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 text-lg hover:text-brand-orange transition-colors duration-300 cursor-pointer"
                >
                  Services
                </span>
              </div>
              <div className="flex flex-col space-y-4">
                <span
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-300 text-lg hover:text-brand-orange transition-colors duration-300 cursor-pointer"
                >
                  Portfolio
                </span>
                <span className="text-gray-300 text-lg hover:text-brand-orange transition-colors duration-300 cursor-pointer">
                  Packages
                </span>
                <span
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 text-lg hover:text-brand-orange transition-colors duration-300 cursor-pointer"
                >
                  Contact us
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social Icons */}
        <div className="bg-gray-800/30 rounded-2xl px-8 py-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © Copyright {new Date().getFullYear()} by Malshi Hansana. All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/malshi-hansana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:malshihansana128@gmail.com"
                className="w-12 h-12 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="#analytics"
                className="w-12 h-12 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
              >
                <BarChart size={20} />
              </a>
              <a
                href="https://www.instagram.com/malshi__xii/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact us floating button */}
          <div className="absolute -top-3 right-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
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
