import React from 'react';
import react from 'D:/Projects 1/Portfolio/my-project/src/assets/react.png';
import mongo from 'D:/Projects 1/Portfolio/my-project/src/assets/mongo.png';
import html from 'D:/Projects 1/Portfolio/my-project/src/assets/html.png';
import tailwind from 'D:/Projects 1/Portfolio/my-project/src/assets/Tailwind CSS.png';
import js from 'D:/Projects 1/Portfolio/my-project/src/assets/JavaScript.png';
import java from 'D:/Projects 1/Portfolio/my-project/src/assets/Java.png';
import express from 'D:/Projects 1/Portfolio/my-project/src/assets/Express.png';
import node from 'D:/Projects 1/Portfolio/my-project/src/assets/Node.js.png';
import canva from 'D:/Projects 1/Portfolio/my-project/src/assets/Canva.png';

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      {/* Skills Header */}
      <div className="text-center mb-8 pt-28">
        <h2 className="text-4xl font-semibold">Skills</h2>
        <p className="text-gray-400 mt-4 max-w-5xl mx-auto">
        Skilled in MERN stack development, Tailwind CSS for modern UI design, and JavaScript for dynamic applications. Proficient in Java, HTML, and Canva for creating robust systems and professional designs.        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-8 max-w-6xl mx-auto">
        {/* Skill Items */}
        {[
          { src: canva, bg: 'bg-teal-800', alt: 'Canva' },
          { src: node, bg: 'bg-amber-800', alt: 'Node.js' },
          { src: express, bg: 'bg-yellow-800', alt: 'Express.js' },
          { src: react, bg: 'bg-lime-800', alt: 'React.js' },
          { src: mongo, bg: 'bg-green-800', alt: 'MongoDB' },
          { src: java, bg: 'bg-lime-800', alt: 'Java' },
          { src: js, bg: 'bg-teal-800', alt: 'JavaScript' },
          { src: tailwind, bg: 'bg-purple-900', alt: 'Tailwind CSS' },
          { src: html, bg: 'bg-pink-800', alt: 'HTML' },
        ].map((skill, index) => (
          <div
            key={index}
            className="relative w-24 h-24 mx-auto rounded-lg hover:scale-110 ease-in duration-200"
          >
            <div className={`absolute inset-0 ${skill.bg} blur-lg`}></div>
            <img
              src={skill.src}
              className="relative object-cover w-20 h-20 pt-3 pl-2"
              alt={skill.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
