import React, { useState } from "react";

function App() {
  const [pass, setPass] = useState("");

  function handleGeneratePass() {
    const length = 8;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let returnVal = "";

    for (let i = 0; i < length; i++) {
      returnVal += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
    }

    setPass(returnVal);
  }

  function handleCopy() {
    if (!pass) return;

    navigator.clipboard.writeText(pass);
    alert("Password copied!");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="w-[420px] bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Password Generator
        </h1>

        <div className="bg-gray-100 border rounded-lg p-4 mb-6">
          <p className="text-center text-xl font-mono break-all text-gray-700">
            {pass || "Click Generate"}
          </p>
        </div>

        <button
          onClick={handleGeneratePass}
          className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Generate Password
        </button>

        <button
          onClick={handleCopy}
          className="w-full mt-3 bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default App;