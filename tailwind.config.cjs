/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "640px",
        tablet: "960px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
