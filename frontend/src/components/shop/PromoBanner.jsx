"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  const handleClick = () => {
    alert("You clicked the banner CTA!");
  };

  return (
    <section className="bg-green-100 text-center py-10 px-4 rounded-lg shadow mb-10">
      <h2 className="text-3xl font-bold text-green-800 mb-2">
        Welcome to Our Organic Store!
      </h2>
      <p className="text-lg text-green-700 mb-4">
        Fresh & healthy organic food delivered to your door.
      </p>
      <Button
        onClick={handleClick}
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        Explore Now
      </Button>
    </section>
  );
};

export default PromoBanner;
