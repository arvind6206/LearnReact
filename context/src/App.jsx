import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
          color: theme === "light" ? "#000000" : "#ffffff",
          padding: "20px",
          transition: "0.3s"
        }}
      >
        <Navbar />
        <Home />
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;