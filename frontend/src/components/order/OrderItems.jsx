// components/order/OrderItems.jsx
"use client";

import Image from "next/image";

export const OrderItems = ({ products }) => {
  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-semibold text-lg mb-4">Order Items</h2>
      <div className="divide-y">
        {products.map((product, index) => (
          <div key={index} className="flex items-center py-4 gap-4">
            <div className="w-16 h-16 relative rounded overflow-hidden border">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
            </div>
            <p className="font-medium">₹{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};