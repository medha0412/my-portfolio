import React from "react";
import Stars from "./Stars";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import medha from '../assets/medha.jpg'
export function Banner(){
    return(
        <>
    
        <div className="relative h-[380px] bg-black flex items-center justify-between px-10 overflow-hidden">
            <Stars></Stars>
           <div className="relative -top-12 mt-10 "> <h1 className="text-white py-20 px-30 ml-20 font-playfair text-3xl font-semibold">Hey, I am</h1>
          <div className="flex">  <h1 className="text-white ml-20 -mt-12 font-playfair text-6xl font-bold">Medha Pant,</h1>
            <h1 className="text-white text-3xl font-bold font-playfair ml-10 -mt-16 relative inline border-b-4 pb-1 border-white py-7">A Developer</h1></div>
          <div className="ml-20 mt-10 flex gap-6">  <a href="https://www.linkedin.com/in/medhapant4" 
            target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors hover:scale-125 duration-300 text-2xl " >
                
                <FaLinkedin/></a> 
                <a href="https://github.com/medha0412"
                target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors hover:scale-125 duration-300 text-2xl ">
                    <FaGithub></FaGithub>
                </a>
                <a href="mailto:medhapant4@gmail.com"
                className="text-white hover:text-blue-400 transition-colors hover:scale-125 duration-300 text-2xl">
                    <FaEnvelope></FaEnvelope>
                </a>
                <a 
  href="/medha_resume.pdf" 
  target="_blank"
  className="text-white hover:text-blue-400 relative inline border-b-2 pb-1 border-white transition-colors hover:scale-125 duration-300 text-xl -mt-1 "
>Resume
</a>
                </div>  
                <div className="w-full overflow-hidden mt-10 ">
                    <div className="text-white whitespace-nowrap animate-marquee 
                    text-lg font-jetbrains px10 ">
  Welcome to my portfolio ! | I program and develop | Explore my work below ❤️ | btw... Still trying to center a div :) |</div></div>     
        </div>

       <div className="mr-30 -mt-10 -ml-10" > <img src={medha} alt="hehe"   className="w-80 h-80 md:w-44 md:h-44 rounded-full object-cover"
 /> </div>
        </div>
        </>
    )
}
export default Banner;