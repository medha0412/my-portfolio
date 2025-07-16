import React from "react";
import java from '../assets/java.png';
import cpp from '../assets/cpp.png';
import js from '../assets/js.png';
import c from '../assets/c.png';
import html from '../assets/html.png';
import exp from '../assets/exp.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import sql from '../assets/sql.png';
import react from '../assets/react.svg';
import tail from '../assets/tailwind.png';
import git from '../assets/git.png';
import { FaCode, FaGlobe, FaDatabase, FaTools } from "react-icons/fa";

export function Skills() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-6 -mt-7" >
      <h1 className="text-center text-4xl font-extrabold text-white relative inline-block border-b-4 border-blue-400 pb-2">
        Skills Highlight
      </h1>
      <div className="flex mt-10 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-2xl font-mono font-semibold mb-4 flex items-center">
          <FaCode className="mr-3 text-blue-400" /> Programming Languages
        </h2>
        <div className="flex flex-wrap gap-6 ml-6">
          {[{ src: java, title: "Java" }, { src: cpp, title: "C++" }, { src: js, title: "JavaScript" }, { src: c, title: "C" }].map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt={icon.title}
              title={icon.title}
              className="h-[60px] w-[60px] hover:scale-125 hover:shadow-[0_0_15px_white] transition-transform duration-300 cursor-pointer rounded"
            />
          ))}
        </div>
      </div>
      <div className="flex mt-2   bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-2xl font-mono font-semibold mb-4 flex items-center">
          <FaGlobe className="mr-3 text-green-400" /> Web Development
        </h2>
        <div className="flex flex-wrap gap-6 ml-24 px-2">
          {[{ src: react, title: "React" }, { src: html, title: "HTML" }, { src: exp, title: "Express.js" }, { src: node, title: "Node.js" }, { src: tail, title: "Tailwind CSS" }].map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt={icon.title}
              title={icon.title}
              className="h-[60px] w-[60px] hover:scale-125 hover:shadow-[0_0_15px_white] transition-transform duration-300 cursor-pointer rounded"
            />
          ))}
        </div>
      </div>
      <div className="flex mt-2  bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-2xl font-mono font-semibold mb-4 flex items-center">
          <FaDatabase className="mr-3 text-yellow-400" /> Database Tech
        </h2>
        <div className="flex flex-wrap gap-6 ml-8 px-24">
          {[{ src: sql, title: "SQL" }, { src: mongo, title: "MongoDB" }].map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt={icon.title}
              title={icon.title}
              className="h-[60px] w-[60px] hover:scale-125 hover:shadow-[0_0_15px_white] transition-transform duration-300 cursor-pointer rounded"
            />
          ))}
        </div>
      </div>
      <div className="flex mt-2 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h2 className="text-white text-2xl font-mono font-semibold mb-4 flex items-center">
          <FaTools className="mr-3 text-pink-400" /> Development Platforms
        </h2>
        <div className="flex flex-wrap gap-6 ml-6">
          <img
            src={git}
            alt="GitHub"
            title="GitHub"
            className="h-[60px] w-[60px] hover:scale-125 hover:shadow-[0_0_15px_white] transition-transform duration-300 cursor-pointer rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
