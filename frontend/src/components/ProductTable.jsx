// components/ProductTable.jsx
"use client";

import React from "react";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const ProductTable = ({ headers = [], products = [], onEdit, onDelete, showNutrients = true }) => {
    return (
        <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-[#ddd7c5] text-gray-800">
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
                            {/* <td className="px-4 py-3 space-x-2">
                                {onEdit && (
                                    <Button variant="outline" onClick={() => onEdit(product.id)}>
                                        Edit
                                    </Button>
                                )}
                                <Button variant="destructive" onClick={() => onDelete(product.id)}>
                                    Delete
                                </Button>
                            </td> */}
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
