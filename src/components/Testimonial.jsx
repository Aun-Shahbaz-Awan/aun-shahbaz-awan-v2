import React from "react";
import AnimFour from "../assets/animations/lines-4.svg";
import edgar_emilio from "../assets/clients/edgar_emilio.webp";
import canada from "../assets/clients/canada.png";
import us from "../assets/clients/us.png";
import uk from "../assets/clients/uk.png";
import nether from "../assets/clients/netherlands.png";
import maxico from "../assets/clients/maxico.png";

function Testimonial() {
  return (
    <div className="w-full px-10 pt-16 md:pt-24 mb-16 md:mb-24 text-gray-800 relative">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 font-poppins text-gray-600">
            What people <br />
            are saying.
          </h1>
          <h3 className="text-xl mb-5 font-light font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          </div>
        </div>
        <div className="-mx-3 md:flex items-start">
          <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rounded-lg bg-white/30 backdrop-blur-md border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  <div className="text-xl font-semibold text-center font-poppins leading-[2.8rem]">
                    F
                  </div>
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Felipe Montoy
                  </h6>
                  <div className="flex items-center text-xs mt-1">
                    <img src={us} alt="" className="h-5 mr-2" />
                    United States
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Excellent working ethics. A committed developer eager to learn
                  everyday and with tons of discipline and hard-working habits!
                  Highly recommended in DeFi.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white/30 backdrop-blur-md border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  <div className="text-xl font-semibold text-center font-poppins leading-[2.8rem]">
                    O
                  </div>
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Oleg.
                  </h6>
                  <div className="flex items-center text-xs mt-1">
                    <img src={canada} alt="" className="h-5 mr-2" />
                    Canada
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Best experience with very professional developer!!!! Fully
                  recommend!!!!
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white/30 backdrop-blur-md border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  <div className="text-xl font-semibold text-center font-poppins leading-[2.8rem]">
                    V
                  </div>
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Valentyn101
                  </h6>
                  <div className="flex items-center text-xs mt-1">
                    <img src={nether} alt="" className="h-5 mr-2" />
                    Netherlands
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Very proffesional, eye for detail and concept, not just
                  producing, but making an effort to make the project better.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rounded-lg bg-white/30 backdrop-blur-md border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  <div className="text-xl font-semibold text-center font-poppins leading-[2.8rem]">
                    A
                  </div>
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Alexander Asante.
                  </h6>
                  <div className="flex items-center text-xs mt-1">
                    <img src={us} alt="" className="h-5 mr-2" />
                    United States
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Very good developer and he communicates well. Aun is very
                  professional and does a good job.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white/30 backdrop-blur-md border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  <div className="text-xl font-semibold text-center font-poppins leading-[2.8rem]">
                    D
                  </div>
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    DioSend.
                  </h6>
                  <div className="flex items-center text-xs mt-1">
                    <img src={uk} alt="" className="h-5 mr-2" />
                    United Kingdom
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Aun went above and beyond to help me realise the project.
                  Always available, great communication, knowledge of subject
                  was next level. We will be working together again to develop
                  the project further in the near future. Would 100 percent
                  recommend.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white/30 backdrop-blur-md border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  {/* <img src={maxico} alt="" /> */}
                  <div className="text-xl font-semibold text-center font-poppins leading-[2.8rem]">
                    M
                  </div>
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Lavi76.
                  </h6>
                  <div className="flex items-center text-xs mt-1">
                    <img src={maxico} alt="" className="h-5 mr-2" />
                    Maxico
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Great seller, amazing service. I recommend him to everybody
                  that is looking for a professional.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rounded-lg bg-white/30 backdrop-blur-md border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  <img src={edgar_emilio} alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Edgar Emilio.
                  </h6>
                  <div className="flex items-center text-xs mt-1">
                    <img src={us} alt="" className="h-5 mr-2" />
                    United States
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Amazing work. Will hire again. Thank you!
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white/30 backdrop-blur-md border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  {/* <img src={maxico} alt="" /> */}
                  <div className="text-xl font-semibold text-center font-poppins leading-[2.8rem]">
                    A
                  </div>
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Anonomus0x.
                  </h6>
                  <div className="flex items-center text-xs mt-1">
                    <img src={us} alt="" className="h-5 mr-2" />
                    United States
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Fantastic job as always! Timely manner and fast delivery, this
                  guy don’t mind the extra work and is always happy with
                  revisions 👍😀.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white/30 backdrop-blur-md border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  {/* <img src={maxico} alt="" /> */}
                  <div className="text-xl font-semibold text-center font-poppins leading-[2.8rem]">
                    A
                  </div>
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Anonomus0x.
                  </h6>
                  <div className="flex items-center text-xs mt-1">
                    <img src={us} alt="" className="h-5 mr-2" />
                    United States
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  10/10 every time! Amazing work for development of a dapp.
                  Great understanding of work flow and requirements.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={AnimFour}
        alt="anim-four"
        className="absolute right-10 -bottom-10 -z-10"
      />
    </div>
  );
}

export default Testimonial;
