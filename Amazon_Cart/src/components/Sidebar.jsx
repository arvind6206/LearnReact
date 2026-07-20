import Toolbar from "./Toolbar";
import WishlistTopbar from "./WishlistTopbar";

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

        {/* Product Grid */}

      </div>

    </div>
  );
}

export default Wishlist;