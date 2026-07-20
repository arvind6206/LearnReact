import ProductCard from "./ProductCard";
import Toolbar from "./Toolbar";
import WishlistTopbar from "./WishlistTopbar";
import products from '../data/products.js'

function Wishlist() {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-200 p-5">
        <div className='w-55 bg-slate-300 rounded-sm'>
          <h1 className="text-3xl font-bold">Your Wish List</h1>
        <span className="text-md font-semibold">Default List</span>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-5">
        {/* Wishlist Header */}
        <h2 className="text-2xl font-semibold">
          <WishlistTopbar/>
        </h2>

        <Toolbar/>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
