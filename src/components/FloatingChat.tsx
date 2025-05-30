
import React, { useState } from "react";
import { MessageSquare, Linkedin, Instagram, Mail, BarChart, X } from "lucide-react";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Menu */}
      <div className={`chat-menu ${isOpen ? "active" : ""}`}>
        <a
          href="https://wa.me/+123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-menu-item bg-[#25D366] border border-brand-yellow/20"
        >
          <MessageSquare size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/malshi-hansana"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-menu-item bg-[#0077B5] border border-brand-yellow/20"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:info@malshihansana.com"
          className="chat-menu-item bg-brand-blue border border-brand-yellow/20"
        >
          <Mail size={18} />
        </a>
        <a
          href="https://www.instagram.com/malshi__xii/"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-menu-item bg-[#C13584] border border-brand-yellow/20"
        >
          <Instagram size={18} />
        </a>
        <a
          href="#analytics"
          className="chat-menu-item bg-brand-blue border border-brand-yellow/20"
        >
          <BarChart size={18} />
        </a>
        <button onClick={toggleChat} className="chat-menu-item bg-brand-yellow">
          <X size={18} />
        </button>
      </div>

      {/* Chat Toggle Button */}
      <button 
        onClick={toggleChat} 
        className="chat-toggle animate-pulse border border-brand-yellow/50 hover:bg-brand-yellow/30 hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]"
      >
        {!isOpen ? <MessageSquare size={20} /> : <X size={20} />}
      </button>
    </>
  );
};

export default FloatingChat;
