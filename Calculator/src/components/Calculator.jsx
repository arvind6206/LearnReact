import React, { useState } from "react";
import ButtonGrid from "./ButtonGrid";
import Display from "./Display";

function Calculator() {
  // State for the display
  const [input, setInput] = useState("0");

  // Handles every button click
  const handleButtonClick = (value) => {
    // Clear
    if (value === "AC") {
      setInput("0");
      return;
    }

    // Delete last character
    if (value === "DEL") {
      if (input.length === 1) {
        setInput("0");
      } else {
        setInput(input.slice(0, -1));
      }
      return;
    }

    // Ignore = for now
    if (value === "=") {
      try {
        const result = eval(input)
        setInput(result.toString())
      } catch (error) {
        setInput("Error")
      }
      return
    }

    // Replace initial 0
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="w-[420px] rounded-3xl bg-gray-800 shadow-2xl border border-gray-700 overflow-hidden">

        <Display value={input} />

        <div className="p-5">
          <ButtonGrid onButtonClick={handleButtonClick} />
        </div>

      </div>
    </div>
  );
}

export default Calculator;