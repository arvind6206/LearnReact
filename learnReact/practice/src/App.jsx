import React, { createContext, useContext, useState } from "react";

const bulbContext = createContext()

function BulbProvider({children}){
  const [bulbOn, setBulbOn] = useState(false);

  return <bulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }} >
    {children}

  </bulbContext.Provider>
}

function App() {

  return (
    <div>
      <BulbProvider>
        <Light/>
      </BulbProvider>
    </div>
  );
}

function Light(){
  return <div>
    <LightBulb />
    <LightSwitch/>
  </div>
}

function LightBulb(){
  const {bulbOn} = useContext(bulbContext)
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off"} 
  </div>
}

function LightSwitch(){
  const {bulbOn, setBulbOn} = useContext(bulbContext)
  function toggle(){
    setBulbOn(!bulbOn)
  }
  return <button onClick={toggle}>Toggle the button</button>
}

export default App;