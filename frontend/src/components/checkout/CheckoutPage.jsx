"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FormField } from "@/components/checkout/FormField";
import { TimeSlotSelect } from "@/components/checkout/TimeSlotSelect";
import { PaymentMethodRadio } from "@/components/checkout/PaymentMethodRadio";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { toast } from "sonner";
const CheckoutPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    state: "Maharashtra",
    timeSlot: "9:00 AM - 11:00 AM",
    paymentMethod: "cash",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validateField = useCallback((name, value) => {
    if (!value && name !== "lastName") {
      return "This field is required";
    }

    switch (name) {
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email"
          : "";
      case "phone":
        return !/^\d{10}$/.test(value)
          ? "Please enter a valid 10-digit phone number"
          : "";
      case "zipCode":
        return !/^\d{6}$/.test(value)
          ? "Please enter a valid 6-digit ZIP code"
          : "";
      default:
        return "";
    }
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));

      if (touched[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, value),
        }));
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    },
    [validateField]
  );

  const handleSelectChange = useCallback(
    (name, value) => {
      setForm((prev) => ({ ...prev, [name]: value }));
      if (touched[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, value),
        }));
      }
    },
    [touched, validateField]
  );

  const validateForm = useCallback(() => {
    const requiredFields = [
      "email",
      "phone",
      "firstName",
      "address",
      "city",
      "zipCode",
      "timeSlot",
      "paymentMethod",
    ];

    const newTouched = { ...touched };
    const newErrors = {};

    requiredFields.forEach((field) => {
      newTouched[field] = true;
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, [form, touched, validateField]);

  const handleOrder = useCallback(() => {
    if (!validateForm()) return;

    const orderNumber = Math.floor(Math.random() * 100000).toString();
    const orderData = {
      products: cart.products,
      orderNumber,
      customerInfo: {
        email: form.email,
        phone: form.phone,
        name: `${form.firstName} ${form.lastName}`.trim(),
        address: {
          street: form.address,
          city: form.city,
          state: form.state,
          zip: form.zipCode,
        },
      },
      timeSlot: form.timeSlot,
      paymentMethod: form.paymentMethod,
      totalPrice: cart.totalPrice,
    };

    localStorage.setItem("latestOrder", JSON.stringify(orderData));
    toast.success("Order Placed Successfully..");
    router.push("/order-page");
  }, [form, cart, validateForm, router]);

  if (!isMounted) {
    return (
      <div className="container max-w-7xl mx-auto px-4 py-6">Loading...</div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-lg font-bold mb-6">Quick Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Shipping Information */}
        <div className="flex-1 space-y-6">
          <Card className="rounded-none sm:rounded-md">
            <CardHeader>
              <h2 className="text-lg font-semibold">Your Personal Details</h2>
            </CardHeader>
            <CardContent className="space-y-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  required
                />

                <FormField
                  id="phone"
                  name="phone"
                  label="Phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.firstName}
                  required
                />

                <FormField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="grid grid-cols-1">
                <FormField
                  id="address"
                  name="address"
                  label="Street Address"
                  value={form.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.address}
                  required
                  textarea
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  id="city"
                  name="city"
                  label="City"
                  value={form.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.city}
                  required
                />

                <FormField
                  id="zipCode"
                  name="zipCode"
                  label="ZIP Code"
                  value={form.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.zipCode}
                  required
                />

                <FormField
                  id="state"
                  name="state"
                  label="State"
                  value="Maharashtra"
                  disabled
                />
              </div>

              <TimeSlotSelect
                value={form.timeSlot}
                onChange={(value) => handleSelectChange("timeSlot", value)}
                error={errors.timeSlot}
              />

              {/* <PaymentMethodRadio
                value={form.paymentMethod}
                onChange={(value) => handleSelectChange("paymentMethod", value)}
              /> */}
            </CardContent>
          </Card>
        </div>

        <OrderSummary cart={cart} onPlaceOrder={handleOrder} />
      </div>
    </div>
  );
};

export default CheckoutPage;

// In your CheckoutPage component, replace the address section with:
{
  /* <div className="space-y-2 w-full">
  <Label htmlFor="address">
    Street Address <span className="text-red-500">*</span>
  </Label>
  <textarea
    id="address"
    name="address"
    value={form.address}
    onChange={handleChange}
    onBlur={handleBlur}
    rows={3}
    className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
      errors.address ? "border-red-500" : ""
    }`}
    placeholder="Enter your full street address"
  />
  {errors.address && (
    <p className="text-sm text-red-500">{errors.address}</p>
  )}
</div> */
}
