"use client";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
    const suggestions = [
        { label: "wheat-10kg" },
        { label: "Moong-1kg" },
        { label: "jawar-2kg" },
        { label: "bajra-500gm" },
    ];

    const [form, setForm] = useState({
        wheatType: "sharbati",
        wheatQty: "",
        moongQty: "",
        jawarQty: "",
        bajraQty: "",
    });

    const [selectedGrains, setSelectedGrains] = useState({
        wheat: true,
        moong: false,
        jawar: false,
        bajra: false,
    });

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    const toggleGrain = (grain) => {
        setSelectedGrains((prev) => ({
            ...prev,
            [grain]: !prev[grain],
        }));
    };

    return (
        <main className="min-h-screen w-full bg-[#E5E2E2] text-white flex flex-col items-center px-4 py-10">
            {/* Centered Image + Form Section */}
            <div className="flex justify-center w-full">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
                    {/* Image */}
                    <div className="flex w-[300px] sm:w-[350px] lg:w-[400px] h-[400px] sm:h-[450px] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/wheatimg.png"
                            alt="Golden Wheat Flour"
                            width={350}
                            height={500}
                            className="rounded-2xl w-full object-cover"
                        />
                    </div>

                    {/* Title and Form */}
                    <div className="flex flex-col items-start space-y-6 w-full max-w-xl">
                        <h1 className="text-3xl lg:text-4xl font-bold text-[#3f2b2b]">
                            Multigrain flour
                        </h1>

                        {/* Flour order input with checkboxes */}
                        <div className="space-y-5 w-full">
                            {["Wheat", "Moong", "Jawar", "Bajra"].map((grain) => {
                                const key = grain.toLowerCase();
                                const isSelected = selectedGrains[key];

                                return (
                                    <div
                                        key={grain}
                                        className={`flex flex-col sm:flex-row md:w-[500px] justify-between items-center border ${
                                            isSelected
                                                ? "border-[#807C7C]"
                                                : "border-gray-300 opacity-50"
                                        } px-4 py-3 rounded-full gap-3`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => toggleGrain(key)}
                                                className="w-6 h-6 accent-[#896040]"
                                            />

                                            <div className="text-lg text-[#4E4B4B] font-semibold">
                                                {grain}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 w-full sm:w-auto">
                                            {grain === "Wheat" && (
                                                <select
                                                    disabled={!isSelected}
                                                    className="bg-gradient-to-r from-[#A77B5A] to-[#D2874D] text-white rounded-full px-2 py-1 disabled:opacity-50"
                                                    value={form.wheatType}
                                                    onChange={(e) =>
                                                        handleChange("wheatType", e.target.value)
                                                    }
                                                >
                                                    <option
                                                        className="text-[#2e2d2d]"
                                                        value="sharbati"
                                                    >
                                                        sharbati
                                                    </option>
                                                    <option
                                                        className="text-[#2e2d2d]"
                                                        value="lokwan"
                                                    >
                                                        lokwan
                                                    </option>
                                                </select>
                                            )}
                                            <input
                                                type="text"
                                                placeholder="Qty"
                                                className="text-[#4E4B4B] rounded-full px-3 py-1 w-full sm:w-28 disabled:opacity-50"
                                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                                                value={form[`${key}Qty`]}
                                                onChange={(e) =>
                                                    handleChange(`${key}Qty`, e.target.value)
                                                }
                                                disabled={!isSelected}
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                            <button className="bg-[#D2874D] text-white md:w-[500px] w-full py-3 rounded-full font-semibold hover:bg-[#8e6547] transition">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Suggestion Section */}
            <div className="mt-12 bg-gradient-to-r from-[#CDB67A] to-[#D2874D] p-6 rounded-2xl text-white max-w-6xl w-full shadow-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    Our suggestion <span>✨</span>
                </h2>
                <div className="flex flex-wrap gap-4">
                    {suggestions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#c07e49] border-2 border-[#DECFAA] px-4 py-2 rounded-full shadow text-sm"
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default page;
