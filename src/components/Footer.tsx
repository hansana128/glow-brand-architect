
import React from "react";
import { Linkedin, Mail, MessageSquare, Instagram, ArrowUp } from "lucide-react";

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
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-sm text-gray-300 hover:text-brand-orange transition-colors duration-300"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="flex gap-4">
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
                href="https://www.facebook.com/malshi.hansana128/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue/50 text-white hover:bg-brand-orange/80 transition-colors duration-300"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © Copyright {new Date().getFullYear()} by Malshi Hansana. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue/50 text-white hover:bg-brand-orange/80 transition-colors duration-300"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
