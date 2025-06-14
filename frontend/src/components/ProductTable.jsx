"use client";

import React from "react";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

const ProductTable = ({
    headers = [],
    products = [],
    onEdit,
    onDelete,
    onCustomVar,
    showNutrients = true,
    custom = false,
}) => {
    return (
        <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-[#eeedeb] text-gray-800">
                    <tr>
                        {headers.map((header, idx) => (
                            <th key={idx} className="px-4 py-3 font-semibold">
                                {header}
                            </th>
                        ))}
                        <th className="px-4 py-3 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                            {product.image && (
                                <td className="px-4 py-3">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-12 w-12 object-cover rounded"
                                    />
                                </td>
                            )}
                            <td className="px-4 py-3">{product.name}</td>
                            <td className="px-4 py-3">{product.description}</td>
                            <td className="px-4 py-3">{product.price}</td>
                            {showNutrients && (
                                <>
                                    <td className="px-4 py-3">
                                        {product.nutrientContent?.protein ?? "-"}
                                    </td>
                                    <td className="px-4 py-3">
                                        {product.nutrientContent?.carbohydrates ?? "-"}
                                    </td>
                                    <td className="px-4 py-3">
                                        {product.nutrientContent?.dietaryFiber ?? "-"}
                                    </td>
                                </>
                            )}
                            {custom && (
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() =>
                                            product.customMix && onCustomVar?.(product.id)
                                        }
                                        className={`flex items-center gap-1 ${
                                            product.customMix
                                                ? "text-blue-600"
                                                : "text-gray-400 cursor-not-allowed"
                                        }`}
                                        disabled={!product.customMix}
                                    >
                                        <PlusCircle size={16} />
                                        Custom Variant
                                    </button>
                                </td>
                            )}

                            <td className="px-4 py-3 space-x-2">
                                <div className="flex gap-2">
                                    <button onClick={() => onEdit?.(product.id)}>
                                        <Pencil size={16} />
                                    </button>
                                    <button onClick={() => onDelete?.(product.id)}>
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
