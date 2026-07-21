import React from "react";
import { useRecoilValue } from "recoil";
import cartItemsState from "../store/cartItemsState";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useRecoilValue(cartItemsState);

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-12 gap-6">

        {/* Left */}
        <div className="col-span-9 rounded-xl bg-white p-8 shadow">

          <h1 className="mb-8 text-2xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <h2 className="text-xl font-semibold text-gray-600">
              Your Cart is Empty
            </h2>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                product={item}
              />
            ))
          )}

        </div>

        {/* Right */}

        <div className="col-span-3 h-fit rounded-xl bg-white p-6 shadow">

          <h2 className="text-xl font-bold text-gray-900">
            Order Summary
          </h2>

          <div className="mt-6 flex justify-between text-base text-gray-700">

            <span>
              Items ({cartItems.length})
            </span>

            <span>
              ₹{total}
            </span>

          </div>

          <hr className="my-4 border-gray-300" />

          <div className="flex justify-between text-lg font-bold text-gray-900">

            <span>Order Total</span>

            <span>₹{total}</span>

          </div>

          <button className="mt-6 w-full rounded bg-yellow-400 py-3 text-base font-semibold hover:bg-yellow-500 transition">
            Proceed to Buy
          </button>

        </div>

      </div>
    </div>
  );
}

export default Cart;
