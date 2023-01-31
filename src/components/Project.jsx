import React from "react";
import housemusic from "../assets/projectimg/housemusic.png";
import mycv from "../assets/projectimg/mycv.png";

const Project = () => {
  return (
    <div name="project" className="w-full md:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 pt-28 flex flex-col justify-center w-full h-full">
        <div className="">
          <h3 className="text-4xl font-bold text-black-ct dark:text-lime-200 inline border-b-4 border-gray-700 main-text">
            Project
          </h3>
          <p className="py-6 dark:text-lime-100 main-text">
            Một số Project tôi thực hiện và tham gia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-0 dark:text-lime-100">
          <div className="p-1 shadow-md shadow-gray-500 rounded-lg duration-200 hover:scale-105 dark:shadow-lime-300">
            <img
              src={housemusic}
              alt="housemusic"
              className="rounded-md mx-auto shadow-sm shadow-gray-500 object-cover"
            />
            <div className="flex items-center justify-around">
              <button className="w-1/4 my-2 py-2 duration-200 hover:scale-105 shadow-sm shadow-gray-500 rounded-md">
                <a
                  href="https://github.com/tranvanhieu20032001/House_Music.git"
                  target="_blank"
                >
                  Code
                </a>
              </button>
              <button className="w-1/4 my-2 py-2 duration-200 hover:scale-105 shadow-sm shadow-gray-500 rounded-md">
                Demo
              </button>
            </div>
          </div>

          <div className="p-1 shadow-md shadow-gray-500 rounded-lg duration-200 hover:scale-105 dark:shadow-lime-300">
            <img
              src={mycv}
              alt="mycv"
              className="rounded-md mx-auto shadow-sm shadow-gray-500 object-cover"
            />
            <div className="flex items-center justify-around">
              <button className="w-1/4 my-2 py-2 duration-200 hover:scale-105 shadow-sm shadow-gray-500 rounded-md">
                <a
                  href="https://github.com/tranvanhieu20032001/web_CV.git"
                  target="_blank"
                >
                  Code
                </a>
              </button>
              <button className="w-1/4 my-2 py-2 duration-200 hover:scale-105 shadow-sm shadow-gray-500 rounded-md">
                Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
