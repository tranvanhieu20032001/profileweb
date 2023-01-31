import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import avatar from "../assets/anh7.png";
import Typical from "react-typical";
import { Link } from "react-scroll";
import app from "../App.css";

const Home = () => {
  return (
    <div name="home" className="pt-40 md:pt-0 h-full md:h-screen w-full z-10">
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
        md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-black-ct dark:text-lime-200 main-text">
            Xin chào, Tôi là Hiếu
          </h2>
          <h3 className="text-3xl pt-4 font-bold font-signature text-black-ct dark:text-lime-200 main-text">
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Javascrip!",
                2000,
                "React!",
                2000,
                "NodeJS!",
                2000,
                "Tailwind!",
                2000,
                "...",
                2000,
              ]}
              wrapper="p"
            />
          </h3>
          <p className="text-gray-700 dark:text-lime-100 py-4 max-w-lg indent-8 main-text">
            Tôi là Trần Văn Hiếu, sinh viên năm 4 ngành công nghệ phần mềm, khoa
            công nghệ thông tin thuộc trường Đại học Duy Tân. Hiện tại, tôi đang
            tìm hiểu các ngôn ngữ và công nghệ lập trình như
            Javascript, React, NodeJS, Tailwind
          </p>

          <div className="">
            <button className="text-black-ct dark:text-lime-200 border-2 border-black-ct dark:border-lime-200 px-5 py-2 my-2 flex items-center rounded-md btn-hover main-text">
              <Link
                className="flex flex-row items-center"
                to="project"
                smooth
                duration={500}
              >
                Project
                <BsArrowRightShort />
              </Link>
            </button>
          </div>
        </div>

        <div className=" flex align-middle justify-center w-64 h-64 rounded-b-full shadow-boxshadow-ct dark:shadow-lime-300 main-text">
          <img
            src={avatar}
            alt="myavatar"
            className="rounded-full w-[15.7rem] h-[15.7rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
