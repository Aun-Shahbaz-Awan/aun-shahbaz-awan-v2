import React from "react";
import { BsLinkedin, BsStackOverflow, BsGithub } from "react-icons/bs";
import Slide01 from "./sub/app-slides/Slide01";
import Slide02 from "./sub/app-slides/Slide02";
import Slide03 from "./sub/app-slides/Slide03";
import "../styles/glitch.css";

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row md:pl-20 mt-10">
      <div className="w-full md:w-5/12 mt-6 h-auto px-10 md:px-0">
        <h2
          className="hero glitch layers text-3xl font-bold uppercase mb-3"
          data-text="Web3 developer"
        >
          <span>
            Web3 <br />
            developer
          </span>
        </h2>
        <p className="text-justify mb-4">
          I am Aun Shahbaz, an experienced{" "}
          <strong className=" uppercase">web3 developer </strong>
          and team lead with expertise in React.js, Next.js, Solidity, Web3, and
          blockchain integration. Demonstrated success in designing and
          developing high-quality websites, leading development teams, and
          leveraging emerging technologies. Committed to delivering innovative
          solutions and driving the success of web projects. Seeking a
          challenging role to utilize technical expertise, leadership skills,
          and web development experience.
        </p>
        <div className="flex items-center text-base gap-3">
          <div className="flex items-center border rounded-full px-1 py-px">
            <BsLinkedin className="mr-2 text-lg rounded-full" />
            <span className="pr-1">LinkedIn</span>
          </div>
          <div className="flex items-center border rounded-full px-1 py-px">
            <BsGithub className="mr-2 text-lg" />
            <span className="pr-1">Github</span>
          </div>
          <div className="flex items-center border rounded-full px-1 py-px">
            <BsStackOverflow className="mr-2 text-sm ml-1" />
            <span className="pr-1">StackOverflow</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-7/12 mt-12 xl:ml-24 lg:ml-20 md:ml-0 relative overflow-hidden">
        <Slide01 />
        <Slide02 />
        <Slide03 />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent md:to-transparent to-dark"></div>
      </div>
    </div>
  );
}

export default HeroSection;
