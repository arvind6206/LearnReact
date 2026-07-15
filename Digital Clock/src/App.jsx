import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <div className="w-[420px] rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-md">
        <h1 className="mb-6 text-4xl font-bold text-white">
          🕒 Digital Clock
        </h1>

        <h2 className="rounded-xl bg-black/30 px-6 py-4 font-mono text-5xl font-bold tracking-widest text-cyan-400">
          {time}
        </h2>
      </div>
    </div>
  );
}

export default App;