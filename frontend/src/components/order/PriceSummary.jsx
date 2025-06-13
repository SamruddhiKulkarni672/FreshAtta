// components/order/PriceSummary.jsx
"use client";

export const PriceSummary = ({ totalPrice, shipping = 0, tax = 0 }) => {
  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-semibold text-lg mb-4">Price Summary</h2>
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-black text-base">
          <span>Total</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};