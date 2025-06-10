"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const cart = useSelector((state) => state.cart);

    const [form, setForm] = useState({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
        country: "US",
        instructions: "",
        sameAsShipping: true,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        const required = [
            "email",
            "firstName",
            "lastName",
            "address",
            "city",
            "state",
            "zipCode",
            "country",
        ];
        required.forEach((field) => {
            if (!form[field]) {
                newErrors[field] = "This field is required.";
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleOrder = () => {
        if (!validateForm()) return;

        const newOrder = {
            products: cart.products,
            orderNumber: Math.floor(Math.random() * 100000).toString(),
            shippingInformation: {
                address: form.address,
                city: form.city,
                zip: form.zipCode,
            },
            instructions: form.instructions,
            totalPrice: cart.totalPrice,
        };

        localStorage.setItem("latestOrder", JSON.stringify(newOrder));
        router.push("/order-page");
    };

    return (
    <div className="max-w-[88%] mx-auto  py-6  ">
            <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-6">
                {/* FORM */}
                <form className="w-full lg:w-3/5 space-y-8 p-4 md:p-6 lg:p-6">
                    <div>
                        <label>Email *</label>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <label>Phone</label>
                        <input
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>First Name *</label>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">{errors.firstName}</p>
                            )}
                        </div>

                        <div>
                            <label>Last Name *</label>
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm">{errors.lastName}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label>Street Address *</label>
                        <input
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label>City *</label>
                            <input
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                            />
                            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                        </div>

                        <div>
                            <label>State *</label>
                            <input
                                name="state"
                                value={form.state}
                                onChange={handleChange}
                                className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                            />
                            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                        </div>

                        <div>
                            <label>ZIP Code *</label>
                            <input
                                name="zipCode"
                                value={form.zipCode}
                                onChange={handleChange}
                                className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                            />
                            {errors.zipCode && (
                                <p className="text-red-500 text-sm">{errors.zipCode}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label>Country *</label>
                        <select
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                        >
                            <option value="US">United States</option>
                            <option value="IN">India</option>
                            <option value="CA">Canada</option>
                        </select>
                    </div>

                    <div>
                        <label>Special Instructions</label>
                        <textarea
                            name="instructions"
                            rows={3}
                            value={form.instructions}
                            onChange={handleChange}
                            className="w-full border-2 border-[#d4d5d7] p-2 rounded-md"
                        />
                    </div>
                </form>

                {/* SUMMARY */}
                <div className=" flex flex-col w-full lg:w-[35%] border p-6 bg-[#ebeaea] h-auto mt-6    rounded-2xl    space-y-6">
                    <h3 className="text-xl font-bold">Order Summary</h3>
                    <div className="space-y-4 max-h-64 overflow-y-auto">
                        {cart.products.length === 0 ? (
                            <p className="text-sm text-gray-500">Cart is empty.</p>
                        ) : (
                            cart.products.map((product, i) => (
                                <div key={i} className="flex items-center gap-4 border-b pb-2">
                                    <div className="w-16 h-16 border rounded overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{product.name}</p>
                                        <p className="text-sm text-gray-500">
                                            ₹{product.price} × {product.quantity}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="flex justify-between pt-4 border-t">
                        <span className="font-semibold">Total:</span>
                        <span className="text-lg font-bold text-[#111111]">
                            ₹{cart.totalPrice?.toFixed(2) || "0.00"}
                        </span>
                    </div>

                    <button
                        onClick={handleOrder}
                        disabled={cart.products.length === 0}
            className="w-full bg-[#D2874D] text-white py-2 rounded-lg hover:bg-[#a76f45] transition"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
