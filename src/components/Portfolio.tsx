
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
      title: "Infocus Media",
      category: "WordPress Business Site",
      role: "I served as the lead developer and designer, handling the complete website development from conception to deployment. My responsibilities included UI/UX design, WordPress customization, content management, and ongoing technical support.",
      technicalSkills: ["WordPress Development", "Custom Theme Creation", "Responsive Design", "SEO Optimization", "Performance Optimization", "Security Implementation"],
      problemSolving: "The client needed a professional media company website that could showcase their services effectively. I addressed this by creating a modern, fast-loading WordPress site with intuitive navigation and strong visual appeal.",
      aiMarketing: "Implemented AI-driven content optimization and used ChatGPT for SEO-friendly content creation. Applied modern marketing principles for better user engagement and conversion optimization.",
      clientManagement: "Maintained regular communication throughout the project, provided training on content management, and established a maintenance schedule. The client appreciated the transparent process and timely delivery.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "Infocus Media needed a professional online presence to showcase their media services and attract new clients. The website solved their visibility issues and provided a platform for client engagement."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress CMS, custom PHP themes, HTML5/CSS3, JavaScript, responsive design frameworks, and various WordPress plugins for functionality enhancement."
        },
        {
          question: "How was the client's business impacted?",
          answer: "The website increased their online visibility by 60% and improved client inquiries by 40%. It established their credibility in the media industry."
        },
        {
          question: "How did you manage challenges?",
          answer: "I addressed performance issues by optimizing images and implementing caching. For design challenges, I conducted user research and A/B tested different layouts."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I handled all technical aspects including design, development, and optimization. The client provided content, branding guidelines, and feedback throughout the development process."
        }
      ]
    },
    {
      url: "https://iogglobal.au/",
      image: "/lovable-uploads/452d2ac4-523f-4ed1-aeed-5e4457923511.png",
      title: "IOG Global",
      category: "WordPress Corporate Site",
      role: "Full-stack WordPress developer responsible for creating a corporate website for an Australian company. I managed the entire project lifecycle including design, development, content integration, and deployment.",
      technicalSkills: ["WordPress Development", "Corporate Design", "Multi-page Architecture", "Contact Forms", "Google Analytics Integration", "Mobile Optimization"],
      problemSolving: "IOG Global required a sophisticated corporate presence to compete in the Australian market. I solved this by creating a professional, trust-building website with clear service presentations and easy contact methods.",
      aiMarketing: "Used AI tools for competitive analysis and content strategy. Implemented data-driven design decisions and automated SEO optimizations to improve search rankings.",
      clientManagement: "Coordinated across time zones (Sri Lanka to Australia), provided regular progress updates, and delivered comprehensive training on website management. Established ongoing support relationship.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "IOG Global needed to establish credibility in the Australian market and provide potential clients with easy access to their services and contact information."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress, custom business themes, contact form plugins, Google Analytics, mobile-responsive frameworks, and security plugins."
        },
        {
          question: "How was the client's business impacted?",
          answer: "The website helped them secure 3 major clients within the first month and improved their professional image significantly in the Australian market."
        },
        {
          question: "How did you manage challenges?",
          answer: "Time zone differences were managed through scheduled calls and detailed project documentation. Technical challenges were solved through modular development and testing."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I handled all technical development, design, and optimization. The client provided business requirements, content, and market insights specific to the Australian business environment."
        }
      ]
    },
    {
      url: "https://charityforlife.lk/",
      image: "/lovable-uploads/20098842-4e3f-40e0-a68d-4593037eb0fe.png",
      title: "Charity For Life",
      category: "WordPress Non-Profit Site",
      role: "Lead developer and designer for this non-profit organization's website. I focused on creating an emotionally engaging platform that effectively communicates the charity's mission and facilitates donations.",
      technicalSkills: ["WordPress Development", "Donation Integration", "Social Media Integration", "Event Management", "Volunteer Registration", "Content Management"],
      problemSolving: "The charity needed a platform to increase awareness, facilitate donations, and manage volunteers. I created a user-friendly website with integrated donation systems and compelling storytelling elements.",
      aiMarketing: "Applied emotional design principles and used AI-assisted content creation to craft compelling narratives. Implemented conversion optimization techniques to increase donation rates.",
      clientManagement: "Worked closely with the charity board, provided pro-bono services, and ensured the website aligned with their humanitarian goals. Maintained ongoing support for their digital initiatives.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "The charity lacked an effective online presence to reach donors and volunteers. The website provided a platform for storytelling, donation collection, and community building."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress, donation plugins, social media integrations, event management systems, and mobile-optimized themes designed for non-profit organizations."
        },
        {
          question: "How was the client's business impacted?",
          answer: "Online donations increased by 150% and volunteer registrations improved by 80%. The charity gained better visibility and community engagement."
        },
        {
          question: "How did you manage challenges?",
          answer: "Budget constraints were addressed by selecting cost-effective solutions and prioritizing essential features. I provided training to help them manage content independently."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I handled all technical aspects and design strategy. The charity provided content, mission statements, and ongoing feedback about their community needs."
        }
      ]
    },
    {
      url: "https://serenegemgallery.com/",
      image: "/lovable-uploads/58c8a904-95d9-40c6-ac45-18eeb108d146.png",
      title: "Serene Gem Gallery",
      category: "WordPress Jewelry E-commerce",
      role: "E-commerce developer specializing in jewelry retail. I built a sophisticated online store with product galleries, secure payment processing, and inventory management for this luxury jewelry business.",
      technicalSkills: ["WooCommerce Development", "Product Photography Integration", "Payment Gateway Setup", "Inventory Management", "SSL Security", "Mobile Commerce"],
      problemSolving: "The jewelry store needed to transition from physical-only sales to online retail. I created an elegant e-commerce platform that showcases jewelry effectively and provides secure transactions.",
      aiMarketing: "Implemented AI-powered product recommendations and dynamic pricing strategies. Used machine learning insights for inventory optimization and customer behavior analysis.",
      clientManagement: "Provided comprehensive e-commerce training, established inventory management procedures, and created detailed documentation for order processing and customer service.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "Serene Gem Gallery needed to expand beyond physical store sales and reach customers online. The e-commerce site enabled them to showcase and sell jewelry globally."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress with WooCommerce, payment gateways (PayPal, Stripe), SSL certificates, inventory management plugins, and responsive design frameworks."
        },
        {
          question: "How was the client's business impacted?",
          answer: "Online sales contributed 45% of total revenue within 6 months. The store expanded its customer base beyond local market and improved brand recognition."
        },
        {
          question: "How did you manage challenges?",
          answer: "Security concerns were addressed with SSL certificates and secure payment gateways. Product photography challenges were solved through optimization techniques and gallery plugins."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I developed the technical platform and e-commerce functionality. The client provided product information, handled customer service, and managed inventory updates."
        }
      ]
    },
    {
      url: "https://goodneighborslk.org/",
      image: "/lovable-uploads/1dd42453-f2bb-4c19-b8f5-0a9ea5453e8e.png",
      title: "Good Neighbors Sri Lanka",
      category: "WordPress Non-Profit Organization",
      role: "Senior WordPress developer for this international NGO's Sri Lankan branch. I created a comprehensive platform that supports their humanitarian work through effective digital communication and donor engagement.",
      technicalSkills: ["WordPress Development", "Multi-language Support", "Donation Systems", "Program Management", "Volunteer Coordination", "Impact Reporting"],
      problemSolving: "Good Neighbors needed a platform to showcase their humanitarian work, engage donors, and coordinate programs effectively. I built a comprehensive solution that supports their mission-critical activities.",
      aiMarketing: "Utilized data analytics for donor behavior insights and implemented AI-driven content personalization. Applied storytelling techniques and emotional design principles for maximum impact.",
      clientManagement: "Collaborated with international teams, ensured brand consistency across regions, and provided training for local staff on content management and digital strategy.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "The organization needed better digital communication tools to share their impact stories, attract donors, and coordinate humanitarian programs across Sri Lanka."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress with multi-language support, donation management systems, program tracking tools, social media integration, and mobile-responsive design."
        },
        {
          question: "How was the client's business impacted?",
          answer: "Digital donations increased by 200% and program visibility improved significantly. The website helped them secure additional funding from international donors."
        },
        {
          question: "How did you manage challenges?",
          answer: "Multi-language requirements were addressed with translation plugins and culturally appropriate design. I ensured compliance with international NGO standards."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I provided technical expertise and digital strategy. The client contributed program content, impact stories, and regional insights for effective local engagement."
        }
      ]
    },
    {
      url: "https://sorrisorestaurant.com/",
      image: "/lovable-uploads/2307a7f0-f799-4148-aac6-28cf0a058498.png",
      title: "Sorriso Restaurant",
      category: "WordPress Restaurant Site",
      role: "Restaurant website specialist focused on creating an appetizing online presence. I developed a comprehensive restaurant website with online reservations, menu displays, and customer engagement features.",
      technicalSkills: ["WordPress Development", "Online Reservation System", "Menu Management", "Location Integration", "Social Media Integration", "Food Photography Optimization"],
      problemSolving: "Sorriso Restaurant needed to attract customers online and streamline their reservation process. I created an engaging website that showcases their cuisine and simplifies booking.",
      aiMarketing: "Implemented local SEO strategies and used AI insights for menu optimization. Applied food industry best practices for visual appeal and customer psychology.",
      clientManagement: "Worked closely with restaurant management to understand their workflow, provided staff training on reservation management, and established social media integration strategies.",
      qas: [
        {
          question: "What problem did this project solve?",
          answer: "The restaurant needed an online presence to attract customers and manage reservations efficiently. The website solved their visibility and booking management challenges."
        },
        {
          question: "What technologies were used?",
          answer: "WordPress with restaurant-specific themes, online reservation plugins, Google Maps integration, social media feeds, and mobile-responsive design."
        },
        {
          question: "How was the client's business impacted?",
          answer: "Online reservations increased by 120% and customer engagement improved significantly. The restaurant saw a 30% increase in new customer visits."
        },
        {
          question: "How did you manage challenges?",
          answer: "Integration challenges between reservation systems and existing workflows were solved through custom plugin configurations and staff training."
        },
        {
          question: "What was your role compared to the client's?",
          answer: "I handled all technical development and digital strategy. The restaurant provided menu content, photos, and operational requirements for the reservation system."
        }
      ]
    },
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
