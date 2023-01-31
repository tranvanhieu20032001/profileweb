import React, { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";

const ScrolltoTop = () => {
  const [btnTop, setbtnTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',() => {
      if (window.scrollY > 500) {
        setbtnTop(true);
      } else {
        setbtnTop(false);
      }
    });
  },[]);


  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return(
    <div>
  {btnTop && <HiChevronDoubleUp className="fixed flex justify-center items-center rounded-full border-2 w-10 h-10 bottom-4 right-2 border-black-ct text-black-ct dark:border-lime-200 dark:text-lime-200 text-3xl main-text" onClick={scrollTop}/>}
    </div>
  );
};

export default ScrolltoTop;
