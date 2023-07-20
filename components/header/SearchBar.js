import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
function SearchBar() {
  return (
    <div className="hidden sm:flex items-center h-10 bg-yellow-400 rounded-md flex-grow cursor-pointer">
      <input
        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
        type="text"
      />
      <SearchIcon className="h-12 p-4" />
    </div>
  );
}

export default SearchBar;
