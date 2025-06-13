// components/order/OrderHeader.jsx
"use client";

export const OrderHeader = ({ orderNumber, status, estimatedDelivery }) => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-lg font-bold">Order Id: #{orderNumber}</h1>
        <p className="text-sm text-gray-500 mt-2">
          Estimated delivery: {estimatedDelivery || "March 15, 2024"}
        </p>
      </div>
      <span className="bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full font-medium">
        {status || "Confirmed"}
      </span>
    </div>
  );
};