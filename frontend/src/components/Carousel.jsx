"use client";

import React, { useEffect, useState } from "react";
import {
  RiArrowLeftBoxFill,
  RiArrowLeftDownFill,
  RiArrowLeftFill,
  RiSkipLeftFill,
} from "react-icons/ri";

const images = ["/images/image1.png", "/images/image.png"];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="flex items-center justify-center m-4 rounded-3xl mt-10 w-full h-[400px]">
      <div className="relative w-full h-full max-w-7xl mx-auto overflow-hidden rounded-3xl">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl w-12 bg-black bg-opacity-50 p-3 rounded-full z-20"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl w-12 bg-black bg-opacity-50 p-3 rounded-full z-20"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Carousel;
