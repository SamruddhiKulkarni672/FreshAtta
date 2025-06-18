"use client";

import React from "react";

const FilterRating = () => {
  return (
    <div className="space-y-1">
      {[5, 4, 3, 2].map((stars) => (
        <label key={stars} className="flex items-center space-x-2 text-sm text-gray-600">
          <input type="checkbox" className="accent-yellow-500" />
          <span>{"⭐".repeat(stars)} & Up</span>
        </label>
      ))}
    </div>
  );
};

export default FilterRating;
