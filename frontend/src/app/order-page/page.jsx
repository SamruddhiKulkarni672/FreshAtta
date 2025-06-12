"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OrderPage = () => {
  const router = useRouter();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("latestOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    } else {
      router.push("/checkout");
    }
  }, []);

  if (!order) return null;

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6 lg:py-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-lg font-bold">Order Id: {" "} #{order.orderNumber}</h1>
          <p className="text-sm text-gray-500 mt-2">
            Estimated delivery: {order.estimatedDelivery || "March 15, 2024"}
          </p>
        </div>
        <span className="bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full font-medium">
          Confirmed
        </span>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Order Items and Shipping Info */}
        <div className="md:col-span-2 space-y-6">
          {/* Order Items */}
          <div className="border rounded-lg p-5">
            <h2 className="font-semibold text-lg mb-4">Order Items</h2>
            <div className="divide-y">
              {order.products.map((product, index) => (
                <div key={index} className="flex items-center py-4 gap-4">
                  <div className="w-16 h-16 relative rounded overflow-hidden border">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {product.quantity}
                    </p>
                  </div>
                  <p className="font-medium">₹{product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border rounded-lg p-5">
            <h2 className="font-semibold text-lg mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold">Delivery Address</h3>
                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                  {order.customerInfo.name}
                  <br />
                  {order.customerInfo.address.street}
                  <br />
                  {order.customerInfo.address.city},{" "}
                  {order.customerInfo.address.state}{" "}
                  {order.customerInfo.address.zip}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Shipping Method</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Standard Shipping
                  <br />
                  Tracking Number:{" "}
                  <span className="font-medium text-black">
                    {order.trackingNumber || "1Z999AA1234567890"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Price Summary & Actions */}
        <div className="space-y-6">
          {/* Price Summary */}
          <div className="border rounded-lg p-5">
            <h2 className="font-semibold text-lg mb-4">Price Summary</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                 <span>₹{order.totalPrice.toFixed(2)}</span>
                {/* <span>₹{order.subtotal?.toFixed(2) || "0.00"}</span> */}
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{order.shipping?.toFixed(2) || "0.00"}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{order.tax?.toFixed(2) || "0.00"}</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-black text-base">
                <span>Total</span>
                <span>₹{order.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
              🚚 Track Order
            </button>
            {/* <button className="w-full border py-2 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
              🧾 Download Invoice
            </button> */}
            <div className="text-center">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                ❓ Need Help?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="border rounded-lg p-5 mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
        <div>
          <span className="font-medium block mb-1">Order Date</span>
          {order.orderDate || "March 10, 2024 at 2:30 PM"}
        </div>
        <div>
          <span className="font-medium block mb-1">Payment Method</span>
          {order.paymentMethod === "card"
            ? `Visa ending in ${order.last4 || "4242"}`
            : "Cash on Delivery"}
        </div>
        <div>
          <span className="font-medium block mb-1">Return Policy</span>
          30-day return window
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const OrderPage = () => {
//   const router = useRouter();
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     const savedOrder = localStorage.getItem("latestOrder");
//     if (savedOrder) {
//       setOrder(JSON.parse(savedOrder));
//     } else {
//       router.push("/checkout");
//     }
//   }, []);

//   if (!order) return null;

//   return (
//     <div className="container max-w-4xl mx-auto px-4 py-10">
//       <div className="bg-white border rounded-lg shadow-sm p-6">
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h1 className="text-xl font-semibold text-gray-800">
//               Order ID: {order.orderNumber}
//             </h1>
//             <p className="text-sm text-gray-500">
//               Order date: {order.orderDate || "Feb 16, 2022"}
//             </p>
//             <p className="text-sm text-green-600 font-medium mt-1">
//               ✅ Estimated delivery: {order.estimatedDelivery || "May 14, 2022"}
//             </p>
//           </div>
//           <div className="flex gap-2">
//             <button className="px-3 py-1 border text-sm rounded-md text-gray-700 hover:bg-gray-100">
//               Invoice
//             </button>
//             <button className="px-3 py-1 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">
//               Track order
//             </button>
//           </div>
//         </div>

//         {/* Product List */}
//         <div className="divide-y">
//           {order.products.map((product, index) => (
//             <div key={index} className="flex items-center py-4">
//               <div className="relative w-14 h-14 rounded overflow-hidden border">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="ml-4 flex-1">
//                 <p className="text-gray-800 font-medium">{product.name}</p>
//                 <p className="text-gray-500 text-sm">
//                   {product.variant || "Space Gray"}{" "}
//                   {product.storage && `· ${product.storage}`}{" "}
//                   {product.network && `· ${product.network}`}
//                 </p>
//               </div>
//               <div className="text-right text-gray-800">
//                 <p className="font-medium">₹{product.price.toFixed(2)}</p>
//                 <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Payment and Delivery */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 border-t pt-6">
//           {/* Payment Info */}
//           <div>
//             <h2 className="text-gray-800 font-semibold mb-2">Payment</h2>
//             <p className="text-gray-600">
//               {order.paymentMethod === "card"
//                 ? `Visa **${order.last4 || "56"}`
//                 : order.paymentMethod === "cash"
//                 ? "Cash on Delivery"
//                 : "Online Payment"}
//             </p>
//           </div>

//           {/* Delivery Info */}
//           <div>
//             <h2 className="text-gray-800 font-semibold mb-2">Delivery</h2>
//             <p className="text-gray-600 whitespace-pre-line">
//               {order.customerInfo.address.street}
//               <br />
//               {order.customerInfo.address.city},{" "}
//               {order.customerInfo.address.state}{" "}
//               {order.customerInfo.address.zip}
//               <br />
//               {order.customerInfo.phone}
//             </p>
//           </div>
//         </div>

//         {/* Total */}
//         <div className="flex justify-end mt-6 border-t pt-4">
//           <div className="text-right">
//             <p className="text-gray-700 text-sm">Subtotal</p>
//             <p className="text-2xl font-bold text-gray-900">
//               ₹{order.totalPrice.toFixed(2)}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderPage;
