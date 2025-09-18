// tailwind.config.js
module.exports = {
  content: [
    "./**/*.html",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      container: {
          center: true,
          padding: {
            DEFAULT: '1rem', // موبایل
            md: '1rem',      // از md به بالا
            lg: '1rem',
            xl: '1rem',
          },
          screens: {
            sm: '640px',
            md: '750px',
            lg: '1280px',
            xl: '1440px',
          },
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};
