
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Code, Image, Layout, Video, Settings, Palette, Brain } from "lucide-react";

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
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative">
      {/* Main Service Card */}
      <div 
        className="glassmorphism-card p-5 flex flex-col items-center text-center h-full cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className={`text-4xl mb-2 ${color}`}>{icon}</div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <button className="mt-auto py-2 px-4 rounded-full text-white text-sm font-medium border border-brand-orange/50 transition-all duration-300 hover:border-brand-orange shadow-[0_0_10px_rgba(255,94,58,0.5)]">
          See More
        </button>
      </div>

      {/* Details overlay */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="glassmorphism-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className={`text-4xl ${color}`}>{icon}</div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
              </div>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-gray-300 hover:text-white text-2xl"
              >
                &times;
              </button>
            </div>
            
            <p className="text-gray-200 mb-6">{description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Skills */}
              <Card className="bg-brand-blue/50 border-brand-orange shadow-[0_0_15px_rgba(255,94,58,0.5)]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-200 text-sm">
                    {skills.map((skill, i) => (
                      <li key={i} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Technologies */}
              <Card className="bg-brand-blue/50 border-brand-orange shadow-[0_0_15px_rgba(255,94,58,0.5)]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-200 text-sm">
                    {technologies.map((tech, i) => (
                      <li key={i} className="mb-1">{tech}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Tools */}
              <Card className="bg-brand-blue/50 border-brand-orange shadow-[0_0_15px_rgba(255,94,58,0.5)]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-200 text-sm">
                    {tools.map((tool, i) => (
                      <li key={i} className="mb-1">{tool}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <button 
                onClick={() => setShowDetails(false)}
                className="glow-btn"
              >
                <span>Back to Services</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
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
      color: "text-blue-400"
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
      color: "text-purple-400"
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
      color: "text-pink-400"
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
      color: "text-green-400"
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
      color: "text-yellow-400"
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
      color: "text-red-400"
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
              skills={service.skills}
              technologies={service.technologies}
              tools={service.tools}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
