import React from 'react'

function ButtonGrid() {
    const buttons = [
  "AC", "DEL", "%", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];
  return (
    <div className='grid grid-cols-4 gap-2'>
     {buttons.map((btn)=>{
       return <button key={i}>{btn}</button>
})}
      
    </div>
  )
}

export default ButtonGrid
