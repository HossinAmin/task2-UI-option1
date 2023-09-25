/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        text: "#0B0B0B",
        background: "#F9FAFF",
        divider: "#EEEEEE",
        avatar: {
          background: "#EDF4FF",
          text: "#D0E1FF",
        },
        error: "#A80000",
      },
    },
  },
  plugins: [],
};
