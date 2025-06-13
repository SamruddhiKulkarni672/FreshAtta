"use client";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/rtk/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center justify-between gap-4 border-2 border-[#EAE2E2] p-4 rounded-lg shadow-md"
      style={{ boxShadow: "6px 6px 6px 0px #DFD8D8" }}
    >
      <div className="flex w-[50%] items-center gap-4 cursor-pointer">
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-md"
        />
        <div>
          <h2 className="font-semibold text-[14px] md:text-lg">{item.name}</h2>
          <p className="text-sm hidden md:block text-gray-500">₹{item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-[20%]">
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
      </div>

      <div className="w-[20%] font-semibold ml-3 hidden md:block">
        ₹{(item.price * item.quantity).toFixed(2)}
      </div>

      <div className="w-[10%]">
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-gray-500 hover:text-red-700"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}
