
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Code, Layout, Video, Settings, Palette, Brain, PenTool, Linkedin, MessageSquare, User } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Service card type definition
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  technologies: string[];
  tools: string[];
  color: string;
}

// Service card component
const ServiceCard = ({ icon, title, description, skills, technologies, tools, color }: ServiceCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="service-card-container">
          <div className="service-card relative bg-black/80 border border-gray-800 rounded-3xl p-8 flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] group">
            <div className="service-icon-container mb-6 rounded-full bg-black border-2 border-teal-400 p-4 w-24 h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.7)]">
              <div className="text-teal-400 text-4xl">{icon}</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-6">{description}</p>
            <div className="mt-auto">
              <button className="see-more-btn flex items-center justify-center gap-2 border border-teal-400 text-teal-400 px-6 py-2 rounded-full hover:bg-teal-400/10 transition-all duration-300">
                <span>See More</span>
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L17 5M17 5L13 9M17 5H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-2xl bg-black/90 text-white border border-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold">
            <span className={`text-teal-400`}>{icon}</span>
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-base">{description}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Skills */}
          <Card className="bg-black/50 border border-teal-400/40 shadow-[0_0_10px_rgba(20,184,166,0.3)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-300 text-sm">
                {skills.map((skill, i) => (
                  <li key={i} className="mb-1">{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Technologies */}
          <Card className="bg-black/50 border border-teal-400/40 shadow-[0_0_10px_rgba(20,184,166,0.3)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-300 text-sm">
                {technologies.map((tech, i) => (
                  <li key={i} className="mb-1">{tech}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Tools */}
          <Card className="bg-black/50 border border-teal-400/40 shadow-[0_0_10px_rgba(20,184,166,0.3)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-300 text-sm">
                {tools.map((tool, i) => (
                  <li key={i} className="mb-1">{tool}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Services = () => {
  // Services data with expanded information
  const services = [
    
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "I build fast, secure, and beautiful websites that convert visitors into customers.",
      skills: [
        "Responsive Web Design",
        "Frontend Development",
        "Backend Integration",
        "API Development",
        "Performance Optimization"
      ],
      technologies: [
        "HTML5 & CSS3",
        "JavaScript/TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Tailwind CSS"
      ],
      tools: [
        "VS Code",
        "GitHub",
        "Vercel/Netlify",
        "Chrome DevTools",
        "Lighthouse"
      ],
      color: "text-teal-400"
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "UI/UX Designs",
      description: "Designs that not only look good — but feel right. Intuitive, bold, and user-focused.",
      skills: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "User Testing",
        "Visual Design"
      ],
      technologies: [
        "Design Systems",
        "Responsive Design",
        "Interaction Design",
        "Color Theory",
        "Typography"
      ],
      tools: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Maze"
      ],
      color: "text-teal-400"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Eye-catching visual content designed to build trust, authority, and engagement across platforms.",
      skills: [
        "Visual Storytelling",
        "Brand Identity Design",
        "Digital Illustration",
        "Motion Graphics",
        "Typography Design"
      ],
      technologies: [
        "Vector Graphics",
        "Raster Editing",
        "Color Grading",
        "Layout Design",
        "Image Composition"
      ],
      tools: [
        "Canva Pro",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Affinity Designer",
        "Procreate"
      ],
      color: "text-teal-400"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Creative campaigns and strategies to help you grow faster, louder, and smarter online.",
      skills: [
        "Content Strategy",
        "Community Management",
        "Campaign Planning",
        "Analytics & Reporting",
        "Influencer Collaboration"
      ],
      technologies: [
        "Social Media Algorithms",
        "Audience Targeting",
        "Content Calendars",
        "Growth Hacking",
        "A/B Testing"
      ],
      tools: [
        "Later",
        "Hootsuite",
        "Buffer",
        "Sprout Social",
        "Canva"
      ],
      color: "text-teal-400"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "SEO",
      description: "Make your brand discoverable. I optimize your site to rank, get seen, and attract the right audience.",
      skills: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Content Strategy",
        "Link Building"
      ],
      technologies: [
        "Search Algorithms",
        "Schema Markup",
        "Core Web Vitals",
        "Mobile Optimization",
        "Voice Search"
      ],
      tools: [
        "SEMrush",
        "Ahrefs",
        "Google Search Console",
        "Google Analytics",
        "Screaming Frog"
      ],
      color: "text-teal-400"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Performance Marketing",
      description: "Ad strategies that sell. I help you run high-ROI paid campaigns that drive results.",
      skills: [
        "PPC Campaign Management",
        "Conversion Rate Optimization",
        "Retargeting Strategies",
        "Budget Allocation",
        "Ad Copywriting"
      ],
      technologies: [
        "AI-Powered Ad Targeting",
        "Automated Bidding",
        "Attribution Modeling",
        "Funnel Optimization",
        "Audience Segmentation"
      ],
      tools: [
        "Google Ads",
        "Meta Ads Manager",
        "LinkedIn Ads",
        "Midjourney",
        "ChatGPT"
      ],
      color: "text-teal-400"
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-teal-400/20 blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-teal-500/20 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">WHAT I'M </span>
            <span className="text-teal-400">OFFERING</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your online presence and drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              skills={service.skills}
              technologies={service.technologies}
              tools={service.tools}
              color={service.color}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-card-container {
          cursor: pointer;
          transform: perspective(1000px);
          transition: all 0.3s ease;
        }
        
        .service-card {
          box-shadow: 0 0 15px rgba(240, 66, 13, 0.9);
          min-height: 380px;
        }
      `}</style>
    </section>
  );
};

export default Services;
