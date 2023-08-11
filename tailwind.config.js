/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // https://mycolor.space/?hex=%236080C8&sub=1    <---- current color palette
        primary: "#6080C8",
        secondary: "#828FBB",
        grayDark: "#424656",
        grayLight: "#A6ABBD",
        white: "#F5F9FF",
        lime: "#E6F4F1",
      },
    },
  },
  plugins: [],
};
