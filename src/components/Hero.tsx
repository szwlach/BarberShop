import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 md:bg-transparent">
      <div className="absolute inset-0 md:block">
        <Image
          src="/mainPhoto3.jpg"
          alt="barber photo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Text container */}
      <div className="relative z-10 flex items-center h-full px-4 flex-wrap  max-w-xl ml-16 ">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 -mt-16 sm:-mt-0">
            Professional Gentleman's Styling. Since 1926
          </h1>

          <Button className="bg-yellow-800 hover:bg-yellow-700 text-slate-300 mt-12 ml-8 text-2xl max-w-36 min-h-12 p-8">
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
