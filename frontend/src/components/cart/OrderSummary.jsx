"use client";

export default function OrderSummary({ total, address, checkoutHandler }) {
  return (
    <div className="p-6 bg-[#ebeaea] rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">Order Summary</h2>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-[#7a7777]">
        <span>Shipping</span>
        <span>Free</span>
      </div>

      <div className="flex justify-between">
        <span>Address: {address}</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

      <button
        onClick={checkoutHandler}
        className="w-full bg-[#D2874D] text-white py-2 rounded-lg hover:bg-[#a76f45] transition"
      >
        Checkout
      </button>
    </div>
  );
}
