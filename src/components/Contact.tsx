
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Attempting to send email with EmailJS...");
      console.log("Form data:", formData);
      
      // Send email using EmailJS with proper template variables
      const result = await emailjs.send(
        "service_w49zm8s", // Service ID
        "template_vgtrc28", // Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "JPBmI8fkroXaXk02R" // Public Key
      );

      console.log("EmailJS result:", result);

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-brand-yellow/20 blur-[60px] sm:blur-[80px]"></div>
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-brand-yellow/20 blur-[40px] sm:blur-[60px]"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-white">CONTACT </span>
            <span className="text-[#0047FF]">ME</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-2">
            Ready to bring your digital vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get in Touch</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                I'm always excited to work on new projects and help businesses grow their online presence. 
                Feel free to reach out through any of the methods below.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-medium text-sm sm:text-base">Email</p>
                  <p className="text-gray-300 text-xs sm:text-sm truncate">malshihansana128@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Location</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Response Time</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 h-full shadow-[0_0_15px_rgba(255,215,0,0.5)] p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="neon-form-field"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="neon-form-field"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="neon-form-field resize-none"
                  rows={5}
                  placeholder="Tell me about your project, goals, and how I can help you..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full glow-btn text-black font-bold py-3 hover:scale-105 transition-transform duration-300"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
