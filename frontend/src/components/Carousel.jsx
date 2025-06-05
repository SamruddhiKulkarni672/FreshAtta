'use client';

import React, { useState } from 'react';

const images = [
  '/images/image1.png',
  '/images/image.png',
  '/images/image.png',
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);

  return (
<div className="flex items-center justify-center m-4 rounded-3xl    w-full h-[400px]">
  <div className="relative w-full h-full max-w-7xl mx-auto overflow-hidden rounded-3xl">
    <img
      src={images[current]}
      alt={`slide-${current}`}
      className="w-full h-full object-cover transition-all duration-500"
    />
    <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-3 rounded-full"
    >
      ❮
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-3 rounded-full"
    >
      ❯
    </button>
  </div>
</div>



  );
}

export default Carousel;
