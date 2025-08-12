import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative z-20 flex  items-center justify-center min-h-screen w-full text-white  text-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-center"
        style={{
          backgroundImage: `url('/image/back_top_pc.png')`,
          // The background size is set to zoom in the image.
          backgroundSize: "135%",
        }}
      />
      <div className="grid grid-cols-2 w-full h-screen ">
        <div className="bg-red-500/40">
          <Image src='/image/slogan.png' alt="slogan" width={800} height={400}  />
        </div>
        <div className="bg-cyan-500/40">
          <h3>hi</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
