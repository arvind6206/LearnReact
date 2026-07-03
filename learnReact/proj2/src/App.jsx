import { useRef } from "react";
import "./App.css";
function App() {

    const inputRef = useRef()

    function focusOnInput(){
      inputRef.current.focus()
    }
    
  

  return (
    <div>
      signup
      <input ref={inputRef} type={"text"}/>
      <input type={"text"}/>
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
}



 


export default App;
