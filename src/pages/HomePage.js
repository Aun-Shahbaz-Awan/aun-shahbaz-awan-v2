import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import BMC from "../assets/bmc-button.png";
import CoffeeModel from "../helpers/CoffeeModel";
// import Skills from "../components/Skills";

function HomePage() {
  const [isBMCShows, setIsBMCShows] = useState(false);
  const [isBMCOpen, setIsBMCOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 50) setIsBMCShows(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <CoffeeModel isOpen={isBMCOpen} setIsOpen={setIsBMCOpen} />
      <HeroSection />
      <Projects />
      <Features />
      <Testimonial />
      <Footer />
      {isBMCShows && (
        <img
          src={BMC}
          alt="buy me a coffee!"
          onClick={() => {
            setIsBMCOpen(true);
          }}
          className="h-10 fixed bottom-10 right-10 cursor-pointer hover:scale-105 shadow-md hover:shadow-neutral-500 rounded-xl"
        />
      )}
    </div>
  );
}

export default HomePage;
