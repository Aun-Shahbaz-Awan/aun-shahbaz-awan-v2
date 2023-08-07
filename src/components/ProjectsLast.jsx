import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { projects } from "../utils/projects";

function Projects() {
  const [mainProjectIndex, setMainProjectIndex] = useState(0);

  return (
    <div className="px-20 my-40">
      <div className="text-center mb-20">
        <h5 className="text-5xl font-bold font-poppins">Blockchain Projects</h5>
        <p className="text-lg font-medium leading-10">I have Done!</p>
      </div>
      {/* CARDS ----------------------------------------------------------------- */}
      <div className="flex justify-center text-dark overflow-hidden flip-wrapper">
        {/* Previous ------------------------------------------------------------ */}
        <div className="flip-left -mr-40">
          <div
            onClick={() => {
              if (mainProjectIndex - 1 === -1)
                setMainProjectIndex(projects.length - 1);
              else setMainProjectIndex(mainProjectIndex - 1);
            }}
            className="bg-[#DDFAEE] rounded-xl p-7 shadow-xl z-10 scale-75 opacity-50 cursor-pointer"
          >
            <div
              style={{
                backgroundImage: `url(${
                  mainProjectIndex - 1 === -1
                    ? projects[projects.length - 1].image
                    : projects[mainProjectIndex - 1].image
                })`,
              }}
              className=" w-auto h-80 sm:w-[584px] sm:h-[484px] bg-cover rounded-xl shadow-lg"
            />
            <h4 className="leading-8 mt-5 text-xl font-semibold ml-1">
              {mainProjectIndex - 1 === -1
                ? projects[projects.length - 1].title
                : projects[mainProjectIndex - 1].title}
            </h4>
            <p className="ml-1">
              {mainProjectIndex - 1 === -1
                ? projects[projects.length - 1].description
                : projects[mainProjectIndex - 1].description}
            </p>
            <div className="flex items-center justify-between mt-5">
              <div
                onClick={() => window.open("https://gwaysbc.app/", "_blank")}
                className="w-8/12 bg-dark text-white flex items-center justify-between shadow-lg shadow-slate-500 px-3 py-2 rounded-md cursor-pointer"
              >
                <a
                  href={
                    mainProjectIndex - 1 === -1
                      ? projects[projects.length - 1].url
                      : projects[mainProjectIndex - 1].url
                  }
                  _blank
                  className=" underline"
                >
                  {mainProjectIndex - 1 === -1
                    ? projects[projects.length - 1].url
                    : projects[mainProjectIndex - 1].url}
                </a>
                <FiLink className="" />
              </div>
              <div className="flex justify-between items-center my-auto cursor-pointer">
                <AiFillGithub className=" mr-1" />
                <p className=" text-sm font-medium mr-1">Source Code</p>
              </div>
            </div>
          </div>
        </div>
        {/* Main ---------------------------------------------------------------- */}
        <div className="bg-[#DDFAEE] rounded-xl p-7 shadow-xl z-40">
          <div
            style={{
              backgroundImage: `url(${projects[mainProjectIndex].image})`,
            }}
            className=" w-auto h-80 sm:w-[584px] sm:h-[484px] bg-cover rounded-xl shadow-lg"
          />
          <h4 className="leading-8 mt-5 text-xl font-semibold ml-1">
            {projects[mainProjectIndex].title}
          </h4>
          <p className="ml-1">{projects[mainProjectIndex].description}</p>
          <div className="flex items-center justify-between mt-5">
            <div
              onClick={() => window.open("https://gwaysbc.app/", "_blank")}
              className="w-8/12 bg-dark text-white flex items-center justify-between shadow-lg shadow-slate-500 px-3 py-2 rounded-md cursor-pointer"
            >
              <a
                href={projects[mainProjectIndex].url}
                _blank
                className=" underline"
              >
                {projects[mainProjectIndex].url}
              </a>
              <FiLink className="" />
            </div>
            <div
              onClick={() =>
                window.open(`${projects[mainProjectIndex].source}`, "_blank")
              }
              className="flex justify-between items-center my-auto cursor-pointer"
            >
              <AiFillGithub className=" mr-1" />
              <p className=" text-sm font-medium mr-1">Source Code</p>
            </div>
          </div>
        </div>
        {/* Next ---------------------------------------------------------------- */}
        <div className="flip-right -ml-40">
          <div
            onClick={() => {
              if (mainProjectIndex + 1 === projects.length)
                setMainProjectIndex(0);
              else setMainProjectIndex(mainProjectIndex + 1);
            }}
            className="bg-[#DDFAEE] rounded-xl p-7 shadow-xl z-10 scale-75 opacity-50 cursor-pointer"
          >
            <div
              style={{
                backgroundImage: `url(${
                  mainProjectIndex + 1 === projects.length
                    ? projects[0].image
                    : projects[mainProjectIndex + 1].image
                })`,
              }}
              className=" w-auto h-80 sm:w-[584px] sm:h-[484px] bg-cover rounded-xl shadow-lg"
            />
            <h4 className="leading-8 mt-5 text-xl font-semibold ml-1">
              {mainProjectIndex + 1 === projects.length
                ? projects[0].title
                : projects[mainProjectIndex + 1].title}
            </h4>
            <p className="ml-1">
              {mainProjectIndex + 1 === projects.length
                ? projects[0].description
                : projects[mainProjectIndex + 1].description}
            </p>
            <div className="flex items-center justify-between mt-5">
              <div
                onClick={() => window.open("https://gwaysbc.app/", "_blank")}
                className="w-8/12 bg-dark text-white flex items-center justify-between shadow-lg shadow-slate-500 px-3 py-2 rounded-md cursor-pointer"
              >
                <a
                  href={
                    mainProjectIndex + 1 === projects.length
                      ? projects[0].url
                      : projects[mainProjectIndex + 1].url
                  }
                  _blank
                  className=" underline"
                >
                  {mainProjectIndex + 1 === projects.length
                    ? projects[0].url
                    : projects[mainProjectIndex + 1].url}
                </a>
                <FiLink className="" />
              </div>
              <div className="flex justify-between items-center my-auto cursor-pointer">
                <AiFillGithub className=" mr-1" />
                <p className=" text-sm font-medium mr-1">Source Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Arrow */}
      <div className="relative flex justify-center mt-5 z-50 sm:hidden">
        <div
          onClick={() => {
            if (mainProjectIndex - 1 === -1)
              setMainProjectIndex(projects.length - 1);
            else setMainProjectIndex(mainProjectIndex - 1);
          }}
          className="absolute flex items-center cursor-pointer py-1 rounded-full mr-32"
        >
          <CgArrowLeft className="text-3xl text-gray " />
          Prev
        </div>
        <div
          onClick={() => {
            if (mainProjectIndex + 1 === projects.length - 1)
              setMainProjectIndex(0);
            else setMainProjectIndex(mainProjectIndex + 1);
          }}
          className=" absolute flex items-center cursor-pointer py-1 rounded-full ml-32"
        >
          {" "}
          Next
          <CgArrowRight className="text-3xl text-gray" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
