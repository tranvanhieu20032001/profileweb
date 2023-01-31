import React from "react";
import { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useDarkMode } from "./useDarkMode";
import { useTheme } from "./useTheme";

const Styles = () => {
  const [hidden, setHidden] = useState(false);
  const [darkmode, toggleDarkMode] = useDarkMode();
  const [theme, selectTheme] = useTheme();
  const themes = [
    {
      id: 1,
      theme: 'blue',
      color: "bg-[#1854b4]",
    },
    {
      id: 2,
      theme:'red',
      color: "bg-[#ff3e00]",
    },
    {
      id: 3,
      theme:'default',
      color: "bg-transparent",
    }
  ];
  return (
    <div
      className={`top-[30%] right-0 fixed duration-300 ease-in ${
        hidden ? "mr-[0px]" : "mr-[-11rem]"
      }`}
    >
      <div className="flex">
        <div className="flex flex-col text-2xl mx-2">
          <div
            onClick={() => setHidden(!hidden)}
            className="rounded-full border-2 w-10 h-10 flex justify-center items-center my-1 bg-slate-300 cursor-pointer"
          >
            <div className="animate-wheel">
              <AiTwotoneSetting />
            </div>
          </div>
          <div
            onClick={() => toggleDarkMode(!darkmode)}
            className="rounded-full border-2 w-10 h-10 flex justify-center items-center my-1 bg-slate-300"
          >
            <div className="">
              {darkmode ? (
                <BsSun color="yellow" />
              ) : (
                <BsMoonStars color="yellow" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-40 px-2 border-2 rounded-md mx-2 bg-slate-300">
          <h2 className="py-2">Theme color</h2>
          <div className="flex justify-around py-2">
            {themes.map(({ id, color,theme }) => (
              <span
              onClick={()=>selectTheme(theme)}
                key={id}
                className={
                  "inline-block h-8 w-8 rounded-full border-2" + " " + color
                }
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Styles;
