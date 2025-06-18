"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ProductTable from "@/components/ProductTable";
import {
  useGetGrainCombosQuery,
  useAddCustomVariantMutation,
  useUpdateCustomVariantMutation,
  useDeleteCustomVariantMutation,
  useGetOneProductVariantQuery
} from "@/rtk/grainApi";

const CustomVariant = ({ productVariantId, onBack }) => {
  const [form, setForm] = useState({ grainComboId: "" });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [customVariants, setCustomVariants] = useState([]);

  const { data: combos = [] } = useGetGrainCombosQuery();
  const { data: oneproductVariants } = useGetOneProductVariantQuery(productVariantId);
  const [addCustomVariant] = useAddCustomVariantMutation();
  const [updateCustomVariant] = useUpdateCustomVariantMutation();
  const [deleteCustomVariant] = useDeleteCustomVariantMutation();

  // Sync fetched data to local state
  useEffect(() => {
    if (oneproductVariants?.customVariantEntityList) {
      setCustomVariants(oneproductVariants.customVariantEntityList);
    }
  }, [oneproductVariants]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    const errors = {};
    if (!form.grainComboId || isNaN(parseInt(form.grainComboId))) {
      errors.grainComboId = "Please select a valid Grain Combo";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const payload = {
      grainComboId: parseInt(form.grainComboId),
      productVariantId,
    };

    try {
      if (editingId) {
        const updated = await updateCustomVariant({ id: editingId, ...payload }).unwrap();
        setCustomVariants((prev) =>
          prev.map((v) => (v.id === editingId ? updated : v))
        );
      } else {
        const added = await addCustomVariant(payload).unwrap();
        setCustomVariants((prev) => [...prev, added]);
      }
      resetForm();
    } catch (error) {
      console.error("Error submitting custom variant", error);
      setError("Submission failed. Please try again.");
    }
  };

  const handleEdit = (id) => {
    const target = customVariants.find((v) => v.id === id);
    if (!target) return;

    setShowForm(true);
    setForm({ grainComboId: target.grainComboId.toString() });
    setEditingId(id);
    setError("");
    setFieldErrors({});
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this custom variant?")) return;
    try {
      await deleteCustomVariant(id).unwrap();
      setCustomVariants((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
      setError("Delete failed. Please try again.");
    }
  };

  const resetForm = () => {
    setForm({ grainComboId: "" });
    setEditingId(null);
    setShowForm(false);
    setError("");
    setFieldErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {editingId ? "Edit" : "Add"} Custom Variant
        </h2>
        <Button variant="outline" onClick={onBack}>
          Back to Variants
        </Button>
      </div>

      <div className="flex justify-end py-5">
        <Button
          className="bg-[#dbd8d3]"
          onClick={() => {
            if (showForm) resetForm();
            else setShowForm(true);
          }}
        >
          {showForm ? "Cancel" : "Add Custom Variant"}
        </Button>
      </div>

      {showForm ? (
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          {error && (
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md">
              {error}
            </div>
          )}
          <div>
            <label className="block mb-1 text-sm">Grain Combo</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={form.grainComboId}
              onChange={(e) => {
                setForm({ grainComboId: e.target.value });
                setFieldErrors({ ...fieldErrors, grainComboId: "" });
              }}
            >
              <option value="">Select Combo</option>
              {combos.map((combo) => (
                <option key={combo.id} value={combo.id}>
                  {combo.name}
                </option>
              ))}
            </select>
            {fieldErrors.grainComboId && (
              <p className="text-red-600 text-sm mt-1">
                {fieldErrors.grainComboId}
              </p>
            )}
          </div>

          <Button type="submit" className="bg-[#dbd8d3]">
            {editingId ? "Update" : "Add"} Custom Variant
          </Button>
        </form>
      ) : (
        <ProductTable
          headers={["Grain Combo", "", ""]}
          products={customVariants.map((c) => ({
            id: c.id,
            name:
              combos.find((combo) => combo.id === c.grainComboId)?.name || "Unknown",
          }))}
          custom={false}
          showNutrients={false}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default CustomVariant;
