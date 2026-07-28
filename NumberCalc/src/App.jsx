import React, { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(5);
  const [text, setText] = useState("");

  function calFact(num) {
    console.log("Calculating...");

  
    // for (let i = 0; i < 1000000000; i++) {}

    let fact = 1;

    for (let i = 1; i <= num; i++) {
      fact *= i;
    }

    return fact;
  }

 const ans = calFact(number);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useMemo Demo</h1>

      <label>Enter Number:</label>
      <br />

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h2>Factorial: {ans}</h2>

      <hr />

      <label>Enter Name:</label>
      <br />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>Name: {text}</h2>
    </div>
  );
}

export default App;