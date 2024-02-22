const { nextui } = require("@nextui-org/react");
/** import type { Config } from "tailwindcss"; */

// const config: Config = {
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        parallax: 'url("../public/lightbackground.svg")',
        testezao: "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),radial-gradient(at 95% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),radial-gradient(at 96% 55%, hsla(340,100%,76%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)"
      },
    },
  },
  // darkMode: "class",
  plugins: [nextui()],
};
// export default config;
