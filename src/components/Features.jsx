import React from "react";
import AnimTree from "../assets/animations/lines-3.svg";

function Features() {
  return (
    <div className="w-full flex flex-col md:flex-row relative items-stretch gap-10 px-20 mb-20">
      <div className="w-full md:w-5/12  bg-gradient-to-br from-[#F2F2F2]/90 via-[#C4C4C4]/70 to-[#9E9E9E]/60 text-dark backdrop-blur-md border border-gray/40 rounded-xl">
        <div className=" h-10 border-b border-black flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-red-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.8rem]" />
            <div className="bg-yellow-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
            <div className="bg-green-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
          </div>
          <div className="text-xs rounded-full px-3 py-0.5 mr-3">skills</div>
        </div>
        <div className="px-5 py-6">
          <ul className="list-disc ml-5">
            <li>
              <strong>Programming Languages:</strong> JavaScript, HTML, CSS,
              Solidity.
            </li>
            <li>
              <strong>Front-End Technologies:</strong> CSS frameworks (e.g.,
              Bootstrap, Tailwind CSS), UI/UX design principles.
            </li>
            <li>
              <strong>Frameworks/Libraries:</strong> React.js, Next.js, Node
              Express.
            </li>
            <li>
              <strong>Blockchain Technologies:</strong> Solidity, Web3.js,
              Ethers.js, Moralis, IPFS.
            </li>
            <li>
              <strong>ERC Standards:</strong> ERC-20, ERC-1155, ERC-721,
              ERC-721A.
            </li>
            <li>
              <strong>Version Control:</strong> Git.
            </li>
            <li>
              <strong>Tools/Platforms:</strong> Netlify, Cpanel.
            </li>
            <li>
              <strong>Project Management:</strong> Github Projects, Jira.
            </li>
            <li>
              <strong>Communication and Leadership:</strong> Team Management,
              Client Collaboration, Mentoring.
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap text-xs gap-2 px-6 mb-6">
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            web-programming
          </h5>
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            Blockchain
          </h5>
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            web 3.0
          </h5>
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            Ethers Js
          </h5>
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            Node
          </h5>
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            React Js
          </h5>
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            Next Js
          </h5>
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            Express Js
          </h5>
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            Moralis
          </h5>
          <h5 className=" bg-dark rounded-full text-gray  uppercase px-4 py-1">
            IPFS
          </h5>
        </div>
      </div>
      <div className="w-full md:w-7/12 bg-gradient-to-br from-[#353535] via-[#212121] to-[#101010] bg-dark rounded-xl">
        <div className=" h-10 border-b border-black flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-red-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.8rem]" />
            <div className="bg-yellow-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
            <div className="bg-green-500 h-[0.8rem] w-[0.8rem] rounded-full ml-[0.6rem]" />
          </div>
          <div className=" shadow-inner text-xs rounded-full tracking-wide px-3 py-0.5 mr-3">
            Experiance
          </div>
        </div>
        <div className="px-5 py-6">
          <strong>2021 - 2022</strong>
          <h3
            onClick={() => {
              window.open("https://thekaizenglobal.com/", "_blank");
            }}
            className="text-lg font-bold underline cursor-pointer"
          >
            The Kaizen Global | Rawalpindi, Pakistan
          </h3>
          <h4 className=" text-base font-medium mb-2">
            Full Stack Website Development
          </h4>
          Developed web applications using React.js, Next.js, and other relevant
          technologies. Implemented Solidity smart contracts and integrated
          blockchain technology into web solutions. Collaborated with
          cross-functional teams to deliver responsive and user-friendly
          websites.
        </div>
        <div className="px-5 py-6">
          <strong>2022 - Present</strong>
          <h3
            onClick={() => {
              window.open("https://thekaizenglobal.com/", "_blank");
            }}
            className="text-lg font-bold underline cursor-pointer"
          >
            The Kaizen Global | Rawalpindi, Pakistan
          </h3>
          <h4 className=" text-base font-medium mb-2">Development Team Lead</h4>
          <ul className="list-disc ml-5">
            <li>
              Led the design and development of several web projects, including
              those designed by myself, using React.js, Next.js, and other
              relevant technologies.
            </li>
            <li>
              Collaborated with clients to gather requirements, define project
              scope, and deliver tailored web solutions.
            </li>
            <li>
              Managed project timelines, allocated resources, and ensured timely
              delivery of high- quality websites.
            </li>
            <li>
              Conducted code reviews, provided technical guidance, and mentored
              junior developers.
            </li>
            <li>
              Developed a deep understanding of front-end technologies, UI/UX
              design principles, and emerging web development trends.
            </li>
          </ul>
        </div>
      </div>
      <img
        src={AnimTree}
        alt="anim"
        className="absolute w-7/12 -left-10 -bottom-28 px-20 -z-10"
      />
    </div>
  );
}

export default Features;
