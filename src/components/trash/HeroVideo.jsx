import React from "react";

function HeroVideo() {
  return (
    <div className=" mt-24">
      <video
        src="https://d3a2dpnnrypp5h.cloudfront.net/layerzero-network/header-animation.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        style={{ width: "100%", height: "100%" }}
      ></video>
    </div>
  );
}

export default HeroVideo;
