import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold">TicTacToe</h1>
      <div className="grid grid-cols-3 gap-2 bg-gray-800 p-1 rounded-lg overflow-hidden">
        <button className="w-24 h-24 text-4xl font-bold bg-white hover:bg-gray-100 flex items-center justify-center transition text-red-500">
          0
        </button>
        <button className="w-24 h-24 text-4xl font-bold bg-white hover:bg-gray-100 flex items-center justify-center transition text-blue-500">
          x
        </button>
        <button className="w-24 h-24 text-4xl font-bold bg-white hover:bg-gray-100 flex items-center justify-center transition text-red-500">
          0
        </button>
        <button className="w-24 h-24 text-4xl font-bold bg-white hover:bg-gray-100 flex items-center justify-center transition text-blue-500">
          X
        </button>
        <button className="w-24 h-24 text-4xl font-bold bg-white hover:bg-gray-100 flex items-center justify-center transition text-red-500">
          O
        </button>
        <button className="w-24 h-24 text-4xl font-bold bg-white hover:bg-gray-100 flex items-center justify-center transition text-blue-500">
          X
        </button>
        <button className="w-24 h-24 text-4xl font-bold bg-white hover:bg-gray-100 flex items-center justify-center transition text-red-500">
          O
        </button>
        <button className="w-24 h-24 text-4xl font-bold bg-white hover:bg-gray-100 flex items-center justify-center transition text-blue-500">
          X
        </button>
        <button className="w-24 h-24 text-4xl font-bold bg-white hover:bg-gray-100 flex items-center justify-center transition text-red-500">
          O
        </button>
      </div>
    </div>
  );
}

export default App;
