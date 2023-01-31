import React from "react";
import {
  BsFacebook,
  BsFillPersonLinesFill,
  BsGithub,
} from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const LinkBar = () => {
  const icons = [
    {
      id: 1,
      icon: (
        <>
          Facebook <BsFacebook size={25} color="#1877f2" />
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100037458979961",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      icon: (
        <>
          Git <BsGithub size={25} color="#171515" />
        </>
      ),
      href: "https://github.com/tranvanhieu20032001",
    },
    {
      id: 3,
      icon: (
        <>
          Email <MdOutlineEmail size={25} color="#ec4134" />
        </>
      ),
      href: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      id: 4,
      icon: (
        <>
          Profile <BsFillPersonLinesFill size={25} color="#171515" />
        </>
      ),
      href: "/mycv.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden md:flex flex-col top-[30%] left-0 fixed">
      <ul>
        {icons.map(({ id, icon, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-11 px-4 pl-8 mb-[1px] border-2 bg-slate-300 ml-[-105px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkBar;
