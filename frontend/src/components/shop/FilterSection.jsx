"use client";

import React from "react";

const FilterSection = ({ title, children }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default FilterSection;
