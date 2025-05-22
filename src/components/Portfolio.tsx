
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Portfolio item data type
interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  id: string;
}

// Portfolio card component
const PortfolioCard = ({ image, title, category, id }: PortfolioItemProps) => {
  return (
    <Link to={`/portfolio/${id}`} target="_blank" rel="noopener noreferrer" className="portfolio-card group">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{category}</p>
        </div>
      </div>
    </Link>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("wordpress");
  
  // WordPress projects
  const wordpressProjects = [
    {
      id: "wordpress-ecommerce",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Online Fashion Store",
      category: "WordPress E-commerce",
    },
    {
      id: "wordpress-blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "News Magazine",
      category: "WordPress Publishing",
    },
    {
      id: "wordpress-portfolio",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Artist Portfolio",
      category: "WordPress Showcase",
    },
  ];
  
  // Custom Coded projects
  const codedProjects = [
    {
      id: "coded-saas",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "SaaS Dashboard",
      category: "React + Node.js",
    },
    {
      id: "coded-app",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Mobile Web App",
      category: "React Native",
    },
    {
      id: "coded-ecommerce",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "Custom Shop",
      category: "MERN Stack",
    },
    {
      id: "coded-booking",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Booking Platform",
      category: "Next.js + GraphQL",
    },
  ];
  
  // AI Video Content
  const videoProjects = [
    {
      id: "ai-explainer",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "AI Explainer",
      category: "Educational Video",
    },
    {
      id: "ai-promo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Product Promo",
      category: "Marketing Video",
    },
    {
      id: "ai-tutorial",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Software Tutorial",
      category: "Tutorial Video",
    },
    {
      id: "ai-commercial",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Brand Commercial",
      category: "Promotional Video",
    },
  ];
  
  // Creative Visuals
  const visualProjects = [
    {
      id: "visual-branding",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Brand Identity",
      category: "Logo Design",
    },
    {
      id: "visual-illustration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Digital Illustration",
      category: "Artwork",
    },
    {
      id: "visual-banner",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Web Banners",
      category: "UI Design",
    },
    {
      id: "visual-social",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Social Media Kit",
      category: "Marketing Design",
    },
    {
      id: "visual-print",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Print Materials",
      category: "Print Design",
    },
    {
      id: "visual-presentation",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "Presentation Design",
      category: "Business Design",
    },
    {
      id: "visual-icon",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Icon Set",
      category: "Graphic Design",
    },
    {
      id: "visual-motion",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Motion Graphics",
      category: "Animation",
    },
    {
      id: "visual-3d",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "3D Renders",
      category: "3D Design",
    },
    {
      id: "visual-infographic",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Infographics",
      category: "Information Design",
    },
  ];

  return (
    <section id="portfolio" className="py-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-brand-blue/30 blur-[100px]"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-brand-orange/20 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-white">EXPLORE MY </span>
            <span className="text-brand-orange">WORK</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my projects and collaborations across web development, design, and digital marketing.
          </p>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue="wordpress" className="mb-8" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent">
            <TabsTrigger 
              value="wordpress" 
              className="data-[state=active]:bg-brand-orange data-[state=active]:text-white"
            >
              WordPress Projects
            </TabsTrigger>
            <TabsTrigger 
              value="coded" 
              className="data-[state=active]:bg-brand-orange data-[state=active]:text-white"
            >
              Custom Coded Projects
            </TabsTrigger>
            <TabsTrigger 
              value="video" 
              className="data-[state=active]:bg-brand-orange data-[state=active]:text-white"
            >
              AI Video Content
            </TabsTrigger>
            <TabsTrigger 
              value="visual" 
              className="data-[state=active]:bg-brand-orange data-[state=active]:text-white"
            >
              Creative Visuals
            </TabsTrigger>
          </TabsList>

          {/* WordPress Projects */}
          <TabsContent value="wordpress" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* <!-- Add your site thumbnails and their detail pages here --> */}
              {wordpressProjects.map((project, index) => (
                <PortfolioCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  id={project.id}
                />
              ))}
            </div>
          </TabsContent>

          {/* Custom Coded Projects */}
          <TabsContent value="coded" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {codedProjects.map((project, index) => (
                <PortfolioCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  id={project.id}
                />
              ))}
            </div>
          </TabsContent>

          {/* Video Content */}
          <TabsContent value="video" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {videoProjects.map((project, index) => (
                <PortfolioCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  id={project.id}
                />
              ))}
            </div>
          </TabsContent>

          {/* Creative Visuals */}
          <TabsContent value="visual" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {visualProjects.map((project, index) => (
                <PortfolioCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  id={project.id}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-6">
          <Link to="/#portfolio" className="glow-btn">
            <span>See Full Portfolio</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
