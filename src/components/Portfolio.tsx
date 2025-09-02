
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";

// Portfolio item data type
interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  id: string;
}

// Video data type
interface VideoProps extends PortfolioItemProps {
  videoUrl: string;
  youtubeId?: string;
}

// WordPress project data type
interface WordPressProjectProps {
  image: string;
  title: string;
  category: string;
  url: string;
  role: string;
  technicalSkills: string[];
  problemSolving: string;
  aiMarketing: string;
  clientManagement: string;
  qas: Array<{
    question: string;
    answer: string;
  }>;
}

// Custom coded project data type
interface CustomCodedProjectProps {
  image: string;
  title: string;
  category: string;
  url: string;
}

// Tools data type
interface ToolProps {
  image: string;
  title: string;
  category: string;
  url: string;
}

// WordPress project card component
const WordPressProjectCard = ({ image, title, category, url, role, technicalSkills, problemSolving, aiMarketing, clientManagement, qas }: WordPressProjectProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="portfolio-card group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl aspect-[4/3] border-2 border-[#0047FF] shadow-[0_0_15px_rgba(0,71,255,0.3)]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0047FF]/90 via-[#0047FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-300">{category}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <ExternalLink className="text-[#FFD700]" size={20} />
                  <div className="inline-flex items-center justify-center gap-2 border-2 border-blue-800 text-blue-400 px-4 py-1 rounded-full hover:bg-blue-900/20 transition-all duration-300 group-hover:border-blue-700 group-hover:text-blue-300 group-hover:shadow-[0_0_15px_rgba(30,58,138,0.4)]">
                    <span className="text-xs font-medium">See More</span>
                    <svg width="12" height="6" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 1L17 5M17 5L13 9M17 5H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-2 border-[#0047FF] shadow-[0_0_30px_rgba(0,71,255,0.5)] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl font-bold">
            <img src={image} alt={title} className="w-16 h-16 rounded-lg object-cover border-2 border-[#0047FF]" />
            <div>
              <span className="text-blue-50">{title}</span>
              <p className="text-sm text-gray-300 font-normal">{category}</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {/* My Role & Contribution */}
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-[#0047FF]/50 shadow-[0_0_15px_rgba(0,71,255,0.3)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-50 text-lg">My Role & Contribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm">{role}</p>
            </CardContent>
          </Card>
          
          {/* Technical Skills */}
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-[#0047FF]/50 shadow-[0_0_15px_rgba(0,71,255,0.3)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-50 text-lg">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-300 text-sm">
                {technicalSkills.map((skill, i) => (
                  <li key={i} className="mb-1">{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Problem Solving */}
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-[#0047FF]/50 shadow-[0_0_15px_rgba(0,71,255,0.3)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-50 text-lg">Problem Solving</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm">{problemSolving}</p>
            </CardContent>
          </Card>
          
          {/* AI & Marketing Side */}
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-[#0047FF]/50 shadow-[0_0_15px_rgba(0,71,255,0.3)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-50 text-lg">AI & Marketing Side</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm">{aiMarketing}</p>
            </CardContent>
          </Card>
          
          {/* Client Management */}
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-[#0047FF]/50 shadow-[0_0_15px_rgba(0,71,255,0.3)] md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-50 text-lg">Client Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm">{clientManagement}</p>
            </CardContent>
          </Card>
        </div>

        {/* Related Questions & Answers */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-blue-50 mb-4">Related Questions & Answers</h3>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {qas.map((qa, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#0047FF]/30 rounded-lg px-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30"
              >
                <AccordionTrigger className="text-blue-50 hover:text-blue-300 text-left">
                  {qa.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-2">
                  {qa.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#0047FF]/40 flex justify-between items-center">
          <p className="text-gray-300 text-sm">
            Want to see this project live?
          </p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#0047FF] to-blue-700 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(0,71,255,0.4)] flex items-center gap-2"
          >
            Visit Website
            <ExternalLink size={16} />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Custom coded project card component
const CustomCodedProjectCard = ({ image, title, category, url }: CustomCodedProjectProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="portfolio-card group block"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] border-2 border-[#0047FF] shadow-[0_0_15px_rgba(0,71,255,0.3)]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0047FF]/90 via-[#0047FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-gray-300">{category}</p>
            </div>
            <ExternalLink className="text-[#FFD700]" size={20} />
          </div>
        </div>
      </div>
    </a>
  );
};

// Tools card component
const ToolCard = ({ image, title, category, url }: ToolProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="portfolio-card group block"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] border-2 border-[#0047FF] shadow-[0_0_15px_rgba(0,71,255,0.3)]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0047FF]/90 via-[#0047FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-gray-300">{category}</p>
            </div>
            <ExternalLink className="text-[#FFD700]" size={20} />
          </div>
        </div>
      </div>
    </a>
  );
};

// Portfolio card component
const PortfolioCard = ({ image, title, category, id }: PortfolioItemProps) => {
  return (
    <Link to={`/portfolio/${id}`} target="_blank" rel="noopener noreferrer" className="portfolio-card group">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] border-2 border-[#0047FF] shadow-[0_0_15px_rgba(0,71,255,0.3)]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0047FF]/90 via-[#0047FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{category}</p>
        </div>
      </div>
    </Link>
  );
};

// Video card component
const VideoCard = ({ video, onPlay }: { video: VideoProps, onPlay: (video: VideoProps) => void }) => {
  return (
    <div
      className="video-card relative rounded-xl overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(0,71,255,0.5)] border-2 border-[#0047FF]"
      onClick={() => onPlay(video)}
    >
      <div className="aspect-video relative">
        <img
          src={video.image}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0047FF]/80 to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="p-3 rounded-full bg-[#0047FF]/80 text-white">
            <Play size={24} />
          </div>
        </div>
      </div>
      <div className="p-3 bg-gradient-to-r from-[#0047FF]/30 to-[#0033CC]/50 text-white">
        <h3 className="text-sm font-semibold">{video.title}</h3>
      </div>
    </div>
  );
};

// Image preview component
const ImagePreviewCard = ({ project, onClick }: { project: PortfolioItemProps, onClick: (project: PortfolioItemProps) => void }) => {
  return (
    <div 
      className="portfolio-card group cursor-pointer shadow-[0_0_15px_rgba(0,71,255,0.5)] border-2 border-[#0047FF] rounded-xl overflow-hidden"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0047FF]/90 via-[#0047FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("wordpress");
  const [selectedVideo, setSelectedVideo] = useState<VideoProps | null>(null);
  const [selectedImage, setSelectedImage] = useState<PortfolioItemProps | null>(null);
  
  // WordPress projects with actual website links and homepage screenshots
  const wordpressProjects = [
    {
      url: "https://infocusmedia.lk/",
      image: "/lovable-uploads/fdd3ce05-68e6-4fd6-83eb-4b8bdba07d6c.png",
      title: "Infocus Media Website",
      category: "University Media Unit Project",
      role: "I worked as the main developer, collaborating with the university's media unit team to build the official Infocus Media website. Customized a WordPress theme to match the media unit's brand identity, designed responsive layouts for mobile and desktop, handled SEO setup and performance optimization, and ensured smooth functionality and ongoing support.",
      technicalSkills: ["WordPress Development", "Theme Customization (Elementor + WordPress)", "Responsive Design", "SEO Optimization", "Performance & Speed Optimization"],
      problemSolving: "The media unit needed a modern, easy-to-manage website to share university news, events, and media content with students and staff. I solved this by building a WordPress site that was easy to update by non-technical staff, mobile-friendly and fast-loading, and designed to reflect the media unit's visual identity.",
      aiMarketing: "Used ChatGPT for SEO-friendly content drafting and structuring, applied simple digital marketing principles for better reach, and focused on improving user engagement with clean layouts and visuals.",
      clientManagement: "Worked closely with the media unit team to gather requirements, provided training on how to manage and update the website, and set up a basic maintenance schedule for smooth long-term usage.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "The media unit needed a professional platform to share news, updates, and media content. The website made information more accessible to students and staff."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress with Elementor for design, along with SEO tools and responsive design techniques."
        },
        {
          question: "How was the client's business (media unit) impacted?",
          answer: "The media unit could easily publish updates, improve visibility, and engage more effectively with students and staff."
        },
        {
          question: "How did you manage challenges?",
          answer: "The main challenge was making the site easy for non-technical staff to update. I solved this by using Elementor, providing training, and creating simple guides."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I handled the technical development, customization, and optimization, while the media unit provided content, requirements, and feedback."
        }
      ]
    },
    {
      url: "https://iogglobal.au/",
      image: "/lovable-uploads/452d2ac4-523f-4ed1-aeed-5e4457923511.png",
      title: "IOG Global Website",
      category: "Collaborator & Developer | Built with WordPress & Divi Builder",
      role: "I collaborated with the company's internal marketing team to redesign and develop the official IOG Global website. Built the site using WordPress with Divi Builder, resolved performance issues through a technical audit, improved speed, SEO, and mobile responsiveness, and ensured design aligned with the company's brand identity and campaigns.",
      technicalSkills: ["WordPress Development (Divi Builder)", "Responsive Design & Mobile Optimization", "Performance Optimization (image compression, code cleanup)", "SEO Best Practices", "Google Analytics & Speed Testing (PageSpeed Insights, GTmetrix)"],
      problemSolving: "The company's website had slow load times, outdated design, and weak SEO visibility. I solved this by optimizing performance (faster loading, cleaner code), improving responsiveness across devices, enhancing SEO to boost search rankings, and delivering a design that matched the company's professional brand image.",
      aiMarketing: "Used AI tools for keyword research and SEO-friendly content optimization, ensured alignment with digital marketing campaigns, and created a user-focused design that increased engagement.",
      clientManagement: "Worked closely with the marketing team for content and branding alignment, provided reports on performance improvements and SEO results, and trained staff on managing and updating the site with Divi Builder.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "The old website was slow, not mobile-friendly, and underperforming in SEO. I solved these issues by optimizing performance, improving design, and aligning it with the company's brand and campaigns."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress with Divi Builder, Google Analytics, PageSpeed Insights, GTmetrix, and SEO tools."
        },
        {
          question: "How was the client's business impacted?",
          answer: "The redesigned site loaded much faster, ranked better on search engines, and provided a smoother experience for visitors. This improved brand credibility and digital engagement."
        },
        {
          question: "How did you manage challenges?",
          answer: "The biggest challenge was fixing performance issues. I handled this with a technical audit — optimizing images, removing unused code, and applying caching and SEO best practices."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I focused on development, optimization, and technical improvements, while the client's marketing team provided branding guidelines, content, and campaign direction."
        }
      ]
    },
    {
      url: "https://serenegemgallery.com/",
      image: "/lovable-uploads/58c8a904-95d9-40c6-ac45-18eeb108d146.png",
      title: "Serene Gem Gallery",
      category: "E-Commerce",
      role: "Developed a luxury jewelry e-commerce site with product catalogs, secure checkout, and inventory management.",
      technicalSkills: ["WordPress", "WooCommerce", "Payment Gateway Integration", "SSL Security", "Responsive/Mobile Commerce"],
      problemSolving: "The client needed to move from physical retail to online. I delivered an elegant e-commerce platform showcasing jewelry with smooth transactions.",
      aiMarketing: "Used AI for product recommendations, SEO optimization, and customer analytics.",
      clientManagement: "Provided training on managing products, orders, and inventory; created documentation for smooth handover.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "The jewelry business needed to transition from physical retail to online sales, requiring a professional e-commerce platform that could showcase their luxury products effectively."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress with WooCommerce, secure payment gateways, SSL certificates, and responsive design frameworks for mobile commerce."
        },
        {
          question: "How was the client's business impacted?",
          answer: "The online store opened new revenue streams, expanded their customer base beyond local clients, and provided 24/7 sales capability."
        },
        {
          question: "How did you manage challenges?",
          answer: "The main challenges were product photography optimization and secure payment processing. I implemented image compression and multiple payment gateway options for customer convenience."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I handled all technical development and e-commerce setup, while the client provided product information, pricing, and business requirements."
        }
      ]
    },
    {
      url: "https://goodneighborslk.org/",
      image: "/lovable-uploads/1dd42453-f2bb-4c19-b8f5-0a9ea5453e8e.png",
      title: "Good Neighbors Sri Lanka",
      category: "Non-Profit",
      role: "Designed and developed the NGO's platform for donations, volunteer coordination, and program updates.",
      technicalSkills: ["WordPress", "Multi-Language Support", "Donation & Payment Systems", "Impact Reporting"],
      problemSolving: "The NGO needed a digital hub for showcasing projects and engaging donors. I created a reliable, transparent platform for their global community.",
      aiMarketing: "Applied AI for donor behavior analysis, personalized campaigns, and storytelling strategies.",
      clientManagement: "Collaborated with international teams; trained local staff for content and donation management.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "The NGO needed a professional online presence to showcase their humanitarian work, attract donors, and coordinate volunteers effectively."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress with multi-language support, secure donation systems, payment processing, and impact reporting tools."
        },
        {
          question: "How was the client's business impacted?",
          answer: "The website increased donor engagement by 75% and improved volunteer coordination. It also enhanced transparency through detailed impact reporting."
        },
        {
          question: "How did you manage challenges?",
          answer: "Working with international teams required careful coordination across time zones. I implemented collaborative tools and provided comprehensive training materials."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I managed all technical aspects and platform development, while the NGO team provided content, impact data, and organizational requirements."
        }
      ]
    },
    {
      url: "https://sorrisorestaurant.com/",
      image: "/lovable-uploads/2307a7f0-f799-4148-aac6-28cf0a058498.png",
      title: "Sorriso Restaurant",
      category: "Hospitality",
      role: "Developed a restaurant site with reservations, menu management, and customer engagement features.",
      technicalSkills: ["WordPress", "Online Reservation System", "Menu Integration", "Social Media Embeds", "Responsive Design"],
      problemSolving: "The restaurant needed to increase visibility and streamline table bookings. I created an engaging site that showcased their cuisine while simplifying the reservation process.",
      aiMarketing: "Used AI tools for menu keyword optimization, SEO, and customer insights.",
      clientManagement: "Worked with management to align branding; trained staff on handling online reservations and menu updates.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "The restaurant needed to modernize their booking system and improve online visibility to attract more customers in a competitive market."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress with reservation system plugins, menu management tools, social media integration, and mobile-responsive design."
        },
        {
          question: "How was the client's business impacted?",
          answer: "Online reservations increased by 90%, website traffic grew by 65%, and customer engagement improved significantly through social media integration."
        },
        {
          question: "How did you manage challenges?",
          answer: "The main challenge was integrating the reservation system with their existing workflow. I provided staff training and created simple management processes."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I handled all website development and system integration, while the restaurant provided menu content, branding materials, and operational requirements."
        }
      ]
    }
  ];
  
  // Custom Coded projects with actual URLs
  const codedProjects = [
    {
      url: "https://layout-palette-craft.lovable.app/",
      image: "/lovable-uploads/9ce14740-450e-4f73-953d-a26c00633e37.png",
      title: "Layout Palette Craft",
      category: "React + TypeScript E-commerce Site",
    },
    {
      url: "https://preview--sleek-online-creation.lovable.app/",
      image: "/lovable-uploads/ce45593f-6b51-404b-a53c-29f5926592c1.png",
      title: "HIEUBOWL Vietnamese Kitchen",
      category: "React + TypeScript Restaurant Site",
    },
    {
      url: "https://instant-crypto-trade-hub.lovable.app/",
      image: "/lovable-uploads/da9567be-31e4-44a6-910d-afd879780170.png",
      title: "Crypto Trade Hub",
      category: "React + TypeScript",
    },
    {
      url: "https://island-escape-website-build.lovable.app/",
      image: "/lovable-uploads/ef21ed31-84fe-48ba-9e0c-60c9a5c0fdb8.png",
      title: "Island Escape Sri Lanka",
      category: "React Travel Website",
    },
  ];

  // Web Development Tools
  const webTools = [
    {
      url: "https://lovable.dev/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      title: "Lovable",
      category: "AI Web Development Platform",
    },
    {
      url: "https://bolt.new/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Bolt.new",
      category: "AI Code Generation Tool",
    },
    {
      url: "https://v0.dev/",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "V0.dev",
      category: "AI UI Component Generator",
    },
    {
      url: "https://wordpress.com/",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "WordPress",
      category: "Content Management System",
    },
  ];
  
  // AI Video Content with YouTube integration - Updated with new videos
  const videoProjects = [
    {
      id: "cool-soap-ad",
      image: "/lovable-uploads/b5bae181-32b0-4b1a-a375-568f262b3454.png",
      title: "Cool Soap Advertisement",
      category: "Product Commercial",
      videoUrl: "https://youtu.be/uYMXE_hbRo4",
      youtubeId: "uYMXE_hbRo4",
    },
    {
      id: "dogs-playing-video",
      image: "/lovable-uploads/e4f1dc21-eebf-43ef-a05b-29219fddeebd.png",
      title: "Dogs Playing in Park",
      category: "Lifestyle Video",
      videoUrl: "https://youtu.be/nHkMufUDzsM",
      youtubeId: "nHkMufUDzsM",
    },
    {
      id: "strawberry-milkshake-ad",
      image: "/lovable-uploads/0ee29585-e9a2-4bf2-a8b7-9867c881317f.png",
      title: "Strawberry Milkshake Commercial",
      category: "Product Advertisement",
      videoUrl: "https://youtube.com/shorts/YrAgd3Jqajw?si=_l7h0lCuoOZvMbiS",
      youtubeId: "YrAgd3Jqajw",
    },
    {
      id: "bio-drink-parachute",
      image: "/lovable-uploads/f8acf954-98aa-42b0-8704-c5f487be380d.png",
      title: "Bio Drink Parachute Adventure",
      category: "Creative Commercial",
      videoUrl: "https://youtube.com/shorts/JF1FfAIJR_s?si=_l7h0lCuoOZvMbiS",
      youtubeId: "JF1FfAIJR_s",
    },
    {
      id: "banana-honey-splash",
      image: "/lovable-uploads/57139484-ee80-403e-8e0e-81acf92b4051.png",
      title: "Banana Honey Smoothie",
      category: "Food & Beverage",
      videoUrl: "https://youtube.com/shorts/0eWyKKVE8Gc?si=5ezHs3jqGAu_jsQn",
      youtubeId: "0eWyKKVE8Gc",
    },
  ];
  
  // Creative Visuals
  const visualProjects = [
    {
      id: "visual-site-speed",
      image: "/lovable-uploads/53ad39ad-77ee-4728-af5e-c0d68fbddb68.png",
      title: "Site Performance Analysis",
      category: "SEO & Performance Design",
    },
    {
      id: "visual-wordpress-fix",
      image: "/lovable-uploads/cf85f042-03ab-48ef-9abe-16bdcd87bcbf.png",
      title: "WordPress Optimization Guide",
      category: "Technical Content Design",
    },
    {
      id: "visual-ai-marketing",
      image: "/lovable-uploads/cf264931-7c5a-47c0-aa8e-28c77f4c7133.png",
      title: "AI Digital Marketing Mastery",
      category: "Marketing Design",
    },
    {
      id: "visual-ai-tools",
      image: "/lovable-uploads/1f6b582f-cf5f-4a42-a35d-aeb5faa54de9.png",
      title: "5 AI Tools for Content Creation",
      category: "AI & Technology Design",
    },
    {
      id: "soundvibe-speaker",
      image: "/lovable-uploads/25297a50-2813-4b88-abac-83727fa43e9f.png",
      title: "SoundVibe Bluetooth Speaker",
      category: "Product Advertisement",
    },
    {
      id: "ladies-night-event",
      image: "/lovable-uploads/25972f6e-cc8e-47b5-9347-6908e960f895.png",
      title: "Ladies Night Event Poster",
      category: "Event Design",
    },
    {
      id: "headphones-sale",
      image: "/lovable-uploads/e62a3f9e-5435-47ad-bb9c-23bba65ab9c5.png",
      title: "Special Headphones Sale",
      category: "E-commerce Design",
    },
    {
      id: "nike-upcoming-arrival",
      image: "/lovable-uploads/46e5df41-989a-4f56-8392-e6585368497a.png",
      title: "Nike Upcoming Arrival",
      category: "Product Launch",
    },
    {
      id: "smartphone-arrival",
      image: "/lovable-uploads/5c6f30c4-bfab-4107-bae1-9582125773cc.png",
      title: "New Smart Phone Arrival",
      category: "Tech Product Design",
    },
    {
      id: "airpods-promo",
      image: "/lovable-uploads/3592b266-f2cd-4b85-a2d4-37a2dc33060d.png",
      title: "Apple AirPods Pro Promotion",
      category: "Product Advertisement",
    },
    {
      id: "aarohi-brand",
      image: "/lovable-uploads/996d95cf-993f-4c14-bdec-34a14b1c2c03.png",
      title: "Aarohi Fashion Brand",
      category: "Brand Design",
    },
    {
      id: "vastram-collection",
      image: "/lovable-uploads/f62396d6-83c6-48d6-9eb6-9ede2e625ffd.png",
      title: "Vastram Collection",
      category: "Fashion Design",
    },
    {
      id: "svasti-brand",
      image: "/lovable-uploads/e5e6a14f-6a73-4e25-9db1-169f3ab36532.png",
      title: "Svasti Traditional Wear",
      category: "Brand Design",
    },
    {
      id: "anvita-fashion",
      image: "/lovable-uploads/b5e0788b-3438-4c20-8099-df721831bee5.png",
      title: "Anvita Fashion Brand",
      category: "Fashion Design",
    },
    {
      id: "perfume-guide",
      image: "/lovable-uploads/3227b04e-7838-4171-9ffe-50c6e0905744.png",
      title: "Perfume Application Guide",
      category: "Infographic Design",
    },
    {
      id: "dance-classes",
      image: "/lovable-uploads/02f3c078-5f4f-4850-b3c1-be7cece3338f.png",
      title: "Borcelle Dance Classes",
      category: "Event Promotion",
    },
    {
      id: "salon-opening",
      image: "/lovable-uploads/5ba15d49-5796-4117-a5ac-900e31d42ecc.png",
      title: "Salon Grand Opening",
      category: "Event Invitation",
    },
  ];

  const openVideoModal = (video: VideoProps) => {
    setSelectedVideo(video);
  };

  const openImageModal = (project: PortfolioItemProps) => {
    setSelectedImage(project);
  };

  return (
    <section id="portfolio" className="py-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[#0047FF]/30 blur-[100px]"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-[#0033CC]/20 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-white">EXPLORE MY </span>
            <span className="text-[#0047FF]">WORK</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I build fast, secure, and beautiful websites that convert visitors into customers using modern technologies.
          </p>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue="wordpress" className="mb-8" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent">
            <TabsTrigger 
              value="wordpress" 
              className="data-[state=active]:bg-[#0047FF] data-[state=active]:text-white"
            >
              WordPress Projects
            </TabsTrigger>
            <TabsTrigger 
              value="coded" 
              className="data-[state=active]:bg-[#0047FF] data-[state=active]:text-white"
            >
              Custom Coded Projects
            </TabsTrigger>
            <TabsTrigger 
              value="video" 
              className="data-[state=active]:bg-[#0047FF] data-[state=active]:text-white"
            >
              AI Video Content
            </TabsTrigger>
            <TabsTrigger 
              value="visual" 
              className="data-[state=active]:bg-[#0047FF] data-[state=active]:text-white"
            >
              Creative Visuals
            </TabsTrigger>
          </TabsList>

          {/* WordPress Projects */}
          <TabsContent value="wordpress" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wordpressProjects.map((project, index) => (
                <WordPressProjectCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  url={project.url}
                  role={project.role}
                  technicalSkills={project.technicalSkills}
                  problemSolving={project.problemSolving}
                  aiMarketing={project.aiMarketing}
                  clientManagement={project.clientManagement}
                  qas={project.qas}
                />
              ))}
            </div>
          </TabsContent>

          {/* Custom Coded Projects */}
          <TabsContent value="coded" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {codedProjects.map((project, index) => (
                <CustomCodedProjectCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  url={project.url}
                />
              ))}
            </div>
          </TabsContent>

          {/* Video Content */}
          <TabsContent value="video" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoProjects.map((video, index) => (
                <VideoCard
                  key={index}
                  video={video}
                  onPlay={openVideoModal}
                />
              ))}
            </div>
          </TabsContent>

          {/* Creative Visuals */}
          <TabsContent value="visual" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visualProjects.map((project, index) => (
                <ImagePreviewCard
                  key={index}
                  project={project}
                  onClick={openImageModal}
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

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl bg-brand-black border border-[#0047FF]">
          <DialogHeader>
            <DialogTitle className="text-white">{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-black/30 rounded-md overflow-hidden">
            {selectedVideo && selectedVideo.youtubeId ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <div className="flex items-center justify-center h-full text-center text-gray-300">
                <div>
                  <Play size={48} className="mx-auto text-[#0047FF] mb-2" />
                  <p className="mb-2">Video: {selectedVideo?.title}</p>
                  <a 
                    href={selectedVideo?.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0047FF] hover:underline"
                  >
                    Watch on External Platform
                  </a>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-brand-black border border-[#0047FF]">
          <DialogHeader>
            <DialogTitle className="text-white">{selectedImage?.title}</DialogTitle>
          </DialogHeader>
          <div className="rounded-md overflow-hidden">
            {selectedImage && (
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            )}
          </div>
          <div className="text-gray-300 text-sm">
            <p>{selectedImage?.category}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
