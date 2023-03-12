/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        crimsonPro: "'Crimson Pro', serif",
        serat: "'Montserrat', sans-serif",
      },
      colors: {
        biruGw: "#4F81BB",
        biruTeuing: "rgba(198, 224, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
