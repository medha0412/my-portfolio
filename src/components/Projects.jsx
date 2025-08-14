import React, { useState } from "react";
import even1 from "../assets/even1.png";
import even2 from "../assets/even2.png";
import even3 from "../assets/even3.png";
import glow1 from "../assets/glow1.png";
import glow2 from "../assets/glow2.png";
import glow3 from "../assets/glow3.png";
import ww1 from "../assets/dashimg.png";
import ww2 from "../assets/fullitiimg.png";
import ww3 from "../assets/hotelimg.png";

const Projects = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Wonder Weave",
      features: [
        "Smart itinerary builder with drag-and-drop functionality",
        "Real-time flight & hotel price comparison across multiple providers", 
        "Interactive destination guides with local recommendations",
        "Collaborative trip planning with shared access and comments",
        "Offline mode for accessing itineraries without internet",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "MongoDB",
        "REST APIs",
        "Express",
        "Node.js",
      ],
      screenshots: [ww1, ww2, ww3],
      github: "https://github.com/medha0412/Wonder-Weave", 
      live: "https://wonder-weave.netlify.app/", 
    },
    {
      id: 2,
      title: "GLOW",
      features: [
        "Track your daily habits & routines",
        "Add custom tasks by day or goal",
        "Tick off completed tasks easily",
        "Monitor your growth over time",
      ],
      technologies: ["MongoDB", "React", "Tailwind CSS", "Express", "Node.js"],
      screenshots: [glow1, glow2, glow3],
      github: "https://github.com/medha0412/GLOW.git",
    },
    {
      id: 3,
      title: "EventPal",
      features: [
        "Event planning made easy",
        "Input type, date, guest count",
        "Auto-generates budget & cost estimate",
        "Helps you organize everything in one place",
      ],
      technologies: ["Java", "Java AWT", "JDBC", "Java Swing", "SQL"],
      screenshots: [even1, even2, even3],
    },
  ];

  const nextCard = () => {
    if (currentCard < projects.length - 1) {
      setCurrentCard(currentCard + 1);
      setSelectedScreenshot(0);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setSelectedScreenshot(0);
    }
  };

  const currentProject = projects[currentCard];

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-300">
            Scroll through to explore my work
          </p>
        </div>

        {/* Project Card */}
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Project Info */}
            <div className="lg:w-1/3 p-6 flex flex-col justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
              <h3 className="text-3xl font-bold mb-4">
                {currentProject.title}
              </h3>

              <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 text-base">
                {currentProject.features.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className="mt-auto">
                <h4 className="text-sm font-semibold mb-2 text-gray-300">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  {currentProject.live && (
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live
                    </a>
                  )}
                  {currentProject.github&& (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="lg:w-2/3 p-6 bg-slate-800 flex flex-col justify-between">
              <h4 className="text-xl font-semibold mb-4">Screenshots</h4>

              {/* Main Screenshot */}
              <div className="w-full h-auto flex justify-center items-center mb-4">
                <img
                  src={currentProject.screenshots[selectedScreenshot]}
                  alt="Project Screenshot"
                  className="max-h-[300px] w-auto object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 justify-center overflow-x-auto scrollbar-thin">
                {currentProject.screenshots.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedScreenshot(idx)}
                    className={`w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedScreenshot === idx
                        ? "border-blue-500 shadow-lg"
                        : "border-gray-500 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            disabled={currentCard === 0}
            className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-3 md:p-4 text-2xl md:text-4xl rounded-full backdrop-blur-md hover:scale-110 transition ${
              currentCard === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-white/20"
            }`}
          >
            &#8592;
          </button>
          <button
            onClick={nextCard}
            disabled={currentCard === projects.length - 1}
            className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-3 md:p-4 text-2xl md:text-4xl rounded-full backdrop-blur-md hover:scale-110 transition ${
              currentCard === projects.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-white/20"
            }`}
          >
            &#8594;
          </button>
        </div>

        <div className="mt-6 text-center text-gray-400">
          Project {currentCard + 1} of {projects.length}
        </div>
      </div>
    </div>
  );
};

export default Projects;