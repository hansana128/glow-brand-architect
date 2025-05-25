
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Code, Layout, Video, Settings, Palette, Brain } from "lucide-react";
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
        <div className="group cursor-pointer">
          <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 flex flex-col items-center text-center h-full transition-all duration-300 hover:border-brand-orange/50 hover:shadow-[0_0_30px_rgba(255,94,58,0.3)] group-hover:scale-105">
            {/* Icon container with circular background */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-black/50 border-2 border-brand-orange flex items-center justify-center transition-all duration-300 group-hover:border-brand-orange group-hover:shadow-[0_0_20px_rgba(255,94,58,0.5)]">
                <div className="text-brand-orange text-3xl">{icon}</div>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{title}</h3>
            
            {/* Description */}
            <p className="text-gray-300 mb-8 leading-relaxed">{description}</p>
            
            {/* See More Button */}
            <div className="mt-auto">
              <div className="inline-flex items-center justify-center gap-3 border border-brand-orange text-brand-orange px-8 py-3 rounded-full hover:bg-brand-orange/10 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,94,58,0.4)]">
                <span className="font-medium">See More</span>
                <svg width="20" height="12" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L17 5M17 5L13 9M17 5H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-2xl bg-gray-900/95 backdrop-blur-md text-white border border-brand-orange/50 shadow-[0_0_30px_rgba(255,94,58,0.3)]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-bold">
            <span className="text-brand-orange">{icon}</span>
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-base leading-relaxed">{description}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Skills */}
          <Card className="bg-black/50 border border-brand-orange/40 shadow-[0_0_15px_rgba(255,94,58,0.2)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Technologies */}
          <Card className="bg-black/50 border border-brand-orange/40 shadow-[0_0_15px_rgba(255,94,58,0.2)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                {technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Tools */}
          <Card className="bg-black/50 border border-brand-orange/40 shadow-[0_0_15px_rgba(255,94,58,0.2)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                {tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-brand-orange/30">
          <p className="text-gray-300 text-sm text-center">
            Ready to elevate your digital presence? Let's create something amazing together.
          </p>
          <div className="flex justify-center mt-3">
            <button className="bg-brand-orange text-white px-6 py-2 rounded-full font-medium hover:bg-brand-orange/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Services = () => {
  // Services data with only the requested services
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "I build fast, secure, and beautiful websites that convert visitors into customers using modern technologies.",
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
      color: "text-brand-orange"
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Designs that not only look good — but feel right. Intuitive, bold, and user-focused experiences.",
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
      color: "text-brand-orange"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Eye-catching visual content designed to build trust, authority, and engagement across all platforms.",
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
        "Midjourney AI",
        "DALL-E 3"
      ],
      color: "text-brand-orange"
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
        "Canva Pro",
        "ChatGPT"
      ],
      color: "text-brand-orange"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "SEO Optimization",
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
      color: "text-brand-orange"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Performance Marketing",
      description: "AI-powered ad strategies that sell. I help you run high-ROI paid campaigns that drive real results.",
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
        "ChatGPT",
        "Claude AI"
      ],
      color: "text-brand-orange"
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-brand-orange/10 blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-brand-orange/10 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">WHAT I'M </span>
            <span className="text-brand-orange">OFFERING</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your online presence and drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
