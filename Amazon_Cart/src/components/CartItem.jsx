import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useRecoilState } from "recoil";
import cartItemsState from "../store/cartItemsState";

function CartItem({ product }) {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  // Increase Quantity
  const increaseQuantity = () => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = () => {
    if (product.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Delete Product
  const deleteItem = () => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="flex justify-between border-b border-gray-200 py-6">
      {/* Left */}
      <div className="flex gap-4">

        {/* Small Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-32 w-32 rounded object-cover"
        />

        <div className="flex flex-col">
          <h2 className="max-w-md text-lg font-medium text-gray-900">
            {product.title}
          </h2>

          <p className="mt-1 text-sm text-green-600 font-semibold">
            In Stock
          </p>

          <div className="mt-3 flex items-center gap-2">

            <button
              onClick={decreaseQuantity}
              className="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
            >
              <FiMinus />
            </button>

            <span className="text-sm font-medium px-2">
              {product.quantity}
            </span>

            <button
              onClick={increaseQuantity}
              className="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
            >
              <FiPlus />
            </button>

            <span className="text-sm text-gray-500">|</span>

            <button
              onClick={deleteItem}
              className="text-sm text-blue-600 hover:underline"
            >
              Delete
            </button>

          </div>
        </div>
      </div>

      {/* Right */}
      <div className="text-right">
        <p className="text-lg font-bold text-gray-900">
          ₹{product.price * product.quantity}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
