import React from "react";
import java from '../assets/java.svg';
import cpp from '../assets/cplusplus.svg';
import js from '../assets/javascript.svg';
import html from '../assets/html5.svg';
import exp from '../assets/express.svg';
import node from '../assets/nodejs.svg';
import mongo from '../assets/mongodb.svg';
import sql from '../assets/sql.svg';
import react from '../assets/react.svg';
import tail from '../assets/tailwindcss.svg';
import git from '../assets/github.svg';
import css from '../assets/css3.svg';
import postman from '../assets/postman.svg';
import { FaCode, FaGlobe, FaDatabase, FaTools } from "react-icons/fa";
import { title } from "framer-motion/client";

export function Skills() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4 sm:px-6 lg:px-12">
      <h1 className="text-center text-4xl font-extrabold text-white border-b-4 border-blue-400 inline-block pb-2">
        Skills Highlight
      </h1>

      <div className="flex flex-col md:flex-row items-start md:items-center mt-10 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-2xl font-mono font-semibold mb-4 md:mb-0 md:mr-8 flex items-center">
          <FaCode className="mr-3 text-blue-400" /> Programming Languages
        </h2>
        <div className="flex flex-wrap ml-4 gap-x-6 gap-y-6">
          {[{ src: java, title: "Java" }, { src: cpp, title: "C++" }, { src: js, title: "JavaScript" }].map((icon, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={icon.src}
                alt={icon.title}
                title={icon.title}
                className="h-[60px] w-[60px] hover:scale-125 hover:shadow-[0_0_15px_white] transition-transform duration-300 cursor-pointer rounded"
              />
              <p className="text-white text-sm mt-2">{icon.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center mt-6 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-2xl font-mono font-semibold mb-4 md:mb-0 md:mr-8 flex items-center">
          <FaGlobe className="mr-3 text-green-400" /> Web Development
        </h2>
        <div className="flex flex-wrap ml-24 gap-x-6 gap-y-6">
          {[{ src: react, title: "React" }, { src: html, title: "HTML" },{ src:css, title: "css3"}, { src: exp, title: "Express.js" }, { src: node, title: "Node.js" }, { src: tail, title: "Tailwind CSS" }].map((icon, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={icon.src}
                alt={icon.title}
                title={icon.title}
                className="h-[60px] w-[60px] hover:scale-125 hover:shadow-[0_0_15px_white] transition-transform duration-300 cursor-pointer rounded"
              />
              <p className="text-white text-sm mt-2">{icon.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center mt-6 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-2xl font-mono font-semibold mb-4 md:mb-0 md:mr-8 flex items-center">
          <FaDatabase className="mr-3 text-yellow-400" /> Database Tech
        </h2>
        <div className="flex flex-wrap ml-32  mr-2 gap-x-6 gap-y-6">
          {[{ src: sql, title: "SQL" }, { src: mongo, title: "MongoDB" }].map((icon, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={icon.src}
                alt={icon.title}
                title={icon.title}
                className="h-[60px] w-[60px] hover:scale-125 hover:shadow-[0_0_15px_white] transition-transform duration-300 cursor-pointer rounded"
              />
              <p className="text-white text-sm mt-2">{icon.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center mt-6 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-2xl font-mono font-semibold mb-4 md:mb-0 md:mr-8 flex items-center">
          <FaTools className="mr-3 text-pink-400" /> Development Platforms
        </h2>
        <div className="flex flex-wrap ml-6 gap-x-6 gap-y-6">
          {[{src:git, title:"GitHub"}, {src:postman,title:"Postman"}].map((icon,i) =>(
            <div key={i} className="flex flex-col items-center">
            <img
              src={icon.src}
              alt={icon.title}
              title={icon.title}
              className="h-[60px] w-[60px] hover:scale-125 hover:shadow-[0_0_15px_white] transition-transform duration-300 cursor-pointer rounded"
            />
              <p className="text-white text-sm mt-2">{icon.title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
