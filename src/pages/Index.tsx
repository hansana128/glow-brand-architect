
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingChat />
      <ScrollToTop />
    </div>
  );
};

export default Index;
