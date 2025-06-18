"use client";

import React, { useState } from "react";

const FilterRange = ({ min, max }) => {
  const [range, setRange] = useState((max - min) / 2);

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={range}
        onChange={(e) => setRange(e.target.value)}
        className="w-full"
      />
      <div className="text-xs text-gray-500 mt-1">Up to ₹{range}</div>
    </div>
  );
};

export default FilterRange;
