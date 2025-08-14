import React from "react";
import Stars from "./Stars";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import medha from "../assets/medha.jpg";

export function Banner() {
  return (
    
    <div className="relative h-[380px] bg-black overflow-hidden
                    md:h-[400px]
                    flex flex-col items-center justify-center
                    md:flex-row md:justify-between md:items-center
                    px-6 md:px-20 py-6 pb-16 md:pb-0"> 
      <Stars />

     
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
        <h1 className="text-white font-playfair text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
          Hey, I am
        </h1>

        <div className="flex flex-col items-center sm:flex-row sm:items-end mt-2 md:mt-0">
          <h1 className="text-white font-playfair text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-none md:mr-4">
            Medha Pant,
          </h1>
          <h1 className="text-white font-playfair text-xl sm:text-2xl md:text-3xl font-bold border-b-4 pb-1 border-white ml-0 sm:ml-4 mt-2 sm:mt-0 relative inline-block">
            A Developer
          </h1>
        </div>

        <div className="flex gap-4 sm:gap-6 mt-6 md:mt-10 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/medhapant4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors hover:scale-125 duration-300 text-xl sm:text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/medha0412"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors hover:scale-125 duration-300 text-xl sm:text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:medhapant4@gmail.com"
            className="text-white hover:text-blue-400 transition-colors hover:scale-125 duration-300 text-xl sm:text-2xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="/Medha_Pant_Resume.pdf"
            target="_blank"
            className="text-white hover:text-blue-400 relative inline border-b-2 pb-1 border-white transition-colors hover:scale-125 duration-300 text-base sm:text-lg -mt-1 pt-1"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 z-10">
        <div className="w-[100px] h-[100px]           /* Default (mobile) */
                      sm:w-[130px] sm:h-[130px]     /* Small screens */
                      md:w-[160px] md:h-[160px]     /* Medium screens (desktop) */
                      lg:w-[190px] lg:h-[190px]     /* Large desktops */
                      xl:w-[220px] xl:h-[220px]     /* Extra large desktops */
                      rounded-full overflow-hidden shadow-lg border-4 border-white/20">
          <img
            src={medha}
            alt="Medha Pant"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20 px-4 py-2">
        <div className="text-white whitespace-nowrap animate-marquee text-sm sm:text-base font-jetbrains">
          Welcome to my portfolio ! | I program and develop | Explore my work
          below ❤️ | btw... Still trying to center a div :) |
        </div>
      </div>
    </div>
  );
}

export default Banner;