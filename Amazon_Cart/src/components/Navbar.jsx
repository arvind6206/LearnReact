import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import cartItemsState from "../store/cartItemsState";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const cartItems = useRecoilValue(cartItemsState);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-gray-950">
      <div className="flex h-16 w-full items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <h1 
          onClick={() => navigate('/')}
          className="text-2xl md:text-4xl font-bold text-white cursor-pointer"
        >
          amazon.in
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <p className="text-sm md:text-base">Hello, User</p>

          {/* Cart */}
          <div 
            onClick={() => navigate('/cart')}
            className="relative cursor-pointer hover:opacity-80 transition"
          >
            <CiShoppingCart size={38} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                {totalItems}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoMenu size={32} />
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4">
          <div className="flex flex-col gap-4 text-white">
            <p className="text-base">Hello, User</p>

            <div 
              onClick={() => {
                navigate('/cart');
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
            >
              <CiShoppingCart size={28} />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
