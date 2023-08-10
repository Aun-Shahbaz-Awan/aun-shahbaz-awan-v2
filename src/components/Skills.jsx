import React from "react";
import "../styles/skills.css";
import { icons } from "../utils/logos";

function Skills() {
  return (
    <div className="w-full overflow-hidden">
      {[1, 2, 3].map((logos, index) => {
        return (
          <div
            className={` ${
              index % 2 === 0 ? "right-marquee" : "left-marquee my-4"
            } gap-6 `}
            // className="maro gap-4"
          >
            {icons.map((logo) => {
              return (
                <img src={logo.image} alt="logo" className=" h-8 w-auto" />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
