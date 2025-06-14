"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ProductTable from "@/components/ProductTable";
import CustomVariant from "@/components/CustomVarient";
import { skipToken } from "@reduxjs/toolkit/query/react";

import {
  useAddProductVariantMutation,
  useUpdateProductVariantMutation,
  useDeleteProductVariantMutation,
  useGetGrainCombosQuery,
  useGetProductVariantsQuery,
} from "@/rtk/grainApi";

const ProductVariantForm = ({ productId, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    weight: "",
    grainComboId: "",
    customMix: false,
  });

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [variant, setVariant] = useState([]);
  const [error, setError] = useState("");
  const [customVariantProductId, setCustomVariantProductId] = useState(null);

  const [addVariant] = useAddProductVariantMutation();
  const [updateVariant] = useUpdateProductVariantMutation();
  const [deleteVariant] = useDeleteProductVariantMutation();

  const { data: combos = [], isLoading: loadingCombos } = useGetGrainCombosQuery();
  const { data: productVariant = [], error: variantFetchError } = useGetProductVariantsQuery(
    productId ?? skipToken
  );

  useEffect(() => {
    if (!productVariant) return;

    const isSame =
      variant.length === productVariant.length &&
      variant.every((v, i) => {
        const p = productVariant[i];
        return (
          v.id === p?.id &&
          v.name === p?.name &&
          v.description === p?.description &&
          v.weight === p?.weight &&
          v.grainComboId === p?.grainComboId &&
          v.customMix === p?.customMix
        );
      });

    if (!isSame) {
      setVariant(productVariant);
    }
  }, [productVariant]);

  const headers = ["Variant Name", "Description", "Status", "Add Custom"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      name: form.name,
      description: form.description,
      weight: parseFloat(form.weight),
      grainComboId: parseInt(form.grainComboId),
      customMix: Boolean(form.customMix),
      productId,
    };

    try {
      if (editingId) {
        const updated = await updateVariant({ id: editingId, ...payload }).unwrap();
        setVariant((prev) => prev.map((v) => (v.id === editingId ? updated : v)));
      } else {
        const newVariant = await addVariant(payload).unwrap();
        setVariant((prev) => [...prev, newVariant]);
      }

      resetForm();
    } catch (err) {
      console.error(err);
      setError("Failed to submit variant. Try again.");
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      weight: "",
      grainComboId: "",
      customMix: false,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const selected = variant.find((v) => v.id === id);
    if (!selected) return;

    setForm({
      name: selected.name ?? "",
      description: selected.description ?? "",
      weight: selected.weight?.toString() ?? "",
      grainComboId: selected.grainComboId?.toString() ?? "",
      customMix: Boolean(selected.customMix),
    });
    setEditingId(id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product variant?");
    if (!confirmed) return;

    try {
      await deleteVariant(id).unwrap();
      setVariant((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete variant.");
    }
  };

  const toggleForm = () => {
    if (editingId || showForm) {
      resetForm();
    } else {
      setShowForm(true);
    }
  };

  const showCustomVariantComponent = (id) => {
    setCustomVariantProductId(id);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl bg-white border border-gray-200  rounded-lg p-6 my-6">
        {customVariantProductId ? (
          <CustomVariant
            productVariantId={customVariantProductId}
            onBack={() => setCustomVariantProductId(null)}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editingId ? "Edit Product Variant" : "Add Product Variant"}
              </h2>
              <Button variant="outline" onClick={onCancel}>
                Go back to product
              </Button>
            </div>

            <div className="flex justify-end p-2 py-4">
              <Button className="bg-[#dbd8d3]" onClick={toggleForm}>
                {showForm ? (editingId ? "Cancel Edit" : "Cancel") : "Add Product Variant"}
              </Button>
            </div>

            {showForm ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-red-600">{error}</p>}

                <div>
                  <label className="block mb-1 text-sm">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Variant Name"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">Description</label>
                  <Textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Variant Description"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">Weight (in kg)</label>
                  <Input
                    type="number"
                    value={form.weight}
                    onChange={(e) => setForm({ ...form, weight: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">Grain Combo</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    value={form.grainComboId}
                    onChange={(e) => setForm({ ...form, grainComboId: e.target.value })}
                  >
                    <option value="">Select a Grain Combo</option>
                    {loadingCombos ? (
                      <option disabled>Loading combos...</option>
                    ) : (
                      combos.map((combo) => (
                        <option key={combo.id} value={combo.id}>
                          {combo.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={form.customMix}
                    onCheckedChange={(val) => setForm({ ...form, customMix: Boolean(val) })}
                  />
                  <label className="text-sm">Custom Mix</label>
                </div>

                <Button type="submit" className="bg-[#8dccc7]">
                  {editingId ? "Update Variant" : "Add Variant"}
                </Button>
              </form>
            ) : (
              <div>
                <ProductTable
                  headers={headers}
                  products={variant.map((v) => ({
                    id: v.id,
                    name: v.name,
                    description: v.description,
                    price: v.customMix ? "Custom" : "Not Custom",
                    customMix: v.customMix,
                  }))}
                  showNutrients={false}
                  custom={true}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onCustomVar={showCustomVariantComponent}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductVariantForm;
