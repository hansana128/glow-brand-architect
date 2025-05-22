
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ScrollToTop from "../components/ScrollToTop";

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  challenges: string;
  solutions: string;
  results: string;
}

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we're using sample data
    const projects: PortfolioProject[] = [
      {
        id: "ecommerce-website",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        title: "E-Commerce Website",
        category: "Web Development",
        description: "A fully responsive e-commerce platform built for a boutique clothing brand. The site features a seamless shopping experience with integrated payment processing, user accounts, and order tracking.",
        tools: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
        challenges: "Creating a responsive design that looks perfect on all devices while maintaining high performance and SEO optimization.",
        solutions: "Implemented a mobile-first design approach and used lazy loading for images and components to ensure fast page loads even on slower connections.",
        results: "Increased online sales by 35% in the first quarter after launch, with a 25% reduction in cart abandonment rates."
      },
      {
        id: "brand-identity",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        title: "Brand Identity Design",
        category: "UI/UX Design",
        description: "Complete brand identity redesign for a tech startup entering a competitive market. The project included logo design, color palette definition, typography selection, and creation of brand guidelines.",
        tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "InVision"],
        challenges: "Creating a distinctive and memorable brand identity that differentiates from competitors while conveying the company's core values and mission.",
        solutions: "Conducted extensive market research and competitor analysis to identify gaps and opportunities in visual branding. Used mood boards and multiple iteration cycles with client feedback.",
        results: "The new brand identity received overwhelmingly positive feedback, with brand recognition metrics improving by 40% in post-launch surveys."
      },
      {
        id: "linkedin-campaign",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        title: "LinkedIn Growth Campaign",
        category: "Social Media Marketing",
        description: "Strategic LinkedIn marketing campaign designed to position the client as a thought leader in their industry while growing their network and generating qualified B2B leads.",
        tools: ["LinkedIn Sales Navigator", "Canva", "Hootsuite", "Google Analytics"],
        challenges: "Breaking through the noise on a platform saturated with content while maintaining authenticity and providing genuine value to the audience.",
        solutions: "Developed a content calendar focusing on educational carousel posts, industry insights, and sharing client success stories. Implemented strategic engagement with industry leaders.",
        results: "Grew the client's LinkedIn following by 300% over six months, with a 45% increase in website traffic from LinkedIn and 12 qualified leads generated directly from the platform."
      },
      {
        id: "personal-portfolio",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        title: "Personal Portfolio",
        category: "Web Development",
        description: "Custom portfolio website for a digital artist showcasing their work in an immersive, interactive experience. The site features animated transitions, project filtering, and a unique layout that complements the artist's style.",
        tools: ["React", "GSAP", "Three.js", "Netlify", "CSS Grid"],
        challenges: "Creating a highly visual and interactive experience without compromising load times or accessibility.",
        solutions: "Used progressive loading techniques and optimized assets. Implemented keyboard navigation and semantic HTML for accessibility while maintaining the creative design.",
        results: "The portfolio helped the client secure three major commercial projects within two months of launch, with visitors spending an average of 4.5 minutes exploring the site."
      },
      {
        id: "seo-optimization",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        title: "SEO Optimization",
        category: "Digital Marketing",
        description: "Complete SEO overhaul for an established business whose online visibility had declined due to algorithm changes and increased competition. The project included technical SEO fixes, content strategy, and ongoing optimization.",
        tools: ["SEMrush", "Ahrefs", "Google Search Console", "Google Analytics", "Yoast SEO"],
        challenges: "Identifying and addressing technical SEO issues while developing a content strategy that would improve rankings without disrupting the site's existing authority.",
        solutions: "Conducted a comprehensive SEO audit, fixed technical issues, implemented schema markup, and developed a keyword-focused content calendar based on gap analysis.",
        results: "Achieved first-page rankings for 15 target keywords within four months, resulting in a 65% increase in organic traffic and 28% increase in organic conversions."
      },
      {
        id: "mobile-app",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
        title: "Mobile App Design",
        category: "UI/UX Design",
        description: "Design of a mobile app for a fitness brand, focusing on creating an intuitive user experience that encourages daily engagement and tracks user progress toward fitness goals.",
        tools: ["Figma", "Sketch", "Adobe XD", "Principle", "Maze"],
        challenges: "Creating an interface that appeals to both fitness beginners and experienced athletes while making complex tracking features accessible and intuitive.",
        solutions: "Implemented a progressive disclosure approach to features and conducted multiple rounds of user testing with both target audiences to refine the UI based on actual user behavior.",
        results: "The app launched with a 4.8/5 star rating, with user retention 35% higher than industry average after the first month."
      },
    ];

    const foundProject = projects.find((p) => p.id === id) || null;
    setProject(foundProject);
    setLoading(false);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-300 mb-6">The project you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="back-btn">
          <ArrowLeft size={16} />
          <span>Back to Homepage</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Back Button */}
        <Link to="/#portfolio" className="back-btn mb-8 inline-block">
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>
        
        {/* Project Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <div className="text-brand-orange font-semibold mb-6">{project.category}</div>
        </div>
        
        {/* Hero Image */}
        <div className="w-full rounded-xl overflow-hidden mb-12 shadow-[0_0_20px_rgba(255,94,58,0.5)] border border-brand-orange/30">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Project Description */}
        <div className="glassmorphism-card p-8 mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
          <p className="text-gray-300 mb-6">{project.description}</p>
          
          <h3 className="text-xl font-bold text-white mb-3">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, index) => (
              <span 
                key={index} 
                className="bg-brand-blue/50 text-white px-3 py-1 rounded-full text-sm border border-brand-orange/30 shadow-[0_0_5px_rgba(255,94,58,0.3)]"
              >
                {tool}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3">Challenges</h3>
          <p className="text-gray-300 mb-6">{project.challenges}</p>
          
          <h3 className="text-xl font-bold text-white mb-3">Solutions</h3>
          <p className="text-gray-300 mb-6">{project.solutions}</p>
          
          <h3 className="text-xl font-bold text-white mb-3">Results</h3>
          <p className="text-gray-300">{project.results}</p>
        </div>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link to="/#contact" className="glow-btn">
            <span>Discuss a Similar Project</span>
          </Link>
          <Link to="/#portfolio" className="back-btn">
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
      
      <ScrollToTop />
    </div>
  );
};

export default PortfolioDetail;
