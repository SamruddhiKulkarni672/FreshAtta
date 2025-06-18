"use client";

import React from "react";
import FilterSection from "./FilterSection";
import FilterCheckbox from "./FilterCheckbox";
import FilterRange from "./FilterRange";
import FilterRating from "./FilterRating";

const FilterSidebar = () => {
  return (
    <aside className="w-full md:w-64 p-4 bg-white shadow rounded-lg space-y-6">
      <FilterSection title="Categories">
        {["Vegetables", "Fruits", "Grains", "Dairy"].map((cat) => (
          <FilterCheckbox key={cat} label={cat} />
        ))}
      </FilterSection>

      <FilterSection title="Price Range">
        <FilterRange min={0} max={100} />
      </FilterSection>

      <FilterSection title="Ratings">
        <FilterRating />
      </FilterSection>
    </aside>
  );
};

export default FilterSidebar;
