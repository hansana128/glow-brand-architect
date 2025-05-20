
import React from "react";
import { Linkedin, Mail, Instagram, BarChart, MessageSquare } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-blue/30 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          {/* Left side */}
          <div className="flex flex-col">
            {/* Logo placeholder */}
            {/* <!-- Logo goes here --> */}
            <h3 className="text-xl font-bold text-white mb-2">
              <span className="text-brand-orange">Malshi</span> Hansana
            </h3>
            <p className="text-gray-300 text-sm">
              Web Developer | Digital Marketer
            </p>
            <p className="text-gray-400 text-sm mt-4 max-w-md">
              Transforming bold ideas into unforgettable digital experiences.
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col md:items-end">
            <div className="flex flex-col mb-6">
              <h4 className="text-white font-bold mb-3">Navigation</h4>
              <div className="flex flex-wrap gap-4">
                {["home", "about", "services", "portfolio", "contact"].map(
                  (item) => (
                    <span
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-gray-300 text-sm hover:text-brand-orange transition-colors duration-300 cursor-pointer"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-6 mt-6">
          {/* Social Icons Row */}
          <div className="flex justify-center mb-4 gap-4">
            <a
              href="https://www.linkedin.com/in/malshi-hansana"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue/50 text-white hover:bg-brand-orange/80 transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:info@malshihansana.com"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue/50 text-white hover:bg-brand-orange/80 transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.instagram.com/malshi__xii/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue/50 text-white hover:bg-brand-orange/80 transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#analytics"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue/50 text-white hover:bg-brand-orange/80 transition-colors duration-300"
            >
              <BarChart size={18} />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-400 text-sm text-center">
            © Copyright {new Date().getFullYear()} by Malshi Hansana. All rights reserved.
          </p>

          {/* Scroll to top button - moved to the bottom right */}
          <button
            onClick={scrollToTop}
            className="absolute bottom-6 right-20 w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue/50 text-white hover:bg-brand-orange/80 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
