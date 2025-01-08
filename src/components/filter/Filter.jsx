import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Filter() {
  const context = useContext(myContext);
  const {
    mode,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = context;

  return (
    <div className="container mx-auto px-4 mt-5">
      <div
        className="p-6 rounded-lg shadow-lg border border-gray-200"
        style={{
          backgroundColor: mode === "dark" ? "#1e1f23" : "#ffffff",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        {/* Search Section */}
        <div className="relative mb-5">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="searchkey"
            value={searchkey}
            onChange={(e) => setSearchkey(e.target.value)}
            id="searchkey"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            style={{
              backgroundColor: mode === "dark" ? "#2d2f36" : "#f9fafb",
              color: mode === "dark" ? "white" : "",
            }}
          />
        </div>

        {/* Filter Section */}
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold text-lg">Filters</p>
          <button
            onClick={() => {
              setSearchkey("");
              setFilterType("");
              setFilterPrice("");
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400"
          >
            Reset Filters
          </button>
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Filter by Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Filter by Category
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              style={{
                backgroundColor: mode === "dark" ? "#2d2f36" : "#f9fafb",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <option value="">All Categories</option>
              {[
                ...new Set(product.map((item) => item.category)),
              ].map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Filter by Price */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Filter by Price
            </label>
            <select
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              style={{
                backgroundColor: mode === "dark" ? "#2d2f36" : "#f9fafb",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <option value="">All Prices</option>
              {[
                ...new Set(product.map((item) => item.price)),
              ].map((price, index) => (
                <option key={index} value={price}>
                  {price} BDT
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
