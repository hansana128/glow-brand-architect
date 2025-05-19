
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-black/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-white font-bold text-xl md:text-2xl flex items-center gap-2"
          >
            {/* Replace with your logo if needed */}
            <span className="text-brand-orange">Malshi</span> Hansana
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="uppercase text-sm font-medium text-white hover:text-brand-orange transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-brand-orange transition-colors duration-300"
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
            "md:hidden fixed top-[60px] left-0 right-0 bg-brand-blue/95 backdrop-blur-md transition-all duration-500 overflow-hidden",
            mobileMenuOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="flex flex-col p-4">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="uppercase text-base font-medium text-white hover:text-brand-orange transition-colors duration-300 py-3 border-b border-white/10"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
