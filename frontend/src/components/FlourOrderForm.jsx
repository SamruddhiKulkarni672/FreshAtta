"use client";
import { useState } from "react";

export default function FlourOrderForm() {
    const [form, setForm] = useState({
        wheatType: "sharbati",
        wheatQty: "",
        moongQty: "",
        jawarQty: "",
        bajraQty: "",
    });

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    return (
        <div className="space-y-5 w-full  ">
            {["Wheat", "Moong", "Jawar", "Bajra"].map((grain) => (
                <div
                    key={grain}
                    className="flex flex-col sm:flex-row md:w-[500px] justify-between items-center border border-[#807C7C] px-4 py-3 rounded-full gap-3"
                >
                    <div className="text-lg  text-[#4E4B4B] font-semibold">{grain}</div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        {grain === "Wheat" && (
                            <select
                                className="bg-gradient-to-r from-[#A77B5A] to-[#D2874D]  text-[#ffffff] rounded-full px-2 py-1"
                                value={form.wheatType}
                                onChange={(e) => handleChange("wheatType", e.target.value)}
                            >
                                <option className="text-[#2e2d2d]" value="sharbati">sharbati</option>
                                <option className="text-[#2e2d2d]" value="lokwan">lokwan</option>
                            </select>
                        )}
                        <input
                            type="text"
                            placeholder="Qty"
                            className="  text-[#4E4B4B]   rounded-full px-3 py-1 w-full sm:w-28"
                             style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            value={form[`${grain.toLowerCase()}Qty`]}
                            onChange={(e) =>
                                handleChange(`${grain.toLowerCase()}Qty`, e.target.value)
                            }
                        />
                    </div>
                </div>
            ))}
            <button className="bg-[#D2874D] text-white md:w-[500px] w-full py-3 rounded-full font-semibold hover:bg-[#8e6547] transition">
                Place Order
            </button>
        </div>
    );
}
