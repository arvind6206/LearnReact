import { useState } from "react";
import quotes from "./data/quotes";
import './App.css'

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

 return (
  <div className="container">

    <div className="quote-card">

      <h1>Random Quote Generator</h1>

      <h2>{quotes[currentIndex].text}</h2>

      <p>{quotes[currentIndex].author}</p>

      <button
        onClick={()=>{
          if(currentIndex === quotes.length-1){
            setCurrentIndex(0)
          }else{
            setCurrentIndex(currentIndex+1)
          }
        }}
      >
        Next Quote
      </button>

    </div>

  </div>
)
}

export default App;