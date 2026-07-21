import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import cartItemsState from "../store/cartItemsState";
import CartItem from "./CartItem";
import PurchaseModel from "./PurchaseModel";

function Cart() {
  const cartItems = useRecoilValue(cartItemsState);
  const setCartItems = useSetRecoilState(cartItemsState);
  const [showModal, setShowModal] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  const subtotal = total;
  const shipping = total > 5000 ? 0 : 99;
  const tax = Math.round(total * 0.18);
  const orderTotal = subtotal + shipping + tax;

  const clearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setCartItems([]);
    }
  };

  const continueShopping = () => {
    window.history.back();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-gray-600 mt-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left - Cart Items */}
          <div className="lg:col-span-8 rounded-xl bg-white p-4 md:p-8 shadow">
            
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-600 mb-4">
                  Your Cart is Empty
                </h2>
                <button
                  onClick={continueShopping}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full transition"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="hidden md:flex justify-between items-center mb-4 text-sm font-semibold text-gray-600 border-b pb-2">
                  <span className="flex-1">Product</span>
                  <span className="w-32 text-center">Quantity</span>
                  <span className="w-24 text-right">Price</span>
                </div>
                
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    product={item}
                  />
                ))}

                {/* Cart Actions */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <button
                    onClick={continueShopping}
                    className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition text-sm font-medium"
                  >
                    ← Continue Shopping
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full sm:w-auto px-6 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50 transition text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}

          </div>

          {/* Right - Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-4">
              <div className="sticky top-4 rounded-xl bg-white p-6 shadow">
                
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-base text-gray-700">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="flex justify-between text-base text-gray-700">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                  </div>

                  <div className="flex justify-between text-base text-gray-700">
                    <span>Tax (18%)</span>
                    <span>₹{tax}</span>
                  </div>

                  <hr className="border-gray-300" />

                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Order Total</span>
                    <span>₹{orderTotal}</span>
                  </div>
                </div>

                {shipping > 0 && (
                  <p className="mt-4 text-sm text-green-600">
                    Add ₹{5001 - total} more for FREE shipping!
                  </p>
                )}

                <button 
                  onClick={() => setShowModal(true)}
                  className="mt-6 w-full rounded bg-yellow-400 py-3 text-base font-semibold hover:bg-yellow-500 transition"
                >
                  Proceed to Buy
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure Checkout</span>
                </div>

                {showModal && (
                  <PurchaseModel 
                    total={orderTotal}
                    onClose={() => setShowModal(false)}
                  />
                )}

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Cart;
