// components/order/OrderFooter.jsx
"use client";

export const OrderFooter = ({ orderDate, paymentMethod }) => {
  return (
    <div className="border rounded-lg p-5 mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
      <div>
        <span className="font-medium block mb-1">Order Date</span>
        {orderDate || "March 10, 2024 at 2:30 PM"}
      </div>
      <div>
        <span className="font-medium block mb-1">Payment Method</span>
        {paymentMethod === "card"
          ? `Visa ending in 4242`
          : "Cash on Delivery"}
      </div>
      <div>
        <span className="font-medium block mb-1">Return Policy</span>
        30-day return window
      </div>
    </div>
  );
};