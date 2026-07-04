import "../styles/Result.css";

function Result({ score, totalQuestions, onRestart }) {
  let message = "";

  if (score === totalQuestions) {
    message = "Excellent! 🎉";
  } else if (score >= totalQuestions / 2) {
    message = "Good Job! 👏";
  } else {
    message = "Keep Practicing! 💪";
  }

  return (
    <div className="result-container">

      <h1 className="result-title">
        Quiz Finished 🎉
      </h1>

      <div className="score-card">
        <h2>
          {score} / {totalQuestions}
        </h2>

        <p>Your Final Score</p>
      </div>

      <h3 className="result-message">
        {message}
      </h3>

      <button
        className="restart-btn"
        onClick={onRestart}
      >
        Restart Quiz
      </button>

    </div>
  );
}

export default Result;