import React from "react";

function ButtonGrid({ onButtonClick }) {
  const buttons = [
    "AC", "DEL", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=",
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={() => onButtonClick(btn)}
          className={`
            w-16 aspect-square rounded-xl text-xl font-semibold
            shadow-md transition-all duration-200
            hover:scale-105 active:scale-95
            ${
              btn === "="
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : btn === "AC" || btn === "DEL"
                ? "bg-red-500 text-white hover:bg-red-600"
                : ["+", "-", "*", "/", "%"].includes(btn)
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-white text-black hover:bg-gray-200"
            }
          `}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default ButtonGrid;