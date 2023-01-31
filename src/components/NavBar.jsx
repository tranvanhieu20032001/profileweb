import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const setActive = (props) => {
    const active = document.querySelector('.active')
    active.classList.remove('active')
    const nav = document.querySelector('.'+props);
    nav.classList.add('active')
  
  }
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experiency",
    },
    {
      id: 4,
      link: "project",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-24 px-5 text-white bg-[url('https://jointoucan.com/images/home/partner/bannerPartner-base.svg')] bg-no-repeat bg-[length:100%_6rem] shadow-sm shadow-gray-500 fixed z-20">
      <div>
        <h1 className="text-5xl font-signature font-bold ml-2 dark:text-lime-200 main-text">
          Văn Hiếu
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            // id={link}
            key={id}
            className={`${
              id === 1 ? "active" : ""
            } px-4 mx-1 cursor-pointer capitalize font-medium text-[1.25rem] text-white dark:text-lime-200 hover:scale-105 duration-200 main-text ${link}`}
          >
            <Link
              onClick={() => setActive(link)}
              to={link}
              smooth
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer capitalize font-medium py-6 hover:scale-110 duration-200 "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link.link}
                smooth
                duration={500}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
