import { useState } from "react";
import questions from "../data/questions";
import Timer from "./Timer";
import Result from "./Result";
import "../styles/Quiz.css"

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Restart Quiz
  const restartQuiz = () => {
    setCurrQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };

  // Next Question
  const handleNextQuestion = (isTimeUp = false) => {
    // Don't allow next if no option selected
    if (!isTimeUp && selectedAnswer === "") {
      alert("Please select an answer!");
      return;
    }

    // Check Answer
    if (
      selectedAnswer !== "" &&
      selectedAnswer === questions[currQuestion].correctAnswer
    ) {
      setScore((prevScore) => prevScore + 1);
    }

    // Last Question
    if (currQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrQuestion((prev) => prev + 1);
      setSelectedAnswer("");
    }
  };

  // Previous Question
  const handlePrevQuestion = () => {
    if (currQuestion > 0) {
      setCurrQuestion((prev) => prev - 1);
      setSelectedAnswer("");
    }
  };

  // Result Page
  if (showResult) {
    return (
      <Result
        score={score}
        totalQuestions={questions.length}
        onRestart={restartQuiz}
      />
    );
  }

  return (
  <div className="quiz-container">
    <h1 className="quiz-title">Quiz App</h1>

    <Timer
      key={currQuestion}
      onTimeUp={() => handleNextQuestion(true)}
    />

    <h3 className="question-number">
      Question {currQuestion + 1} of {questions.length}
    </h3>

    <h2 className="question">
      {questions[currQuestion].question}
    </h2>

    <div className="options">
      {questions[currQuestion].options.map((option, index) => (
        <div key={index}>
          <button
            className={`option-btn ${
              selectedAnswer === option ? "selected" : ""
            }`}
            onClick={() => setSelectedAnswer(option)}
          >
            {option}
          </button>
        </div>
      ))}
    </div>

    <div className="button-group">
      <button
        className="nav-btn"
        onClick={handlePrevQuestion}
        disabled={currQuestion === 0}
      >
        Prev
      </button>

      <button
        className="nav-btn"
        onClick={() => handleNextQuestion(false)}
      >
        {currQuestion === questions.length - 1
          ? "Finish Quiz"
          : "Next"}
      </button>
    </div>
  </div>
);
}

export default Quiz;