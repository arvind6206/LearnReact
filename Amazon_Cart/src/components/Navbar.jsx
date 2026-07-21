import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useRecoilValue } from "recoil";
import cartItemsState from "../store/cartItemsState";

function Navbar() {
  const cartItems = useRecoilValue(cartItemsState);

  return (
    <div className="flex h-15 w-full items-center justify-between bg-gray-950">
      <h1 className="ml-30 text-4xl font-bold text-white">
        amazon.in
      </h1>

      <div className="mr-40 flex items-center gap-6 text-white">
        <p>Hello, User</p>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <CiShoppingCart size={38} />

          {cartItems.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;