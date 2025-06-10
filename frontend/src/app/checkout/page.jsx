// app/cart/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { setOrderedData } from "@/features/order/orderSlice";
import { FaAngleDown, FaAngleUp, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector, UseSelector } from "react-redux";
// import Model from "../../components/cart/Modal";
// import ChangeAddress from "../../components/cart/ChangeAddress";

const checkoutPage = () => {
  const dispatch = useDispatch();
  const [billingToggle, setBillingToggle] = useState(false);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };

    // dispatch(setOrderedData(newOrder));
    console.log(newOrder);

    localStorage.setItem("latestOrder", JSON.stringify(newOrder));

    router.push("/order-page");
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Checkout page</h1>

        <div className="flex space-x-4">
          {/* Cart Items */}
          <div className="md:w-1/2">cart items</div>

          {/* Summary */}
          <div className="md:w-1/2 w-full border border-gray-200 p-6 rounded-2xl shadow-lg bg-white space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Order Summary
            </h3>

            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {cart.products.map((product) => (
                <div
                  key={product.name}
                  className="flex items-center gap-4 border-b pb-3"
                >
                  <div className="w-16 h-16 overflow-hidden rounded-lg border">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-700">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      ₹{product.price} × {product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t flex justify-between items-center">
              <span className="text-base font-semibold text-gray-700">
                Total Price:
              </span>
              <span className="text-lg font-bold text-green-600">
                ₹{cart.totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => handleOrder()}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkoutPage;
