import React from "react";
import { useRecoilState } from "recoil";
import cartItemsState from "../store/cartItemsState.js";

function ProductCard({ product }) {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState)

  const handleAddToCart = () => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        // If item already exists, update its quantity
        return prevCartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item does not exist, add it with quantity 1
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <>
      <div className="overflow-hidden rounded-lg border bg-white transition hover:shadow-lg">
        {/* Product Image */}
        <div className="h-56 w-full">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col p-4">
          {/* Title */}
          <h2 className="line-clamp-2 text-lg font-semibold">
            {product.title}
          </h2>

          {/* Price */}
          <p className="mt-2 text-2xl font-bold">₹{product.price}</p>

          {/* Button */}
          <button onClick={handleAddToCart}
          className="mt-4 rounded-full bg-yellow-400 py-2 font-semibold hover:bg-yellow-500">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
