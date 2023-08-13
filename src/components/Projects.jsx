import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { LiaChevronLeftSolid, LiaChevronRightSolid } from "react-icons/lia";
import { projects } from "../utils/projects";
import AnimOne from "../assets/animations/lines-1.svg";
import AnimTwo from "../assets/animations/lines-2.svg";
import "../styles/custom.css";

function Projects() {
  const [mainProjectIndex, setMainProjectIndex] = useState(0);

  return (
    <div className="my-40 relative">
      <img
        src={AnimOne}
        alt="anim"
        className="absolute w-5/12 right-10 top-20 -z-10"
      />
      <div className="text-center mb-20 px-20">
        <h5 className="text-2xl md:text-5xl text-white font-bold font-poppins py-2">
          Blockchain Projects
        </h5>
        <p className="text-lg font-medium leading-10">I have Done!</p>
      </div>
      {/* CARDS ----------------------------------------------------------------- */}
      <div className="flex items-center justify-between">
        <div
          onClick={() => {
            if (mainProjectIndex - 4 < 0)
              setMainProjectIndex(projects.length - 4);
            else setMainProjectIndex(mainProjectIndex - 1);
          }}
          className="w-12 h-28 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-r-xl border-y border-r border-white/60 cursor-pointer"
        >
          <LiaChevronLeftSolid className="text-4xl text-white" />
        </div>
        <div className="hidden lg:grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-10 text-dark overflow-hidden flip-wrapper px-10">
          {/* 1st ----------------------------------------------------------------- */}
          {projects
            .slice(mainProjectIndex, mainProjectIndex + 4)
            .map((project) => (
              <div className="bg-gray bg-opacity-40 backdrop-blur-md border border-gray/40 rounded-lg shadow-xl col-span-3 z-40">
                <div className="h-10 border-b border-black flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-red-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.8rem]" />
                    <div className="bg-yellow-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
                    <div className="bg-green-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
                  </div>
                  <div className="text-xs rounded-full mr-[0.5rem]">
                    <div
                      onClick={() => window.open(`${project.source}`, "_blank")}
                      className="flex justify-between items-center my-auto cursor-pointer hover:bg-black hover:text-gray hover:mt-1 hover:mr-1 rounded-full px-1 py-0.5 group"
                    >
                      <AiFillGithub className="group-hover:mr-1 text-xl  group-hover:text-lg" />
                      <p className="mr-1 text-xs hidden group-hover:block group-hover:text-white ">
                        Source Code
                      </p>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-3">
                  <div
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                    className="w-auto h-80 bg-cover rounded-lg shadow-xl"
                  />
                  <h4 className="leading-8 mt-3 text-base font-semibold text-white ml-1">
                    {project.title}
                  </h4>
                  <p className="ml-1 text-xs text-white">
                    {project.description}
                    {/* {project.description.length > 40
                      ? project.description.slice(0, 40).concat("...")
                      : project.description} */}
                  </p>
                  <div className="flex items-center justify-between text-xs mt-2">
                    <div
                      onClick={() => window.open(project.url, "_blank")}
                      className="w-full bg-dark text-white flex items-center justify-between shadow-lg px-3 py-2 rounded-lg cursor-pointer"
                    >
                      <a href={project.url} _blank className=" underline">
                        {project.url.length > 30
                          ? project.url.slice(0, 30).concat("...")
                          : project.url}
                      </a>
                      <FiLink className="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-10 text-dark overflow-hidden flip-wrapper px-10">
          {projects
            .slice(mainProjectIndex, mainProjectIndex + 2)
            .map((project) => (
              <div className="bg-gray bg-opacity-40 backdrop-blur-md border border-gray/40 rounded-lg shadow-xl col-span-3 z-40">
                <div className="h-10 border-b border-black flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-red-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.8rem]" />
                    <div className="bg-yellow-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
                    <div className="bg-green-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
                  </div>
                  <div className="text-xs rounded-full mr-[0.5rem]">
                    <div
                      onClick={() => window.open(`${project.source}`, "_blank")}
                      className="flex justify-between items-center my-auto cursor-pointer hover:bg-black hover:text-gray hover:mt-1 hover:mr-1 rounded-full px-1 py-0.5 group"
                    >
                      <AiFillGithub className="group-hover:mr-1 text-xl  group-hover:text-lg" />
                      <p className="mr-1 text-xs hidden group-hover:block group-hover:text-white ">
                        Source Code
                      </p>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-3">
                  <div
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                    className="w-auto h-80 bg-cover rounded-lg shadow-xl"
                  />
                  <h4 className="leading-8 mt-3 text-base font-semibold text-white ml-1">
                    {project.title}
                  </h4>
                  <p className="ml-1 text-xs text-white">
                    {project.description}
                    {/* {project.description.length > 40
                      ? project.description.slice(0, 40).concat("...")
                      : project.description} */}
                  </p>
                  <div className="flex items-center justify-between text-xs mt-2">
                    <div
                      onClick={() => window.open(project.url, "_blank")}
                      className="w-full bg-dark text-white flex items-center justify-between shadow-lg px-3 py-2 rounded-lg cursor-pointer"
                    >
                      <a href={project.url} _blank className=" underline">
                        {project.url.length > 30
                          ? project.url.slice(0, 30).concat("...")
                          : project.url}
                      </a>
                      <FiLink className="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="grid md:hidden grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-10 text-dark overflow-hidden flip-wrapper px-10">
          {/* 1st ----------------------------------------------------------------- */}
          {projects
            .slice(mainProjectIndex, mainProjectIndex + 1)
            .map((project) => (
              <div className="bg-gray bg-opacity-40 backdrop-blur-md border border-gray/40 rounded-lg shadow-xl col-span-3 z-40">
                <div className="h-10 border-b border-black flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-red-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.8rem]" />
                    <div className="bg-yellow-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
                    <div className="bg-green-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
                  </div>
                  <div className="text-xs rounded-full mr-[0.5rem]">
                    <div
                      onClick={() => window.open(`${project.source}`, "_blank")}
                      className="flex justify-between items-center my-auto cursor-pointer hover:bg-black hover:text-gray hover:mt-1 hover:mr-1 rounded-full px-1 py-0.5 group"
                    >
                      <AiFillGithub className="group-hover:mr-1 text-xl  group-hover:text-lg" />
                      <p className="mr-1 text-xs hidden group-hover:block group-hover:text-white ">
                        Source Code
                      </p>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-3">
                  <div
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                    className="w-auto h-80 bg-cover rounded-lg shadow-xl"
                  />
                  <h4 className="leading-8 mt-3 text-base font-semibold text-white ml-1">
                    {project.title}
                  </h4>
                  <p className="ml-1 text-xs text-white">
                    {project.description}
                    {/* {project.description.length > 40
                      ? project.description.slice(0, 40).concat("...")
                      : project.description} */}
                  </p>
                  <div className="flex items-center justify-between text-xs mt-2">
                    <div
                      onClick={() => window.open(project.url, "_blank")}
                      className="w-full bg-dark text-white flex items-center justify-between shadow-lg px-3 py-2 rounded-lg cursor-pointer"
                    >
                      <a href={project.url} _blank className=" underline">
                        {project.url.length > 30
                          ? project.url.slice(0, 30).concat("...")
                          : project.url}
                      </a>
                      <FiLink className="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div
          onClick={() => {
            if (mainProjectIndex + 4 === projects.length)
              setMainProjectIndex(0);
            else setMainProjectIndex(mainProjectIndex + 1);
          }}
          className="w-12 h-28 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-l-xl border-y border-l border-white/60 cursor-pointer"
        >
          <LiaChevronRightSolid className="text-4xl text-white" />
        </div>
      </div>

      {/* <div
          onClick={() => {
            if (mainProjectIndex + 4 === projects.length)
              setMainProjectIndex(0);
            else setMainProjectIndex(mainProjectIndex + 1);
          }}
          className="w-1/12 flex items-center justify-center cursor-pointer"
        >
          <LiaChevronRightSolid className="text-5xl text-white" />
        </div> */}

      <img
        src={AnimTwo}
        alt="anim"
        className="absolute reve w-5/12 -left-10 -bottom-10 px-20 -z-10"
      />
    </div>
  );
}

export default Projects;
