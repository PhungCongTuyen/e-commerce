/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "brand-1": "#DF3E23",
        "brand-2": "#CA2307",
        "black-1": "#3A3A3C",
        "black-base": "#252527",
        "grey-1": "#848589",
        "grey-2": "#5E6F88",
        "access-green": "#188262",
        "access-red": "#FF3D3A",
        "background-1": "#F0F2F5",
        "background-2": "#C4C4C4",
        "background-black-1": "rgba(58, 58, 60, 0.75)",
        stroke: "#DADADA",
        icon: "#ADB3BC",
      },
      fontSize: {
        "content-10": "10px",
        "content-12": "12px",
        "content-14": "14px",
        "content-16": "16px",
        "content-18": "18px",
        "content-32": "32px",
        "content-title": "24px",
      },
    },
  },
  plugins: [],
};
