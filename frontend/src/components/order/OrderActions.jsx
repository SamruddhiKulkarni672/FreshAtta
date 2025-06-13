// components/order/OrderActions.jsx
"use client";

export const OrderActions = () => {
  return (
    <div className="space-y-3">
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
        🚚 Track Order
      </button>
      <div className="text-center">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          ❓ Need Help?
        </a>
      </div>
    </div>
  );
};