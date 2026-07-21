import React, { useState } from "react";
import { BsGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

function Toolbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="mt-4 md:mt-5 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* View Toggle Buttons */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <button className="rounded-md bg-orange-50 p-2 md:p-3 hover:bg-orange-100 transition">
          <BsGrid3X3GapFill size={18} className="md:size-[20px]" />
        </button>

        <button className="rounded-md p-2 md:p-3 hover:bg-gray-100 transition">
          <BsListUl size={18} className="md:size-[20px]" />
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
        {/* Search Bar */}
        <div className="flex h-10 md:h-12 flex-1 md:w-[420px] items-center rounded-lg border border-gray-300 px-3 md:px-4">
          <FiSearch size={18} className="md:mr-3 text-gray-400 md:size-[24px]" />

          <input
            type="search"
            placeholder="Search this list"
            className="w-full bg-transparent text-sm md:text-lg outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Filter Button */}
        <button className="hidden md:flex h-12 items-center gap-2 rounded-lg border border-gray-300 px-4 md:px-6 text-sm md:text-base font-medium hover:bg-gray-100 transition whitespace-nowrap">
          <span>Filter & Sort</span>
          <IoChevronDown size={16} className="md:size-[18px]" />
        </button>

        {/* Mobile Filter Button */}
        <button className="md:hidden h-10 px-4 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition">
          Filter
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
