/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-1": "#DF3E23",
        "black-1": "#3A3A3C",
        "black-base": "#252527",
        icon: "#ADB3BC",
      },
      fontSize: {
        "content-12": "12px",
        "content-14": "14px",
        "content-16": "16px",
        "content-32": "32px",
      },
    },
  },
  plugins: [],
};
