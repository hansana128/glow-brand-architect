
import React, { useState } from "react";
import { MessageSquare, Linkedin, X } from "lucide-react";

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
          className="chat-menu-item bg-[#25D366]"
        >
          <MessageSquare size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/malshi-hansana"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-menu-item bg-[#0077B5]"
        >
          <Linkedin size={20} />
        </a>
        <button onClick={toggleChat} className="chat-menu-item bg-brand-orange">
          <X size={20} />
        </button>
      </div>

      {/* Chat Toggle Button */}
      <button onClick={toggleChat} className="chat-toggle animate-pulse">
        {!isOpen ? <MessageSquare size={24} /> : <X size={24} />}
      </button>
    </>
  );
};

export default FloatingChat;
