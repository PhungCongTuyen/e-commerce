/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-1": "#DF3E23",
        "brand-2": "#CA2307",
        "black-1": "#3A3A3C",
        "black-base": "#252527",
        "grey-1": "#848589",
        "access-green": "#188262",
        "access-red": "#FF3D3A",
        stroke: "#DADADA",
        icon: "#ADB3BC",
      },
      fontSize: {
        "content-10": "10px",
        "content-12": "12px",
        "content-14": "14px",
        "content-16": "16px",
        "content-32": "32px",
        "content-title": "24px",
      },
    },
  },
  plugins: [],
};
