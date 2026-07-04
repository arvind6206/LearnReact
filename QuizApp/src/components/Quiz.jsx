import React, { useState, Fragment } from "react";
import questions from "../data/questions.js";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  if(showResult){
    return(
        <div>
            <h1>Quiz finished</h1>
            <h2>
                Your Score: {score} / {questions.length}
            </h2>
        </div>
    )
  }

  const handleNextQuestion = () => {
    if(selectedAnswer === ""){
        alert("Please select an asnwer!")
        return;
    }

    if(selectedAnswer === questions[currQuestion].correctAnswer){
        setScore(score + 1)
    }

    if(currQuestion === questions.length - 1){
        setShowResult(true)
    } else {
        setCurrQuestion(currQuestion + 1)
        setSelectedAnswer("")
    }
  };

  const handlePrevQuestion = () => {
    if(currQuestion >0){
        setCurrQuestion(currQuestion - 1);
        setSelectedAnswer("");
    }
  }


  return (
    <div>
      <h1>Quiz App</h1>

      <h3>
        Question {currQuestion + 1} of {questions.length}
      </h3>

      <h2>{questions[currQuestion].question}</h2>

      <div>
        {questions[currQuestion].options.map((option, index) => (
          <Fragment key={index}>
            <button
              onClick={() => setSelectedAnswer(option)}
              style={{
                backgroundColor: selectedAnswer === option ? "green" : "white",
                color: selectedAnswer === option ? "white" : "black",
                margin: "8px",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
            <br />
          </Fragment>
        ))}
        <button onClick={handlePrevQuestion}>Prev</button>
        <button onClick={handleNextQuestion}>Next</button>


      </div>
    </div>
  );
};

export default Quiz;
