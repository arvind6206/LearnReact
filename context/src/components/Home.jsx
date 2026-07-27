import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid gray",
        marginBottom: "20px"
      }}
    >
      <h1>Welcome Arvind 👋</h1>

      <p>
        You are currently using the <strong>{theme}</strong> theme.
      </p>
    </div>
  );
}

export default Home;