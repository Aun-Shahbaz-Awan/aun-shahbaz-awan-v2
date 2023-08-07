import React from "react";
import Project_01 from "../assets/projects/gwaysbc.app.full.png";
import { FiLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

function Projects() {
  return (
    <div className="px-20 mt-28">
      <div className="text-center mb-10">
        <h5 className="text-5xl font-bold custom-stroke">Projects</h5>
        <p className="text-lg font-medium leading-10">I have Done</p>
      </div>
      <div className="flex justify-center text-dark">
        <div className="bg-[#DDFAEE] rounded-xl p-7">
          <div
            style={{ backgroundImage: `url(${Project_01})` }}
            className=" w-auto h-80 sm:w-[584px] sm:h-[484px] bg-cover rounded-xl shadow"
          />
          <h4 className="leading-8 mt-5 text-xl font-semibold ml-1">
            Financial DAPP
          </h4>
          <p className="ml-1">
            Use DeFi to leverage digital asset opportunities.
          </p>
          <div className="flex items-center justify-between mt-5">
            <div className="w-8/12 bg-dark text-white flex items-center justify-between px-3 py-2 rounded-md">
              <a href="https://gwaysbc.app/" className=" underline">
                https://gwaysbc.app/
              </a>
              <FiLink className="" />
            </div>
            <div className="flex justify-between items-center my-auto cursor-pointer">
              <AiFillGithub className=" mr-1" />
              <p className=" text-sm font-medium">Source Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
