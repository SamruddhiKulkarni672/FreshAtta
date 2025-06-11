"use client";

import React, { useEffect, useState } from "react";
import {
  useGetGrainsQuery,
  useGetGrainCombosQuery,
  useAddGrainComboMutation,
  useDeleteGrainComboMutation
} from "@/rtk/grainApi";
import ProductTable from "@/components/ProductTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const GrainComboPage = () => {
  const { data: grains = [] } = useGetGrainsQuery();
  const { data: combos = [] } = useGetGrainCombosQuery();
  const [addGrainCombo] = useAddGrainComboMutation();
  const [deleteGrainCombo] = useDeleteGrainComboMutation();

  const [showForm, setShowForm] = useState(false);
  const [localCombos, setLocalCombos] = useState([]);
  const [form, setForm] = useState({
    grainId: "",
    name: "",
    weight: "",
    actualPrice: "",
    sellingPrice: "",
    discountedPrice: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLocalCombos(combos);
  }, [combos]);

  const handleSubmit = async () => {
    setErrorMessage("");
    try {
      const newCombo = {
        ...form,
        grainId: parseInt(form.grainId),
        weight: parseFloat(form.weight),
        actualPrice: parseFloat(form.actualPrice),
        sellingPrice: parseFloat(form.sellingPrice),
        discountedPrice: parseFloat(form.discountedPrice),
      };
      const added = await addGrainCombo(newCombo).unwrap();
      setLocalCombos((prev) => [...prev, added]);
      setForm({ grainId: "", name: "", weight: "", actualPrice: "", sellingPrice: "", discountedPrice: "" });
      setShowForm(false);
    } catch (error) {
      setErrorMessage("Failed to add combo. Please check your input.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGrainCombo(id).unwrap();
     setLocalCombos((prev) => prev.filter((g) => g.id !== id));
    } catch {
      setErrorMessage("Failed to delete grain. Try again later.");
    }
  };

  const headers = ["Combo Name", "Grain ID", "Price"];

  return (
    <div className="p-6 space-y-6 mb-40">
      <div className="flex justify-end">
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Grain Combo"}
        </Button>
      </div>

      {errorMessage && (
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md">{errorMessage}</div>
      )}

      {showForm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border p-4 rounded-xl shadow-sm">
          <select
            className="border p-2 rounded"
            value={form.grainId}
            onChange={(e) => setForm({ ...form, grainId: e.target.value })}
          >
            <option value="">Select Grain</option>
            {grains.map((g) => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>
          <Input placeholder="Combo Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input placeholder="Weight (g)" type="number" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} />
          <Input placeholder="Actual Price" type="number" value={form.actualPrice} onChange={(e) => setForm({ ...form, actualPrice: e.target.value })} />
          <Input placeholder="Selling Price" type="number" value={form.sellingPrice} onChange={(e) => setForm({ ...form, sellingPrice: e.target.value })} />
          <Input placeholder="Discounted Price" type="number" value={form.discountedPrice} onChange={(e) => setForm({ ...form, discountedPrice: e.target.value })} />
          <Button onClick={handleSubmit} className="md:col-span-2 bg-[#ddd7c5]">Submit</Button>
        </div>
      ):( <ProductTable
        headers={headers}
        products={localCombos.map((c) => ({
          id: c.id,
          name: c.name,
          description: `Grain ID: ${c.grainId}`,
          price: `₹${c.discountedPrice}`,
        }))}
        onDelete={handleDelete}
        showNutrients={false}
      />)}

      {/* <ProductTable
        headers={headers}
        products={localCombos.map((c) => ({
          id: c.id,
          name: c.name,
          description: `Grain ID: ${c.grainId}`,
          price: `₹${c.discountedPrice}`,
        }))}
        onDelete={handleDelete}
        showNutrients={false}
      /> */}
    </div>
  );
};

export default GrainComboPage;