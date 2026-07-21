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
    if (window.confirm('Are you sure you want to remove this item?')) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between border-b border-gray-200 py-4 md:py-6 gap-4">
      {/* Left */}
      <div className="flex gap-4 flex-1">

        {/* Small Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-24 w-24 md:h-32 md:w-32 rounded object-cover flex-shrink-0"
        />

        <div className="flex flex-col flex-1">
          <h2 className="max-w-full md:max-w-md text-base md:text-lg font-medium text-gray-900">
            {product.title}
          </h2>

          <p className="mt-1 text-sm text-green-600 font-semibold">
            In Stock
          </p>

          {/* Mobile Price */}
          <div className="md:hidden mt-2">
            <p className="text-lg font-bold text-gray-900">
              ₹{product.price * product.quantity}
            </p>
            <p className="text-sm text-gray-500">
              ₹{product.price} × {product.quantity}
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2 flex-wrap">

            <button
              onClick={decreaseQuantity}
              className="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100 transition"
            >
              <FiMinus />
            </button>

            <span className="text-sm font-medium px-2 min-w-[20px] text-center">
              {product.quantity}
            </span>

            <button
              onClick={increaseQuantity}
              className="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100 transition"
            >
              <FiPlus />
            </button>

            <span className="text-sm text-gray-500">|</span>

            <button
              onClick={deleteItem}
              className="text-sm text-blue-600 hover:underline transition"
            >
              Delete
            </button>

            <span className="text-sm text-gray-500">|</span>

            <button className="text-sm text-blue-600 hover:underline transition">
              Save for later
            </button>

          </div>
        </div>
      </div>

      {/* Right - Desktop Price */}
      <div className="hidden md:block text-right min-w-[100px]">
        <p className="text-lg font-bold text-gray-900">
          ₹{product.price * product.quantity}
        </p>
        <p className="text-sm text-gray-500">
          ₹{product.price} × {product.quantity}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
