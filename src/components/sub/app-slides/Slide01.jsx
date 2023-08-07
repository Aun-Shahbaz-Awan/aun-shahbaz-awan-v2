import React, { useRef, useEffect } from "react";
import { techs } from "./slides";

function Slide01() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;

    const cloneLogos = () => {
      const logos = marqueeContainer.querySelectorAll("._120px-logos-w");
      const firstLogo = logos[0];

      logos.forEach((logo, index) => {
        if (index > 0) {
          const clonedLogo = logo.cloneNode(true);
          marqueeContainer.appendChild(clonedLogo);
        }
      });

      marqueeContainer.appendChild(firstLogo.cloneNode(true));
    };

    const startMarquee = () => {
      const logos = marqueeContainer.querySelectorAll("._120px-logos-w");
      const totalWidth = logos.length * 7.5 + (logos.length - 1) * 1;

      marqueeContainer.style.animation = `marquee ${
        totalWidth / 15
      }s linear infinite`;
    };

    cloneLogos();
    startMarquee();
  }, []);

  return (
    <div className="marquee-container mb-4">
      <div className="marquee-wrapper" ref={marqueeRef}>
        {techs.map((tech) => {
          return (
            <div className="_120px-logos-w">
              <img
                src={tech.logo}
                loading="lazy"
                alt={tech.name}
                className="image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slide01;
