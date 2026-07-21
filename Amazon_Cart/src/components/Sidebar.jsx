import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Toolbar from "./Toolbar";
import WishlistTopbar from "./WishlistTopbar";
import products from '../data/products.js'
import { IoMenu } from "react-icons/io5";

function Wishlist() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-20 left-4 z-50 bg-gray-900 text-white p-2 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <IoMenu size={24} />
      </button>

      {/* Sidebar - Mobile: Overlay, Desktop: Fixed */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-200 p-5 transform transition-transform duration-300 ease-in-out
        md:relative md:transform-none
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className='w-full bg-slate-300 rounded-lg p-4'>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Wish List</h1>
          <span className="text-sm md:text-md font-semibold text-gray-700">Default List</span>
        </div>

        {/* Mobile Close Button */}
        <button
          className="md:hidden mt-4 text-gray-700 font-semibold"
          onClick={() => setIsSidebarOpen(false)}
        >
          ← Close
        </button>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Right Content */}
      <div className="flex-1 p-4 md:p-5">
        {/* Wishlist Header */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            <WishlistTopbar/>
          </h2>
        </div>

        <Toolbar/>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default Wishlist;
