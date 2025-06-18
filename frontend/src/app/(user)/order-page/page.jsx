
import OrderPage from "@/components/order/OrderPage"
const OrdersPage = ()=>{
  return <div>
    <OrderPage/>
    </div>
}

export default OrdersPage;








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
//     <div className="container max-w-7xl mx-auto px-4 py-6 lg:py-10">
//       {/* Header */}
//       <div className="flex justify-between items-start mb-6">
//         <div>
//           <h1 className="text-lg font-bold">Order Id: {" "} #{order.orderNumber}</h1>
//           <p className="text-sm text-gray-500 mt-2">
//             Estimated delivery: {order.estimatedDelivery || "March 15, 2024"}
//           </p>
//         </div>
//         <span className="bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full font-medium">
//           Confirmed
//         </span>
//       </div>

//       {/* Content Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Left: Order Items and Shipping Info */}
//         <div className="md:col-span-2 space-y-6">
//           {/* Order Items */}
//           <div className="border rounded-lg p-5">
//             <h2 className="font-semibold text-lg mb-4">Order Items</h2>
//             <div className="divide-y">
//               {order.products.map((product, index) => (
//                 <div key={index} className="flex items-center py-4 gap-4">
//                   <div className="w-16 h-16 relative rounded overflow-hidden border">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       layout="fill"
//                       objectFit="cover"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium">{product.name}</p>
//                     <p className="text-sm text-gray-500">
//                       Quantity: {product.quantity}
//                     </p>
//                   </div>
//                   <p className="font-medium">₹{product.price.toFixed(2)}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Shipping Information */}
//           <div className="border rounded-lg p-5">
//             <h2 className="font-semibold text-lg mb-4">Shipping Information</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-sm font-semibold">Delivery Address</h3>
//                 <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
//                   {order.customerInfo.name}
//                   <br />
//                   {order.customerInfo.address.street}
//                   <br />
//                   {order.customerInfo.address.city},{" "}
//                   {order.customerInfo.address.state}{" "}
//                   {order.customerInfo.address.zip}
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold">Shipping Method</h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Standard Shipping
//                   <br />
//                   Tracking Number:{" "}
//                   <span className="font-medium text-black">
//                     {order.trackingNumber || "1Z999AA1234567890"}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: Price Summary & Actions */}
//         <div className="space-y-6">
//           {/* Price Summary */}
//           <div className="border rounded-lg p-5">
//             <h2 className="font-semibold text-lg mb-4">Price Summary</h2>
//             <div className="space-y-2 text-sm text-gray-700">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                  <span>₹{order.totalPrice.toFixed(2)}</span>
//                 {/* <span>₹{order.subtotal?.toFixed(2) || "0.00"}</span> */}
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>₹{order.shipping?.toFixed(2) || "0.00"}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax</span>
//                 <span>₹{order.tax?.toFixed(2) || "0.00"}</span>
//               </div>
//               <hr />
//               <div className="flex justify-between font-semibold text-black text-base">
//                 <span>Total</span>
//                 <span>₹{order.totalPrice.toFixed(2)}</span>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="space-y-3">
//             <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
//               🚚 Track Order
//             </button>
//             {/* <button className="w-full border py-2 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
//               🧾 Download Invoice
//             </button> */}
//             <div className="text-center">
//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 ❓ Need Help?
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Info */}
//       <div className="border rounded-lg p-5 mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
//         <div>
//           <span className="font-medium block mb-1">Order Date</span>
//           {order.orderDate || "March 10, 2024 at 2:30 PM"}
//         </div>
//         <div>
//           <span className="font-medium block mb-1">Payment Method</span>
//           {order.paymentMethod === "card"
//             ? `Visa ending in ${order.last4 || "4242"}`
//             : "Cash on Delivery"}
//         </div>
//         <div>
//           <span className="font-medium block mb-1">Return Policy</span>
//           30-day return window
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderPage;

