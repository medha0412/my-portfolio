import React, { useState, useEffect } from "react";
import even1 from "../assets/even1.png";
import even2 from "../assets/even2.png";
import even3 from "../assets/even3.png";
import glow1 from "../assets/glow1.png";
import glow2 from "../assets/glow2.png";
import glow3 from "../assets/glow3.png";
import ww1 from "../assets/ww1.png";
import ww2 from "../assets/ww2.png";
import ww3 from "../assets/ww3.png";

const Projects = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  const projects = [
    {
      id: 1,
      title: "EventPal",
      features: [
        "Event planning made easy",
        "Input type, date, guest count",
        "Auto-generates budget & cost estimate",
        "Helps you organize everything in one place",
      ],
      technologies: ["Java", "Java AWT", "Java Swing", "SQL"],
      screenshots: [even1, even2, even3],
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
    },
    {
      id: 3,
      title: "Wonder Weave",
      features: [
        "Plan trips from start to finish",
        "Explore destinations with hotel & flight options",
        "Build and save personalized itineraries",
        "Your complete travel planning assistant",
      ],
      technologies: ["React", "Tailwind CSS", "MongoDB", "Travel APIs","Express","Node.js"],
      screenshots: [ww1, ww2, ww3],
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-300">
            Scroll through to explore my work
          </p>
        </div>

        {/* Project Card */}
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Project Info */}
            <div className="lg:w-1/3 p-6 flex flex-col justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
              <h3 className="text-3xl font-bold mb-4">{currentProject.title}</h3>

              {/* Features */}
              <ul className="list-disc list-inside mb-6 space-y-2 text-white/90 text-base">
                {currentProject.features.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="mt-auto">
                <h4 className="text-sm font-semibold mb-2 text-gray-300">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="lg:w-2/3 p-6 bg-slate-800">
              <div className="h-full flex flex-col">
                <h4 className="text-xl font-semibold mb-4">Screenshots</h4>

                <div className="flex-1 mb-4">
                  <img
                    src={currentProject.screenshots[selectedScreenshot]}
                    alt="Project Screenshot"
                    className="w-full h-[320px] object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 justify-center">
                  {currentProject.screenshots.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedScreenshot(idx)}
                      className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedScreenshot === idx
                          ? "border-blue-500 shadow-lg"
                          : "border-gray-500 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            disabled={currentCard === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-4 text-4xl rounded-full backdrop-blur-md hover:scale-110 transition ${
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
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-4 text-4xl rounded-full backdrop-blur-md hover:scale-110 transition ${
              currentCard === projects.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-white/20"
            }`}
          >
            &#8594;
          </button>
        </div>

        {/* Indicator */}
        <div className="mt-6 text-center text-gray-400">
          Project {currentCard + 1} of {projects.length}
        </div>
      </div>
    </div>
  );
};

export default Projects;
