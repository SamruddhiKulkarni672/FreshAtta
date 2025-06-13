"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const [address, setAddress] = useState("karve nagar,33422");
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const total = cart.products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const checkoutHandler = () => router.push("/checkout");

  return (
    <div className="max-w-7xl lg:mx-auto mx-2 md:mx-4  py-6 ">
      <h1 className="text-lg font-bold mb-6">Shopping Cart</h1>

      <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        <div className="md:col-span-2 space-y-6">
          {cart.products.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="max-h-[400px] lg:py-0 py-4 md:py-8">
          <OrderSummary
            total={total}
            address={address}
            checkoutHandler={checkoutHandler}
          />
        </div>
      </div>
    </div>
  );
}
