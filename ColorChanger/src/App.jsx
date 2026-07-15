import { useState } from "react"

const App = () => {
  const colors = [
    "red", "blue", "green",
    "violet", "yellow", "black",
    "white", "purple"
  ]
  const [index, setIndex] = useState(0)
  function handleBgColor(){
      setIndex((prev) => (prev + 1) % colors.length)
     }
  return (
    
    <div style={{
        backgroundColor: colors[index],
        height: "100vh",
      }}>
      
      <h1>Color Changer</h1>
      <button onClick={handleBgColor}
      >Click to change bg</button>
    </div>
  )
}
export default App