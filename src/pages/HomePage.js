import React from "react";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Features from "../components/Features";
// import Skills from "../components/Skills";

function HomePage() {
  return (
    <React.Fragment>
      <HeroSection />
      <Projects />
      <Features />
      {/* <Skills /> */}
      {/* <Poster /> */}
    </React.Fragment>
  );
}

export default HomePage;
