import React from "react";
import { BsGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

function Toolbar() {
  return (
    <div className="mt-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="rounded-md bg-orange-50 p-3 hover:bg-orange-100 transition">
          <BsGrid3X3GapFill size={20} />
        </button>

        <button className="rounded-md p-3 hover:bg-gray-100 transition">
          <BsListUl size={20} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-[420px] items-center rounded-lg border border-gray-300 px-4">
          <FiSearch size={24} className="mr-3 text-gray-400" />

          <input
            type="search"
            placeholder="Search this list"
            className="w-full bg-transparent text-lg outline-none placeholder:text-gray-500"
          />
        </div>

        <button className="flex h-12 items-center gap-2 rounded-lg border border-gray-300 px-6 font-medium hover:bg-gray-100 transition">
          <span>Filter & Sort</span>
          <IoChevronDown size={18} />
        </button>
      </div>
    </div>
  );
}

export default Toolbar;