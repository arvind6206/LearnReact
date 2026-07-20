import React from "react";

function ProductCard({ product }) {
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
          <button className="mt-4 rounded-full bg-yellow-400 py-2 font-semibold hover:bg-yellow-500">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
