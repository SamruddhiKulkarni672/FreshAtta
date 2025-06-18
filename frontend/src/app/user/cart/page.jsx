import CartPage from "@/components/cart/CartPage";

export default function Cart() {
  return (
    <div className="lg:mb-[70px] md:mb-[40px] mb-[10px]">
      <CartPage />
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FaTrashAlt } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// //import Model from "../../components/cart/Modal";
// //import ChangeAddress from "../../components/cart/ChangeAddress";
// import {
//   increaseQuantity,
//   removeFromCart,
//   decreaseQuantity,
// } from "../../rtk/cartSlice";
// export default function CartPage() {
//   const [mounted, setMounted] = useState(false);

//   const router = useRouter();
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);
//   const [address, setAddress] = useState("karve nagar,33422");
//   const [isModelOpen, setIsModelOpen] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;
//   const total = cart.products.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const checkoutHandler = () => {
//     router.push("/checkout");
//   };
//   // console.log(cart.products.length);
//   return (
//     <div className="max-w-7xl mx-auto  py-6  ">
//       <h1 className="text-lg font-bold mb-6">Shopping Cart</h1>

//       <div className="grid md:grid-cols-3 gap-8 ">
//         {/* Cart Items */}
//         <div className="md:col-span-2 space-y-6">
//           {cart.products.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between gap-4 border-2 border-[#EAE2E2] p-4 rounded-lg shadow- md"
//               style={{ boxShadow: "6px 6px 6px 0px #DFD8D8" }}
//             >
//               <div className="flex w-[50%] items-center gap-4 cursor-pointer">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded-md"
//                 />
//                 <div>
//                   <h2 className="font-semibold text-lg">{item.name}</h2>
//                   <p className="text-sm text-gray-500">₹{item.price}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 w-[20%]">
//                 <button
//                   onClick={() => dispatch(decreaseQuantity(item.id))}
//                   className="px-2 py-1 border rounded"
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => dispatch(increaseQuantity(item.id))}
//                   className="px-2 py-1 border rounded"
//                 >
//                   +
//                 </button>
//               </div>

//               <div className="w-[20%]">
//                 <p className="font-semibold ml-3">
//                   ₹{(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//               <div className="w-[10%]">
//                 <button
//                   onClick={() => dispatch(removeFromCart(item.id))}
//                   className="text-gray-500 hover:text-red-700"
//                 >
//                   <FaTrashAlt />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Summary */}
//         <div className="  p-6 bg-[#ebeaea] rounded-lg   space-y-4">
//           <h2 className="text-xl font-semibold">Order Summary</h2>
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{total.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between text-[#7a7777]">
//             <span>Shipping</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="">address: {address}</span>
//             {/* <button className="" onClick={() => setIsModelOpen(true)}>
//               change address
//             </button> */}
//           </div>

//           <hr />
//           <div className="flex justify-between font-bold text-lg">
//             <span>Total</span>
//             <span>₹{total.toFixed(2)}</span>
//           </div>
//           <button
//             onClick={() => checkoutHandler()}
//             className="w-full bg-[#D2874D] text-white py-2 rounded-lg hover:bg-[#a76f45] transition"
//           >
//             Checkout
//           </button>
//         </div>
//         {/* <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
//           <ChangeAddress
//             setAddress={setAddress}
//             setIsModelOpen={setIsModelOpen}
//           />
//         </Model> */}
//       </div>
//     </div>
//   );
// }
