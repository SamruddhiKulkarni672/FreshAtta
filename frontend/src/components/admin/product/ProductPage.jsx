"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, PlusCircle } from "lucide-react";
import {
    useGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} from "@/rtk/grainApi";
import ProductVariantForm from "@/components/ProductVarientForm";

const ProductPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [variantFormOpenId, setVariantFormOpenId] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [validationErrors, setValidationErrors] = useState({});

    const [form, setForm] = useState({
        name: "",
        description: "",
        images: [],
    });

    const { data: products = [], refetch, error: fetchError } = useGetProductsQuery();
    const [addProduct] = useAddProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();

    const validateForm = () => {
        const errors = {};
        if (!form.name.trim()) errors.name = "Product name is required.";
        if (!form.description.trim()) errors.description = "Description is required.";
        if (form.images.length === 0 && !editingId) {
            errors.images = "At least one image is required.";
        }
        return errors;
    };

    const handleImageChange = (e) => {
        const newFiles = Array.from(e.target.files);
        const mergedFiles = [...form.images, ...newFiles].slice(0, 3);
        setForm({ ...form, images: mergedFiles });
    };

    const removeImage = (index) => {
        const updatedImages = [...form.images];
        updatedImages.splice(index, 1);
        setForm({ ...form, images: updatedImages });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        const errors = validateForm();
        setValidationErrors(errors);
        if (Object.keys(errors).length > 0) return;

        const productDTO = {
            name: form.name,
            description: form.description,
        };

        const formData = new FormData();
        formData.append("ProductDTO", JSON.stringify(productDTO));
        form.images.forEach((file) => {
            formData.append("images", file);
        });

        try {
            if (editingId) {
                productDTO.id = editingId;
                await updateProduct(formData).unwrap();
            } else {
                await addProduct(formData).unwrap();
            }

            setForm({ name: "", description: "", images: [] });
            setEditingId(null);
            setShowForm(false);
            setValidationErrors({});
            refetch();
        } catch (error) {
            console.error("Failed to submit product:", error);
            setErrorMessage("Failed to submit product. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) return;

        try {
            await deleteProduct(id).unwrap();
            refetch();
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

    // Fullscreen variant form overrides rest of the UI
    if (variantFormOpenId) {
        return (
            <ProductVariantForm
                productId={variantFormOpenId}
                onSuccess={() => {
                    setVariantFormOpenId(null);
                    refetch();
                }}
                onCancel={() => setVariantFormOpenId(null)}
            />
        );
    }

    return (
        <div className="p-6 space-y-8">
            {!showForm && (
                <>
                    <div className="flex justify-end">
                        <Button className="bg-[#dbd8d3]" onClick={() => setShowForm(true)}>
                            Add New Product
                        </Button>
                    </div>

                      {fetchError && (
                        <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md">
                            Failed to fetch products. Please check your connection or try again.
                        </div>
                    )}

                    <div className="mt-6">
                        <div className="overflow-x-auto rounded-lg shadow">
                            <table className="min-w-full text-sm text-left text-gray-700">
                                <thead className="bg-[#eeedeb] text-gray-800">
                                    <tr>
                                        <th className="px-4 py-2">Image</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Description</th>
                                        <th className="px-4 py-2">Actions</th>
                                        <th className="px-4 py-2">Add Variant</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.length > 0 ? (
                                        products.map((prod) => (
                                            <tr key={prod.id} className="border-b border-gray-200">
                                                <td className="px-4 py-2">
                                                    <img
                                                        src={prod.imageEntityStringList?.[0]}
                                                        alt={prod.name}
                                                        className="h-12 w-12 object-cover rounded"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">{prod.name}</td>
                                                <td className="px-4 py-2">{prod.description}</td>
                                                <td className="px-4 py-2">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setEditingId(prod.id);
                                                                setForm({
                                                                    name: prod.name,
                                                                    description: prod.description,
                                                                    images: [],
                                                                });
                                                                setShowForm(true);
                                                            }}
                                                        >
                                                            <Pencil size={16} />
                                                        </button>
                                                        <button onClick={() => handleDelete(prod.id)}>
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2">
                                                    <button
                                                        onClick={() => setVariantFormOpenId(prod.id)}
                                                        className="text-blue-600 flex items-center gap-1"
                                                    >
                                                        <PlusCircle size={16} />
                                                        Add Variant
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className="text-center text-gray-400 py-4">
                                                No products available.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {showForm && (
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-gray-200 rounded-xl"
                >
                    {errorMessage && (
                        <div className="md:col-span-2 text-red-700 bg-red-100 p-2 rounded">
                            {errorMessage}
                        </div>
                    )}
                   
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <Input
                            placeholder="e.g. Multigrain Atta"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        {validationErrors.name && (
                            <p className="text-xs text-red-600 mt-1">{validationErrors.name}</p>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <Textarea
                            placeholder="A healthy blend of wheat, oats, maize, and barley for better nutrition."
                            value={form.description}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                        />
                        {validationErrors.description && (
                            <p className="text-xs text-red-600 mt-1">{validationErrors.description}</p>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Upload Images (max 3)</label>
                        <Input type="file" accept="image/*" multiple onChange={handleImageChange} />
                        {validationErrors.images && (
                            <p className="text-xs text-red-600 mt-1">{validationErrors.images}</p>
                        )}
                        <div className="flex gap-2 mt-2">
                            {form.images.map((img, idx) => (
                                <div key={idx} className="relative">
                                    <img
                                        src={URL.createObjectURL(img)}
                                        alt={`preview-${idx}`}
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(idx)}
                                        className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 flex justify-between">
                        <Button type="submit" className="bg-[#dbd8d3]">
                            {editingId ? "Update Product" : "Submit Product"}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                setShowForm(false);
                                setEditingId(null);
                                setErrorMessage("");
                                setValidationErrors({});
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ProductPage;
