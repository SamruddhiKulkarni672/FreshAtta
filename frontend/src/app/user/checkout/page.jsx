import CheckoutPage from "@/components/checkout/CheckoutPage";
const CheckOutPage = () => {
  return (
    <div className="lg:mb-[70px] md:mb-[40px] mb-[10px]">
      <CheckoutPage />
    </div>
  );
};
export default CheckOutPage;

// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// const timeSlots = [
//   "9:00 AM - 11:00 AM",
//   "11:00 AM - 1:00 PM",
//   "2:00 PM - 4:00 PM",
//   "6:00 PM - 8:00 PM",
// ];

// const CheckoutPage = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const router = useRouter();
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const [form, setForm] = useState({
//     email: "",
//     phone: "",
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     state: "Maharashtra",
//     timeSlot: timeSlots[0],
//     paymentMethod: "cash",
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const validateField = useCallback((name, value) => {
//     if (!value && name !== "lastName") {
//       return "This field is required";
//     }

//     switch (name) {
//       case "email":
//         return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
//           ? "Please enter a valid email"
//           : "";
//       case "phone":
//         return !/^\d{10}$/.test(value)
//           ? "Please enter a valid 10-digit phone number"
//           : "";
//       case "zipCode":
//         return !/^\d{6}$/.test(value)
//           ? "Please enter a valid 6-digit ZIP code"
//           : "";
//       default:
//         return "";
//     }
//   }, []);

//   const handleChange = useCallback(
//     (e) => {
//       const { name, value } = e.target;
//       setForm((prev) => ({ ...prev, [name]: value }));

//       if (touched[name]) {
//         setErrors((prev) => ({
//           ...prev,
//           [name]: validateField(name, value),
//         }));
//       }
//     },
//     [touched, validateField]
//   );

//   const handleBlur = useCallback(
//     (e) => {
//       const { name, value } = e.target;
//       setTouched((prev) => ({ ...prev, [name]: true }));
//       setErrors((prev) => ({
//         ...prev,
//         [name]: validateField(name, value),
//       }));
//     },
//     [validateField]
//   );

//   const handleSelectChange = useCallback(
//     (name, value) => {
//       setForm((prev) => ({ ...prev, [name]: value }));
//       if (touched[name]) {
//         setErrors((prev) => ({
//           ...prev,
//           [name]: validateField(name, value),
//         }));
//       }
//     },
//     [touched, validateField]
//   );

//   const validateForm = useCallback(() => {
//     const requiredFields = [
//       "email",
//       "phone",
//       "firstName",
//       "address",
//       "city",
//       "zipCode",
//       "timeSlot",
//       "paymentMethod",
//     ];

//     const newTouched = { ...touched };
//     const newErrors = {};

//     requiredFields.forEach((field) => {
//       newTouched[field] = true;
//       const error = validateField(field, form[field]);
//       if (error) newErrors[field] = error;
//     });

//     setTouched(newTouched);
//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   }, [form, touched, validateField]);

//   const handleOrder = useCallback(() => {
//     if (!validateForm()) return;

//     const orderNumber = Math.floor(Math.random() * 100000).toString();
//     const orderData = {
//       products: cart.products,
//       orderNumber,
//       customerInfo: {
//         email: form.email,
//         phone: form.phone,
//         name: `${form.firstName} ${form.lastName}`.trim(),
//         address: {
//           street: form.address,
//           city: form.city,
//           state: form.state,
//           zip: form.zipCode,
//         },
//       },
//       timeSlot: form.timeSlot,
//       paymentMethod: form.paymentMethod,
//       totalPrice: cart.totalPrice,
//     };

//     localStorage.setItem("latestOrder", JSON.stringify(orderData));
//     router.push("/order-page");
//   }, [form, cart, validateForm, router]);

//   if (!isMounted) {
//     return (
//       <div className="container max-w-7xl mx-auto px-4 py-6">Loading...</div>
//     );
//   }

//   return (
//     <div className="container max-w-7xl mx-auto px-4 py-6">
//       <h1 className="text-lg font-bold mb-6">Checkout</h1>

//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Shipping Information */}
//         <div className="flex-1 space-y-6">
//           <Card className="rounded-none sm:rounded-md">
//             <CardHeader>
//               <CardTitle>Shipping Information</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6 bg-white">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email *</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={errors.email ? "border-red-500" : ""}
//                   />
//                   {errors.email && (
//                     <p className="text-sm text-red-500">{errors.email}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Phone *</Label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={form.phone}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={errors.phone ? "border-red-500" : ""}
//                   />
//                   {errors.phone && (
//                     <p className="text-sm text-red-500">{errors.phone}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="firstName">First Name *</Label>
//                   <Input
//                     id="firstName"
//                     name="firstName"
//                     value={form.firstName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={errors.firstName ? "border-red-500" : ""}
//                   />
//                   {errors.firstName && (
//                     <p className="text-sm text-red-500">{errors.firstName}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="lastName">Last Name</Label>
//                   <Input
//                     id="lastName"
//                     name="lastName"
//                     value={form.lastName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="address">Street Address *</Label>
//                 <textarea
//                   id="address"
//                   name="address"
//                   value={form.address}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full rounded-md border p-2 ${
//                     errors.address ? "border-red-500" : "border-gray-300"
//                   } focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent`}
//                   rows={2}
//                 />
//                 {errors.address && (
//                   <p className="text-sm text-red-500">{errors.address}</p>
//                 )}
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="city">City *</Label>
//                   <Input
//                     id="city"
//                     name="city"
//                     value={form.city}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={errors.city ? "border-red-500" : ""}
//                   />
//                   {errors.city && (
//                     <p className="text-sm text-red-500">{errors.city}</p>
//                   )}
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="zipCode">ZIP Code *</Label>
//                   <Input
//                     id="zipCode"
//                     name="zipCode"
//                     value={form.zipCode}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={errors.zipCode ? "border-red-500" : ""}
//                   />
//                   {errors.zipCode && (
//                     <p className="text-sm text-red-500">{errors.zipCode}</p>
//                   )}
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="state">State *</Label>
//                   <Input
//                     id="state"
//                     name="state"
//                     value="Maharashtra"
//                     className="bg-gray-100 cursor-not-allowed"
//                     disabled
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="timeSlot">Delivery Time Slot *</Label>
//                 <Select
//                   value={form.timeSlot}
//                   onValueChange={(value) =>
//                     handleSelectChange("timeSlot", value)
//                   }
//                 >
//                   <SelectTrigger
//                     className={errors.timeSlot ? "border-red-500" : ""}
//                   >
//                     <SelectValue placeholder="Select time slot" />
//                   </SelectTrigger>
//                   <SelectContent  className="min-w-[var(--radix-select-trigger-width)] bg-white rounded-md shadow-lg border border-gray-200">
//                     {timeSlots.map((slot) => (
//                       <SelectItem
//                         className="flex justify-end px-4 py-2 hover:bg-gray-50 text-gray-700 data-[state=checked]:hidden"
//                         key={slot}
//                         value={slot}
//                       >
//                         {slot}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 {errors.timeSlot && (
//                   <p className="text-sm text-red-500">{errors.timeSlot}</p>
//                 )}
//               </div>

//               <div className="space-y-2 border-0">
//                 <Card className="rounded-none">
//                   <CardHeader>
//                     <CardTitle>Payment Method</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <RadioGroup
//                       value={form.paymentMethod}
//                       onValueChange={(value) =>
//                         handleSelectChange("paymentMethod", value)
//                       }
//                       className="space-y-4"
//                     >
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="cash" id="cash" />
//                         <Label htmlFor="cash">Cash on Delivery</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="online" id="online" />
//                         <Label htmlFor="online">Online Payment</Label>
//                       </div>
//                     </RadioGroup>
//                   </CardContent>
//                 </Card>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Order Summary */}
//         <div className="w-full lg:w-96">
//           <Card className="rounded-none sm:rounded-md">
//             <CardHeader>
//               <CardTitle>Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="space-y-4 max-h-64 overflow-y-auto">
//                 {cart.products.length === 0 ? (
//                   <p className="text-sm text-muted-foreground">
//                     Your cart is empty
//                   </p>
//                 ) : (
//                   cart.products.map((product) => (
//                     <div
//                       key={`${product.id}-${product.name}`}
//                       className="flex items-center gap-4 border-b pb-4"
//                     >
//                       <div className="relative w-16 h-16 rounded-md overflow-hidden border">
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           fill
//                           className="object-cover"
//                           sizes="64px"
//                           priority
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <p className="font-medium">{product.name}</p>
//                         <p className="text-sm text-muted-foreground">
//                           ₹{product.price} × {product.quantity}
//                         </p>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>

//               <div className="flex justify-between pt-4 border-t">
//                 <span className="font-semibold">Total:</span>
//                 <span className="text-lg font-bold">
//                   ₹{cart.totalPrice?.toFixed(2) || "0.00"}
//                 </span>
//               </div>

//               <Button
//                 onClick={handleOrder}
//                 disabled={cart.products.length === 0}
//                 className="w-full bg-cartBackgroundColor text-white hover:bg-cartBackgroundColor/90"
//                 size="lg"
//               >
//                 Place Order
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
