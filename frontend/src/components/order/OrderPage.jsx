
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { OrderHeader } from "@/components/order/OrderHeader";
import { OrderItems } from "@/components/order/OrderItems";
import { ShippingInfo } from "@/components/order/ShippingInfo";
import { PriceSummary } from "@/components/order/PriceSummary";
import { OrderActions } from "@/components/order/OrderActions";
import { OrderFooter } from "@/components/order/OrderFooter";

export default function OrderPage() {
  const router = useRouter();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("latestOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    } else {
      router.push("/checkout");
    }
  }, [router]);

  if (!order) return null;

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6 lg:py-10">
      <OrderHeader
        orderNumber={order.orderNumber}
        estimatedDelivery={order.estimatedDelivery}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <OrderItems products={order.products} />
          <ShippingInfo
            customerInfo={order.customerInfo}
            trackingNumber={order.trackingNumber}
          />
        </div>

        <div className="space-y-6">
          <PriceSummary
            totalPrice={order.totalPrice}
            shipping={order.shipping}
            tax={order.tax}
          />
          <OrderActions />
        </div>
      </div>

      <OrderFooter
        orderDate={order.orderDate}
        paymentMethod={order.paymentMethod}
      />
    </div>
  );
}
