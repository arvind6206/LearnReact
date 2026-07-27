import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        padding: "15px",
        border: "1px solid gray",
        marginBottom: "20px"
      }}
    >
      <h2>Current Theme: {theme}</h2>
    </nav>
  );
}

export default Navbar;