/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
    darkMode: "selector", // ✅ new syntax in Tailwind v4
    selectors: {
      dark: ".dark", // ✅ defines which class triggers dark mode
    },
  
    theme: {
      extend: {},
    },
    plugins: [],
  };

  
  