import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

function WishlistTopbar() {
  return (
    <div className='flex items-center justify-between mx-2'>
      <div>
        <h1 className='text-2xl font-bold'>Your Wish List</h1>
        <p className='text-sm text-gray-400'>Public</p>
      </div>

      <div className='flex items-center gap-2'>
        <CiShare2 size={20} className='text-blue-500' />
        <p className='text-sm text-blue-500'>Send this to others</p>
        <BsThreeDots size={20} className='text-black cursor-pointer' />
      </div>
    </div>
  )
}

export default WishlistTopbar;