/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FF7D29",
          dark: "#DC5F00",
        },
        btnColor: {
          light: "#7E8EF1",
          dark: "#3E54AC",
        },
        mainBackground: "#DDDDDD",
        textColor: "#B5C0D0",
        footerColor: "#686D76",
      },
    },
  },
  plugins: [],
};
