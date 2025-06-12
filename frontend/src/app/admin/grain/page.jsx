"use client";

import React, { useEffect, useState } from "react";
import {
  useGetGrainsQuery,
  useAddGrainMutation,
  useDeleteGrainMutation,
} from "@/rtk/grainApi";
import ProductTable from "@/components/ProductTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const NUTRIENT_KEYS = [
  "protein",
  "carbohydrates",
  "sugars",
  "dietaryFiber",
  "saturatedFat",
  "transFat",
];

const GrainsPage = () => {
  const {
    data: grainsData = [],
    isLoading,
    error: fetchError,
  } = useGetGrainsQuery();

  const [addGrain] = useAddGrainMutation();
  const [deleteGrain] = useDeleteGrainMutation();

  const [grains, setGrains] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    grainName: "",
    grainDesc: "",
    actualPrice: "",
    image: "",
    available: true,
    nutrientContent: Object.fromEntries(NUTRIENT_KEYS.map((key) => [key, ""])),
  });

   useEffect(() => {
    setGrains(grainsData);
  }, [grainsData]);

  const handleSubmit = async () => {
    setErrorMessage("");
    try {
      const newGrain = await addGrain({
        ...form,
        actualPrice: parseFloat(form.actualPrice),
        nutrientContent: Object.fromEntries(
          Object.entries(form.nutrientContent).map(([key, val]) => [
            key,
            parseFloat(val),
          ])
        ),
      }).unwrap();

      setGrains((prev) => [...prev, newGrain]);  
      setForm({
        grainName: "",
        grainDesc: "",
        actualPrice: "",
        image: "",
        available: true,
        nutrientContent: Object.fromEntries(NUTRIENT_KEYS.map((key) => [key, ""])),
      });
      setShowForm(false);
    } catch (error) {
      console.error("Add Grain Error:", error);
      setErrorMessage("Failed to add grain. Please check your input or try again.");
    }
  };

  const handleDelete = async (id) => {
    setErrorMessage("");
    try {
      await deleteGrain(id).unwrap();
      setGrains((prev) => prev.filter((grain) => grain.id !== id));  
    } catch (error) {
      console.error("Delete Grain Error:", error);
      setErrorMessage("Failed to delete grain. Try again later.");
    }
  };

  const headers = [
     
    "Grain Name",
    "Description",
    "Price",
    "Protein (g)",
    "Carbs (g)",
    "Fiber (g)",
     
  ];

  return (
    <div className="p-6 space-y-6 mb-40">
      <div className="flex justify-end">
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Grain Product"}
        </Button>
      </div>

      {errorMessage && (
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md">
          {errorMessage}
        </div>
      )}
      {fetchError && (
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md">
          Failed to fetch grains. Please check your connection or try again.
        </div>
      )}

      {showForm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border mb-20 border-[#d8d8da] p-4 rounded-xl shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Grain Name
            </label>
            <Input
              placeholder="Grain Name"
              value={form.grainName}
              onChange={(e) =>
                setForm({ ...form, grainName: e.target.value })
              }
              className="border border-[#d8d8da]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <Input
              placeholder="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="border border-[#d8d8da]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Textarea
              placeholder="Description"
              value={form.grainDesc}
              onChange={(e) =>
                setForm({ ...form, grainDesc: e.target.value })
              }
              className="border border-[#d8d8da]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <Input
              type="number"
              placeholder="Price"
              value={form.actualPrice}
              onChange={(e) =>
                setForm({ ...form, actualPrice: e.target.value })
              }
              className="border border-[#d8d8da]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nutrient Content (per 100g)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {NUTRIENT_KEYS.map((key) => (
                <div key={key}>
                  <label className="block text-xs font-medium text-gray-600 mb-1 capitalize">
                    {key}
                  </label>
                  <Input
                    type="number"
                    placeholder={key}
                    value={form.nutrientContent[key]}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        nutrientContent: {
                          ...form.nutrientContent,
                          [key]: e.target.value,
                        },
                      })
                    }
                    className="border border-[#d8d8da]"
                  />
                </div>
              ))}
            </div>
          </div>

          <Button onClick={handleSubmit} className="md:col-span-2 bg-[#ddd7c5]">
            Submit
          </Button>
        </div>
      ) : (
        <ProductTable
          headers={headers}
          products={grains.map((g) => ({
            id: g.id,
            name: g.grainName,
            description: g.grainDesc,
            price: g.actualPrice,
            stock: g.available ? "In Stock" : "Out of Stock",
            image: g.image,
            nutrientContent: g.nutrientContent,
          }))}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default GrainsPage;
