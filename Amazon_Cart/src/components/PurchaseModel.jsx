import React from 'react'
import { FaCheck } from "react-icons/fa";


function PurchaseModel({total, onClose}) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
        <div className='w-[650px] rounded-xl bg-white p-10 shadow-2xl'>
            <h1 className='text-center text-5xl font-bold'>
                Purchase Successful!
            </h1>

            <div className='mt-8 flex justify-center'>
                <div className='flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-green-500'>
                    <FaCheck className='text-5xl text-green-500'/>

                </div>

            </div>

            <p className='mt-8 text-center text-2xl'>
                Thank you for purchase. Your order has been successfully processed.
            </p>

            <h2>
                Total Amount:  ₹{total}
            </h2>

            <button onClick={onClose}
            className='mt-10 w-full rounded bg-blue-600 py-4 text-2xl text-white hover: bg-blue-700'>
                Close
            </button>
            
        </div>
      
    </div>
  )
}

export default PurchaseModel
