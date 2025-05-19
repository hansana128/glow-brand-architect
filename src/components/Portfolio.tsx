
import React from "react";

// Portfolio item data type
interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
}

// Portfolio card component
const PortfolioCard = ({ image, title, category }: PortfolioItemProps) => {
  return (
    <div className="portfolio-card group">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{category}</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  // Portfolio items data
  // In a real scenario, replace these with actual portfolio images
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "E-Commerce Website",
      category: "Web Development",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Brand Identity Design",
      category: "UI/UX Design",
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "LinkedIn Growth Campaign",
      category: "Social Media Marketing",
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Personal Portfolio",
      category: "Web Development",
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "SEO Optimization",
      category: "Digital Marketing",
    },
    {
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      title: "Mobile App Design",
      category: "UI/UX Design",
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-brand-blue/30 blur-[100px]"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-brand-orange/20 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">EXPLORE MY </span>
            <span className="text-brand-orange">WORK</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my projects and collaborations across web development, design, and digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#" className="glow-btn">
            <span>See Full Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
