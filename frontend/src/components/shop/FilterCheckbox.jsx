"use client";

import React from "react";

const FilterCheckbox = ({ label }) => {
  return (
    <label className="flex items-center space-x-2 text-sm text-gray-600">
      <input type="checkbox" className="accent-green-600" />
      <span>{label}</span>
    </label>
  );
};

export default FilterCheckbox;
