import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

function WishlistTopbar() {
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2 mx-2'>
      <div>
        <h1 className='text-xl sm:text-2xl font-bold text-gray-900'>Your Wish List</h1>
        <p className='text-xs sm:text-sm text-gray-400'>Public</p>
      </div>

      <div className='flex items-center gap-2'>
        <CiShare2 size={18} className="sm:size-[20px] text-blue-500" />
        <p className='text-xs sm:text-sm text-blue-500 hidden sm:block'>Send this to others</p>
        <BsThreeDots size={18} className="sm:size-[20px] text-black cursor-pointer" />
      </div>
    </div>
  )
}

export default WishlistTopbar;
