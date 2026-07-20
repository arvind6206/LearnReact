import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
  return (
    <div className='bg-gray-950 h-15 w-full flex items-center justify-between'>
      <div>
        <h1 className='text-white text-4xl font-bold ml-30'>amazon.in</h1>
      </div>
      <div className='text-white flex items-center gap-2 mr-40'>
        <p className='text-md'>Hello, User</p>
        <CiShoppingCart size={30}/>

      </div>
    </div>
  )
}

export default Navbar
