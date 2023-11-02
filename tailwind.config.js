/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#313638",
        secondary: "#e0dfd5",
        tertiary: "#E4B363",
        background: "#E8E9EB",
        accent: "#EF6461",
      },
    },
  },
  plugins: [],
};
