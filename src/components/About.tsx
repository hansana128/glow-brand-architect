import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-600/30 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">ABOUT </span>
            <span className="text-blue-400">MALSHI</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A passionate web developer and digital marketer dedicated to crafting
            innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-r from-blue-600/40 to-blue-800/50 -z-10"></div>
            <img
              src="/lovable-uploads/8ce66691-2b2c-43b5-b7e1-0c982d79d88c.png"
              alt="Malshi Hansana"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* Text Content Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              My Story & Vision
            </h3>
            <p className="text-gray-300 mb-6">
              From coding dynamic websites to driving impactful digital marketing
              campaigns, I'm all about creating value. My mission is to transform
              ideas into tangible digital realities.
            </p>
            <p className="text-gray-300 mb-6">
              I blend technical expertise with creative strategies to deliver
              cutting-edge solutions. Whether it's developing a responsive web
              application or crafting a targeted marketing strategy, I approach
              each project with passion and precision.
            </p>
            <p className="text-gray-300">
              Let's collaborate and bring your vision to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
