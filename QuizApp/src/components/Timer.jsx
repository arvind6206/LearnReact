import { useEffect, useState } from "react";
import "../styles/Timer.css";

function Timer({ onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="timer-container">
      <h2 className="timer-text">
        ⏱ Time Left: <span>{timeLeft}s</span>
      </h2>
    </div>
  );
}

export default Timer;