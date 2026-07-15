import React, { useState } from 'react'

function App() {
  const [pass, setPass] = useState("")
  function handleGeneratePass(){
    var length = 8
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let returnVal = ""
    let n = charset.length
    for(let i = 0; i < length; i++){
      returnVal += charset.charAt(Math.floor(Math.random()*n))
    }
    setPass(returnVal)
  }
  return (
    <div>
      <h1>Password Generator</h1>
      <button onClick={handleGeneratePass}>Generate</button>

      <h2>{pass}</h2>
    </div>
  )
}

export default App
