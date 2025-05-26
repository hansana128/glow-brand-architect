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

// WordPress project card component
const WordPressProjectCard = ({ image, title, category, url }: WordPressProjectProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="portfolio-card group block"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-gray-300">{category}</p>
            </div>
            <ExternalLink className="text-brand-orange" size={20} />
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
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-gray-300">{category}</p>
            </div>
            <ExternalLink className="text-brand-orange" size={20} />
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

// Video card component
const VideoCard = ({ video, onPlay }: { video: VideoProps, onPlay: (video: VideoProps) => void }) => {
  return (
    <div
      className="video-card relative rounded-xl overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(255,94,58,0.5)] border border-brand-orange"
      onClick={() => onPlay(video)}
    >
      <div className="aspect-video relative">
        <img
          src={video.image}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="p-3 rounded-full bg-brand-orange/80 text-white">
            <Play size={24} />
          </div>
        </div>
      </div>
      <div className="p-3 bg-black/80 text-white">
        <h3 className="text-sm font-semibold">{video.title}</h3>
      </div>
    </div>
  );
};

// Image preview component
const ImagePreviewCard = ({ project, onClick }: { project: PortfolioItemProps, onClick: (project: PortfolioItemProps) => void }) => {
  return (
    <div 
      className="portfolio-card group cursor-pointer shadow-[0_0_15px_rgba(255,94,58,0.5)] border border-brand-orange rounded-xl overflow-hidden"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
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
      url: "https://preview--shimmering-web-garden.lovable.app/",
      image: "/lovable-uploads/d8e94b00-1cfd-418a-9eb8-8b8d3dba03ff.png",
      title: "Web Garden",
      category: "React Application",
    },
  ];
  
  // AI Video Content
  const videoProjects = [
    {
      id: "ai-explainer",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "AI Explainer",
      category: "Educational Video",
      videoUrl: "#",
    },
    {
      id: "ai-promo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Product Promo",
      category: "Marketing Video",
      videoUrl: "#",
    },
    {
      id: "ai-tutorial",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Software Tutorial",
      category: "Tutorial Video",
      videoUrl: "#",
    },
    {
      id: "ai-commercial",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Brand Commercial",
      category: "Promotional Video",
      videoUrl: "#",
    },
    // Added videos from the previous VideoGallery component
    {
      id: "video1",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Brand Promotion Video",
      category: "Marketing",
      videoUrl: "#",
    },
    {
      id: "video2",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "Product Showcase",
      category: "Product Video",
      videoUrl: "#",
    },
    {
      id: "video3",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Client Testimonial",
      category: "Testimonial",
      videoUrl: "#",
    },
    {
      id: "video4",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Company Overview",
      category: "Corporate",
      videoUrl: "#",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <DialogContent className="max-w-4xl bg-brand-black border border-brand-orange">
          <DialogHeader>
            <DialogTitle className="text-white">{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-black/30 rounded-md flex items-center justify-center">
            {/* Replace with actual video player */}
            <div className="text-center text-gray-300">
              <Play size={48} className="mx-auto text-brand-orange mb-2" />
              <p>Video player would load here</p>
              <p className="text-xs mt-1">Demo purposes only</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-brand-black border border-brand-orange">
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
