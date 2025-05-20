
import React from "react";

// Service card type definition
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

// Service card component
const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glassmorphism-card p-5 flex flex-col items-center text-center h-full">
      <div className="text-4xl mb-2 text-brand-orange">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
      <button className="mt-auto py-2 px-4 rounded-full text-white text-sm font-medium border border-brand-orange/50 transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_10px_rgba(255,94,58,0.6)]">
        See More
      </button>
    </div>
  );
};

const Services = () => {
  // Services data
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "I build fast, secure, and beautiful websites that convert visitors into customers.",
    },
    {
      icon: "🎨",
      title: "UI/UX Designs",
      description: "Designs that not only look good — but feel right. Intuitive, bold, and user-focused.",
    },
    {
      icon: "📊",
      title: "LinkedIn Carousel Designs",
      description: "Scroll-stopping carousel content designed to build trust, authority, and engagement on LinkedIn.",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Creative campaigns and strategies to help you grow faster, louder, and smarter online.",
    },
    {
      icon: "🔍",
      title: "SEO",
      description: "Make your brand discoverable. I optimize your site to rank, get seen, and attract the right audience.",
    },
    {
      icon: "🚀",
      title: "Performance Marketing",
      description: "Ad strategies that sell. I help you run high-ROI paid campaigns that drive results.",
    },
  ];

  return (
    <section id="services" className="py-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-brand-blue/30 blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-brand-orange/20 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-white">WHAT I'M </span>
            <span className="text-brand-orange">OFFERING</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your online presence and drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
