
import React, { useState } from "react";
import { Linkedin, Mail, Instagram, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Create mailto link with form data
    const subject = `Contact Form Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:malshihansana128@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Success!",
      description: "Your email client will open with the message. Please send it from there.",
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
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
              <div className="w-16 h-16 rounded-full bg-brand-orange/20 border-2 border-brand-orange flex items-center justify-center">
                <span className="text-brand-orange font-bold text-xl">MH</span>
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
                Transforming bold ideas into unforgettable digital experiences. 
                Helping brands with innovative designs & strategies. Graphic Designer | 
                Personal Branding Strategist | Expert in Web Development + 
                Digital Marketing.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-white font-bold mb-3 text-lg">Quick Links</h4>
              <div className="flex flex-wrap gap-4">
                {["home", "about", "services", "portfolio", "contact"].map((item) => (
                  <span
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 text-sm hover:text-brand-orange transition-colors duration-300 cursor-pointer capitalize"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xl">Get In Touch</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-orange text-white py-3 rounded-lg font-medium hover:bg-brand-orange/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
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
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:malshihansana128@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.instagram.com/malshi__xii/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#analytics"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
              >
                <BarChart size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-brand-orange/20 border-2 border-brand-orange flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,94,58,0.3)]"
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
    </footer>
  );
};

export default Footer;
