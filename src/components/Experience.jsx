import React from "react";
import html from "../assets/iconskill/html.png";
import css from "../assets/iconskill/css.png";
import js from "../assets/iconskill/javascript.png";
import nodejs from "../assets/iconskill/node.png";
import tailwind from "../assets/iconskill/tailwind.png";
import react from "../assets/iconskill/react.png";
import github from "../assets/iconskill/github.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      skill: "HTML",
      boxshadow: "shadow-[#e44d26]",
    },
    {
      id: 2,
      src: css,
      skill: "CSS",
      boxshadow: "shadow-[#0277bd]",
    },
    {
      id: 3,
      src: js,
      skill: "Javascript",
      boxshadow: "shadow-[#ffd600]",
    },
    {
      id: 4,
      src: react,
      skill: "React",
      boxshadow: "shadow-[#00d8ff]",
    },
    {
      id: 5,
      src: nodejs,
      skill: "NodeJS",
      boxshadow: "shadow-[#8cc84b]",
    },
    {
      id: 6,
      src: tailwind,
      skill: "Tailwind",
      boxshadow: "shadow-[#44a8b3]",
    },
    {
      id: 7,
      src: github,
      skill: "Github",
      boxshadow: "shadow-[#171515]",
    },
  ];
  return (
    <div name="experiency" className="w-full md:h-screen">
      <div className="max-w-screen-lg justify-center h-full mx-auto pt-32 p-4 flex flex-col">
        <div>
          <h3 className="text-4xl font-bold text-black-ct dark:text-lime-200 inline border-b-4 border-gray-700 main-text">
            Experience
          </h3>
          <p className="py-6 dark:text-lime-100 main-text">Một số công nghệ tôi đang tìm hiểu</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center p-8 sm:px-0 dark:text-lime-200">
          {skills.map(skill=>(
            <div
            key={skill.id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.boxshadow}`}
          >
            <img src={skill.src} alt={skill.skill} className="w-20 mx-auto" />
            <p className="mt-4">{skill.skill}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
