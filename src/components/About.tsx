import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div
        className="w-full h-fit flex items-center justify-center -mt-4"
        id="about"
      >
        <div className="max-w-6xl w-full px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
            <div>
              <h1 className="text-4xl font-semibold mb-4 text-center md:text-left">
                About Us
              </h1>
              <p className="text-lg text-gray-700 text-center md:text-left">
                At Gentleman's Cut, we specialize in premium grooming services
                designed for the modern gentleman. Our expert barbers combine
                classic techniques with contemporary styles to provide you with
                a tailored experience that leaves you feeling your best.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/about1.jpg"
                alt="About us Photo"
                width={350}
                height={350}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-20">
            <div className="flex justify-center">
              <Image
                src="/about2.jpg"
                alt="Our story Photo"
                width={700}
                height={350}
                className="rounded-xl w-full max-w-[600px] mb-8 md:mb-0"
              />
            </div>
            <div>
              <h1 className="text-4xl font-semibold mb-4 text-center md:text-left">
                Our Story
              </h1>
              <p className="text-lg text-gray-700 text-center md:text-left">
                Gentleman's Cut was born out of a passion for timeless style and
                quality grooming. What started as a small barbershop quickly
                became a place where tradition meets modern flair. We take pride
                in offering not just services, but an experience rooted in
                craftsmanship, care, and community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-2 mt-12 -mb-12"></div>
    </div>
  );
};

export default About;
