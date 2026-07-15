import React from 'react'
import ButtonGrid from './ButtonGrid'

function Calculator() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-200'>
        <div className='w-100 h-120 bg-purple-100 rounded-2xl border-2 border-black shadow-xl flex flex-col'>
            <div className='h-1/5 bg-white rounded-t-2xl border-b-2 border-black flex 
            items-center justify-end px-5 text-4xl font-bold'>
                0
            </div>
            <div className='h-4/5 p-4'>
                <ButtonGrid/>
            </div>
      
    </div>
    </div>
    
  )
}

export default Calculator
