import { useEffect, useState } from "react";

export const useTheme = () => {
  const selectTheme = (color) => {
    setTheme(color);
  };
  const [theme, setTheme] = useState(() => localStorage.sltheme === 'default');
  useEffect(() => {
    const wrapper = window.document.documentElement;
    const color =
      theme === "red" ? "red" : (theme === "blue" ? "blue" : "default")

    if (theme === "red") {
      wrapper.classList.remove("default");
      wrapper.classList.remove("blue");
    } else if (theme === "blue") {
      wrapper.classList.remove("default");
      wrapper.classList.remove("red");
    } else {
      wrapper.classList.remove("blue");
      wrapper.classList.remove("red");
    }
    wrapper.classList.add(color);
    localStorage.setItem("sltheme",color);
  }, [theme]);
  return [theme, selectTheme];
};
