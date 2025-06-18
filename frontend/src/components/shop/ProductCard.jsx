import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Rating from "@/components/ui/Rating";

const ProductCard = ({ image, title, price, oldPrice, rating }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition">
      <div className="w-full h-40 relative mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-1">{title}</h3>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-green-600 font-bold text-md">${price.toFixed(2)}</span>
        <span className="text-gray-400 line-through text-sm">${oldPrice.toFixed(2)}</span>
      </div>
      <Rating rating={rating} />
      <div className="mt-3">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
