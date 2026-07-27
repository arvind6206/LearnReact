import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeButton;