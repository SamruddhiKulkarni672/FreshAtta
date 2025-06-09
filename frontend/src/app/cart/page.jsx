"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector, UseSelector } from "react-redux";
//import Model from "../../components/cart/Modal";
//import ChangeAddress from "../../components/cart/ChangeAddress";
import {
  increaseQuantity,
  removeFromCart,
  decreaseQuantity,
} from "../../rtk/cartSlice";
export default function CartPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("karve nagar,33422");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const total = cart.products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const checkoutHandler = () => {
    router.push("/checkout");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8 ">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart.products.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 border p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div> */}

              <p className="font-semibold">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-gray-500 hover:text-red-700"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span>{address}</span>
            {/* <button className="" onClick={() => setIsModelOpen(true)}>
              change address
            </button> */}
          </div>

          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button
            onClick={() => checkoutHandler()}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Checkout
          </button>
        </div>
        {/* <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
          <ChangeAddress
            setAddress={setAddress}
            setIsModelOpen={setIsModelOpen}
          />
        </Model> */}
      </div>
    </div>
  );
}
