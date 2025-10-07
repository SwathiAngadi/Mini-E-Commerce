    // ThemeSwitcher.jsx
    import React, { useState, useEffect } from 'react';

    const ThemeSwitcher = () => {
      const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
      );

      useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
      }, [theme]);

      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };

      return (
        <button
      className="m-2 p-2 rounded border bg-pink-200 dark:bg-gray-800"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
      );
    };

    export default ThemeSwitcher;