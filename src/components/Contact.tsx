
import React, { useState } from "react";
import { Linkedin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const { toast } = useToast();

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
      title: "Thanks for reaching out!",
      description: "I'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-brand-orange/20 blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-brand-blue/30 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              CONTACT ME
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors text-lg"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors text-lg"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-none text-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-4 rounded-2xl font-semibold text-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/malshi-hansana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue border border-white/10 text-white shadow-[0_0_10px_rgba(255,94,58,0.5)] transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/+123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue border border-white/10 text-white shadow-[0_0_10px_rgba(255,94,58,0.5)] transition-all duration-300"
            >
              <MessageSquare size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
