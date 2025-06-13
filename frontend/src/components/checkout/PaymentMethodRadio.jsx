// components/checkout/PaymentMethodRadio.jsx
"use client";

import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const PaymentMethodRadio = ({ value, onChange }) => {
  return (
    <div className="space-y-2 border-0">
      <Card className="rounded-none">
        <CardHeader>
          <h3 className="text-lg font-semibold">Payment Method</h3>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={value}
            onValueChange={onChange}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash">Cash on Delivery</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="online" id="online" />
              <Label htmlFor="online">Online Payment</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
};