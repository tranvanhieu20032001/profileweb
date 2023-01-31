/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  // red:'class',
  // blue:'class',
  // default:'class',
  theme: {
    extend: {
      colors: {
        "black-ct": "#192a56",
        "color-bg": "#f4f4fd",
      },
      boxShadow: {
        "boxshadow-ct": "0 1.5px 0 0 rgba(25,42,86)",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
    animation: {
      wheel: "spin 3s linear infinite",
    },
    
  },
  plugins: [],
};
