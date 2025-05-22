
import React, { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  videoUrl: string;
}

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: "video1",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Brand Promotion Video",
      videoUrl: "#", // Replace with actual video URL
    },
    {
      id: "video2",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "Product Showcase",
      videoUrl: "#", // Replace with actual video URL
    },
    {
      id: "video3",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Client Testimonial",
      videoUrl: "#", // Replace with actual video URL
    },
    {
      id: "video4",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Company Overview",
      videoUrl: "#", // Replace with actual video URL
    },
  ];

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <section id="videos" className="py-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 right-40 w-80 h-80 rounded-full bg-brand-orange/20 blur-[90px]"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-[70px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-white">MY </span>
            <span className="text-brand-orange">VIDEOS</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my video production and editing skills across various projects
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* <!-- Upload your videos here --> */}
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card relative rounded-xl overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(255,94,58,0.5)] border border-brand-orange"
              onClick={() => openVideoModal(video)}
            >
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
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
          ))}
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
    </section>
  );
};

export default VideoGallery;
