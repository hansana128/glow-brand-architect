
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
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // In a real scenario, you would send the form data to a backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Success!",
      description: "Your message has been sent. I'll get back to you soon!",
    });
    
    // Reset form
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">LET'S CREATE </span>
            <span className="text-brand-orange">MAGIC</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Get in touch and let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="glassmorphism-card p-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-white text-sm mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="neon-form-field"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block text-white text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="neon-form-field"
                  placeholder="Your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block text-white text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="neon-form-field"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="form-group">
                <button type="submit" className="glow-btn w-full">
                  <span>Send Message</span>
                </button>
              </div>
            </div>
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
