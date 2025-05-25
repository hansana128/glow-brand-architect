
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, X, Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";
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

  const menuItems = [
    { id: "home", label: "HOME", icon: Home },
    { id: "about", label: "ABOUT", icon: User },
    { id: "services", label: "SERVICES", icon: Briefcase },
    { id: "portfolio", label: "PORTFOLIO", icon: FolderOpen },
    { id: "contact", label: "CONTACT", icon: Mail },
  ];

  return (
    <header className="bg-gradient-to-r from-brand-black via-gray-900 to-brand-black py-4 relative z-50 shadow-lg border-b border-brand-orange/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo with surrounding menu buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className="flex items-center gap-3"
            >
              {/* Menu buttons around logo - left side */}
              <div className="hidden lg:flex items-center gap-2">
                {menuItems.slice(0, 2).map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    variant="ghost"
                    className="flex items-center gap-2 text-white hover:text-brand-orange hover:bg-brand-orange/10 transition-colors duration-300 text-base font-semibold"
                  >
                    <item.icon size={18} />
                    {item.label}
                  </Button>
                ))}
              </div>

              <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-brand-orange shadow-xl mx-4">
                <img 
                  src="/lovable-uploads/c144e353-e02a-466b-8b4f-757281971299.png" 
                  alt="Malshi Hansana Logo" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Menu buttons around logo - right side */}
              <div className="hidden lg:flex items-center gap-2">
                {menuItems.slice(2).map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    variant="ghost"
                    className="flex items-center gap-2 text-white hover:text-brand-orange hover:bg-brand-orange/10 transition-colors duration-300 text-base font-semibold"
                  >
                    <item.icon size={18} />
                    {item.label}
                  </Button>
                ))}
              </div>
            </a>

            <div className="text-white font-bold text-lg md:text-xl ml-4">
              <span className="text-brand-orange">MALSHI</span> HANSANA
              <p className="text-xs text-gray-300 font-normal">Web Developer | Digital Marketer</p>
            </div>
          </div>

          {/* Desktop Navigation - simplified for larger screens */}
          <nav className="hidden md:flex lg:hidden items-center gap-3">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="outline"
                className="text-base font-semibold border-brand-orange/70 text-white hover:bg-brand-orange/20 hover:text-brand-orange transition-colors duration-300 rounded-full py-2 px-4 h-auto"
              >
                {item.label}
              </Button>
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
            "md:hidden fixed top-[90px] left-0 right-0 bg-brand-blue/95 backdrop-blur-md transition-all duration-500 overflow-hidden",
            mobileMenuOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="flex flex-col p-4 gap-3">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="outline"
                className="flex items-center gap-3 text-base font-semibold border-brand-orange/70 text-white hover:bg-brand-orange/20 hover:text-brand-orange transition-colors duration-300 rounded-full justify-start py-3"
              >
                <item.icon size={20} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
