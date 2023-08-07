import React from "react";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

function HomePage() {
  return (
    <React.Fragment>
      <HeroSection />
      <Projects />
      {/* <Poster /> */}
    </React.Fragment>
  );
}

export default HomePage;
