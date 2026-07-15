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
     {buttons.map((btn, i)=>{
       return <button
       className={`
  w-16 aspect-square rounded-xl font-semibold text-xl
  transition cursor-pointer hover:scale-95
  ${btn === "=" ? "bg-blue-500 text-white" : btn === "AC" || btn === "DEL" ? 
    "bg-red-500 text-white" : ["+", "-", "*", "/", "%"].includes(btn) ? 
    "bg-orange-500 text-white" : "bg-white text-black hover: bg-gray-200"
    }

`}
       
    key={i}>
        {btn}
    </button>
    
})}
      
    </div>
  )
}

export default ButtonGrid
