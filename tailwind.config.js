/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite",
        fadeInDown: "fadeInDown 0.5s ease-out",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
        fadeInDown: {
          from: { opacity: 0, transform: "translateY(-20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      boxShadow:{
      custom: "rgb(204, 204, 204) 2px 2px 3px 1px"
      }
    },
  },
  plugins: [],
}