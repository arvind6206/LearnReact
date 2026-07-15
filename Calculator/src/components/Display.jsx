import React from "react";

function Display({ value }) {
  return (
    <div className="h-32 bg-[#111827] border-b border-gray-700 flex items-end justify-end px-6 pb-4">
      <h1 className="text-6xl text-white font-light overflow-x-auto">
        {value}
      </h1>
    </div>
  );
}

export default Display;