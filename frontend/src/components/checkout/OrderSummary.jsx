// components/checkout/OrderSummary.jsx
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const OrderSummary = ({ cart, onPlaceOrder }) => {
  return (
    <div className="w-full lg:w-96">
      <Card className="rounded-none sm:rounded-md">
        <CardHeader>
          <h3 className="text-lg font-semibold">Order Summary</h3>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {cart.products.length === 0 ? (
              <p className="text-sm text-muted-foreground">Your cart is empty</p>
            ) : (
              cart.products.map((product) => (
                <div
                  key={`${product.id}-${product.name}`}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <div className="relative w-16 h-16 rounded-md overflow-hidden border">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                      priority
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ₹{product.price} × {product.quantity}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-between pt-4 border-t">
            <span className="font-semibold">Total:</span>
            <span className="text-lg font-bold">
              ₹{cart.totalPrice?.toFixed(2) || "0.00"}
            </span>
          </div>

          <Button
            onClick={onPlaceOrder}
            disabled={cart.products.length === 0}
            className="w-full bg-cartBackgroundColor text-white hover:bg-cartBackgroundColor/90"
            size="lg"
          >
            Place Order
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};