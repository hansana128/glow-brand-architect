
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
const WordPressProjectCard = ({ image, title, category, url }: WordPressProjectProps) => {
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
    },
    {
      url: "https://iogglobal.au/",
      image: "/lovable-uploads/452d2ac4-523f-4ed1-aeed-5e4457923511.png",
      title: "IOG Global",
      category: "WordPress Corporate Site",
    },
    {
      url: "https://charityforlife.lk/",
      image: "/lovable-uploads/20098842-4e3f-40e0-a68d-4593037eb0fe.png",
      title: "Charity For Life",
      category: "WordPress Non-Profit Site",
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
      id: "visual-digital-stars",
      image: "/lovable-uploads/ab478334-175a-4af6-b36f-4295a9d1901e.png",
      title: "Teaching Digital Navigation",
      category: "Educational Design",
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {wordpressProjects.map((project, index) => (
                <WordPressProjectCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  url={project.url}
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
