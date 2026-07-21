import React from 'react'
import { FaCheck } from "react-icons/fa";

function PurchaseModel({ total, onClose }) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='w-full max-w-md md:max-w-[650px] rounded-xl bg-white p-6 md:p-10 shadow-2xl'>
        <h1 className='text-center text-3xl md:text-5xl font-bold text-gray-900'>
          Purchase Successful!
        </h1>

        <div className='mt-6 md:mt-8 flex justify-center'>
          <div className='flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border-[4px] md:border-[5px] border-green-500'>
            <FaCheck className='text-3xl md:text-5xl text-green-500' />
          </div>
        </div>

        <p className='mt-6 md:mt-8 text-center text-base md:text-2xl text-gray-700'>
          Thank you for purchase. Your order has been successfully processed.
        </p>

        <h2 className='mt-4 md:mt-6 text-center text-lg md:text-2xl font-semibold text-gray-900'>
          Total Amount: ₹{total}
        </h2>

        <button
          onClick={onClose}
          className='mt-6 md:mt-10 w-full rounded bg-blue-600 py-3 md:py-4 text-lg md:text-2xl text-white hover:bg-blue-700 transition'
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default PurchaseModel
