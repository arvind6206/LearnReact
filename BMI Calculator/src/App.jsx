import React from 'react'
import { useState } from 'react'

function App() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")

  const [bmi, setBmi] = useState("")
  const [result, setResult] = useState("")

  function handleBMI(e){
    e.preventDefault()
    const BMI = (Number(weight) * 10000) / (Number(height) * Number(height))
    setBmi(BMI)
    if(BMI < 18.5){
      setResult("Underweight")
    } else if(BMI >= 18.5 && BMI <= 24.9){
      setResult("Normal Weight")
    } else if(BMI >= 25 && BMI <= 29.9){
      setResult ("Overweight")
    } else{
      setResult("Obese")
    }
  }
  return (
    <div>
      <div>
        <h1>BMI Calculator</h1>
      </div>
      <form onSubmit={handleBMI}>
        <input type="number" placeholder="Enter the Weight(kg)" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        <input type="number" placeholder="Enter the height(cm)" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        <button type="submit">Submit</button>

      </form>
      <h2>{bmi}</h2>
      <h2>{result}</h2>

    </div>
  )
}

export default App
