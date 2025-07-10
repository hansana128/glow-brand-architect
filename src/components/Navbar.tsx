
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className="py-3 sm:py-4 relative z-50 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #0a0e14 0%, #15256e 100%)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow shadow-lg">
              <img 
                src="/lovable-uploads/8ce66691-2b2c-43b5-b7e1-0c982d79d88c.png" 
                alt="Malshi Hansana Logo" 
                className="img-responsive"
              />
            </div>
            <div className="text-white font-bold text-base sm:text-lg md:text-xl">
              <span className="text-brand-yellow">MALSHI</span> HANSANA
              <p className="text-xs sm:text-sm text-gray-300 font-normal hidden sm:block">Web Developer | Digital Marketer</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 ml-4 lg:ml-8">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item)}
                variant="outline"
                className="uppercase text-sm font-medium border-brand-yellow/70 text-white hover:bg-brand-yellow/20 hover:text-brand-yellow transition-colors duration-300 rounded-full py-2 px-4 lg:px-5 h-10"
              >
                {item}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-brand-yellow transition-colors duration-300 p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed top-[60px] sm:top-[80px] left-0 right-0 backdrop-blur-md transition-all duration-500 overflow-hidden",
            "bg-gradient-to-b from-[#0a0e14] to-[#15256e]",
            mobileMenuOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="flex flex-col p-4 gap-2">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item)}
                variant="outline"
                className="uppercase text-base font-medium border-brand-yellow/70 text-white hover:bg-brand-yellow/20 hover:text-brand-yellow transition-colors duration-300 rounded-full justify-start py-3 px-6 h-12"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
