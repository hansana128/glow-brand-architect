
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
    <header className="bg-brand-black py-4 relative z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-white font-bold text-lg md:text-xl flex items-center gap-1"
          >
            {/* Replace with your logo if needed */}
            <span className="text-brand-orange">Malshi</span> Hansana
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item)}
                variant="outline"
                className="uppercase text-xs font-medium border-brand-orange/70 text-white hover:bg-brand-orange/20 hover:text-brand-orange transition-colors duration-300 rounded-full py-1 px-3 h-auto"
              >
                {item}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-brand-orange transition-colors duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
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
          <div className="flex flex-col p-4 gap-2">
            {["home", "about", "services", "portfolio", "contact"].map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item)}
                variant="outline"
                className="uppercase text-sm font-medium border-brand-orange/70 text-white hover:bg-brand-orange/20 hover:text-brand-orange transition-colors duration-300 rounded-full justify-start"
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
