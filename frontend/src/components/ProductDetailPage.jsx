// components/ProductDetailPage.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar, FaTruck, FaShieldAlt, FaLeaf } from "react-icons/fa";

const ProductDetailPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full h-[500px] relative rounded-xl overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-green-700">
              ₹{product.discountedPrice}
            </span>
            <span className="text-gray-500 line-through">
              ₹{product.originalPrice}
            </span>
            <span className="text-sm text-white bg-green-500 px-2 py-1 rounded">
              {product.discountPercent}% OFF
            </span>
          </div>
          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(product.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-sm text-gray-600 ml-2">342 Reviews</span>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            {product.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() =>
                setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
              }
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
            >
              +
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
              Add to Cart
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md">
              Buy Now
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FaTruck className="text-green-600" />
              Free delivery on orders above ₹499
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-600" />
              100% authentic products
            </div>
            <div className="flex items-center gap-2">
              <FaLeaf className="text-green-600" />
              100% natural and organic
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 border-t pt-6">
        <div className="flex gap-6 border-b">
          <button className="pb-2 border-b-2 border-green-600 font-medium text-green-700">
            Description
          </button>
          <button className="pb-2 text-gray-500">Specifications</button>
          <button className="pb-2 text-gray-500">Reviews</button>
          <button className="pb-2 text-gray-500">Shipping Info</button>
        </div>
        <div className="mt-4 text-gray-700">
          <h2 className="text-lg font-semibold mb-2">Product Description</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
