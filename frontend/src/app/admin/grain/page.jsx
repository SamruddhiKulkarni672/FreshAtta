 import GrainsPage from"@/components/admin/grain/GrainsPage";

export default function ContactUs() {
  return <GrainsPage />;
}



// "use client";

// import React, { useEffect, useState } from "react";
// import {
//     useGetGrainsQuery,
//     useAddGrainMutation,
//     useDeleteGrainMutation,
//     useUpdateGrainMutation,
// } from "@/rtk/grainApi";
// import ProductTable from "@/components/ProductTable";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// const NUTRIENT_KEYS = [
//     "protein",
//     "carbohydrates",
//     "sugars",
//     "dietaryFiber",
//     "saturatedFat",
//     "transFat",
// ];

// const GrainsPage = () => {
//     const { data: grainsData = [], isLoading, error: fetchError } = useGetGrainsQuery();
//     const [addGrain] = useAddGrainMutation();
//     const [updateGrain] = useUpdateGrainMutation();
//     const [deleteGrain] = useDeleteGrainMutation();

//     const [grains, setGrains] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     const [editingId, setEditingId] = useState(null);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [fieldErrors, setFieldErrors] = useState({});

//     const [form, setForm] = useState({
//         grainName: "",
//         grainDesc: "",
//         actualPrice: "",
//         available: true,
//         nutrientContent: Object.fromEntries(NUTRIENT_KEYS.map((key) => [key, ""])),
//     });

//     useEffect(() => {
//         const areEqual =
//             grains.length === grainsData.length &&
//             grains.every((g, i) => g.id === grainsData[i]?.id);
//         if (!areEqual) {
//             setGrains(grainsData);
//         }
//     }, [grainsData]);

//     const resetForm = () => {
//         setForm({
//             grainName: "",
//             grainDesc: "",
//             actualPrice: "",
//             available: true,
//             nutrientContent: Object.fromEntries(NUTRIENT_KEYS.map((key) => [key, ""])),
//         });
//         setEditingId(null);
//         setShowForm(false);
//         setErrorMessage("");
//         setFieldErrors({});
//     };

//     const validateForm = () => {
//         const errors = {};

//         if (!form.grainName.trim()) {
//             errors.grainName = "Grain name is required.";
//         }

//         if (!form.actualPrice || isNaN(parseFloat(form.actualPrice))) {
//             errors.actualPrice = "Valid price is required.";
//         }

//         for (const [key, value] of Object.entries(form.nutrientContent)) {
//             if (value && isNaN(parseFloat(value))) {
//                 errors[key] = `${key} must be a number.`;
//             }
//         }

//         return errors;
//     };

//     const handleSubmit = async () => {
//         setErrorMessage("");
//         const errors = validateForm();

//         if (Object.keys(errors).length > 0) {
//             setFieldErrors(errors);
//             setErrorMessage("Please fix the errors below.");
//             return;
//         }

//         setFieldErrors({});

//         const payload = {
//             ...form,
//             id: editingId,
//             actualPrice: parseFloat(form.actualPrice),
//             nutrientContent: Object.fromEntries(
//                 Object.entries(form.nutrientContent).map(([key, val]) => [
//                     key,
//                     parseFloat(val) || 0,
//                 ])
//             ),
//         };

//         try {
//             if (editingId) {
//                 const updated = await updateGrain({ id: editingId, ...payload }).unwrap();
//                 setGrains((prev) => prev.map((g) => (g.id === editingId ? updated : g)));
//             } else {
//                 const newGrain = await addGrain(payload).unwrap();
//                 setGrains((prev) => [...prev, newGrain]);
//             }
//             resetForm();
//         } catch (error) {
//             console.error("Submit Error:", error);
//             setErrorMessage("Failed to submit grain. Please try again.");
//         }
//     };

//     const handleDelete = async (id) => {
//         const confirmed = window.confirm("Are you sure you want to delete this grain?");
//         if (!confirmed) return;

//         setErrorMessage("");
//         try {
//             await deleteGrain(id).unwrap();
//             setGrains((prev) => prev.filter((grain) => grain.id !== id));
//         } catch (error) {
//             console.error("Delete Grain Error:", error);
//             setErrorMessage("Failed to delete grain. Try again later.");
//         }
//     };

//     const handleEdit = (id) => {
//         const grain = grains.find((g) => g.id === id);
//         if (!grain) return;

//         setForm({
//             grainName: grain.grainName,
//             grainDesc: grain.grainDesc,
//             actualPrice: grain.actualPrice,
//             available: grain.available,
//             nutrientContent: Object.fromEntries(
//                 NUTRIENT_KEYS.map((key) => [key, grain.nutrientContent?.[key] ?? ""])
//             ),
//         });

//         setEditingId(id);
//         setShowForm(true);
//         setErrorMessage("");
//         setFieldErrors({});
//     };

//     const headers = ["Grain Name", "Description", "Price", "Protein (g)", "Carbs (g)", "Fiber (g)"];

//     return (
//         <div className="p-6 space-y-6 mb-40">
//             <div className="flex justify-end">
//                 <Button
//                     className="bg-[#dbd8d3]"
//                     onClick={() => {
//                         if (editingId) resetForm();
//                         else setShowForm(!showForm);
//                     }}
//                 >
//                     {showForm ? "Cancel" : "Add new Grain"}
//                 </Button>
//             </div>

//             {errorMessage && (
//                 <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md">{errorMessage}</div>
//             )}
//             {fetchError && (
//                 <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md">
//                     Failed to fetch grains. Please check your connection or try again.
//                 </div>
//             )}

//             {showForm ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border mb-20 border-[#d8d8da] p-4 rounded-xl shadow-sm">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Grain Name *
//                         </label>
//                         <Input
//                             placeholder="Grain Name"
//                             value={form.grainName}
//                             onChange={(e) => setForm({ ...form, grainName: e.target.value })}
//                         />
//                         {fieldErrors.grainName && (
//                             <p className="text-red-600 text-sm mt-1">{fieldErrors.grainName}</p>
//                         )}
//                     </div>

//                     <div className="md:col-span-2">
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Description
//                         </label>
//                         <Textarea
//                             placeholder="Description"
//                             value={form.grainDesc}
//                             onChange={(e) => setForm({ ...form, grainDesc: e.target.value })}
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Price *
//                         </label>
//                         <Input
//                             type="number"
//                             placeholder="Price"
//                             value={form.actualPrice}
//                             onChange={(e) => setForm({ ...form, actualPrice: e.target.value })}
//                         />
//                         {fieldErrors.actualPrice && (
//                             <p className="text-red-600 text-sm mt-1">{fieldErrors.actualPrice}</p>
//                         )}
//                     </div>

//                     <div className="md:col-span-2">
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Nutrient Content (per 100g)
//                         </label>
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                             {NUTRIENT_KEYS.map((key) => (
//                                 <div key={key}>
//                                     <label className="block text-xs font-medium text-gray-600 mb-1 capitalize">
//                                         {key}
//                                     </label>
//                                     <Input
//                                         type="number"
//                                         placeholder={key}
//                                         value={form.nutrientContent[key]}
//                                         onChange={(e) =>
//                                             setForm({
//                                                 ...form,
//                                                 nutrientContent: {
//                                                     ...form.nutrientContent,
//                                                     [key]: e.target.value,
//                                                 },
//                                             })
//                                         }
//                                     />
//                                     {fieldErrors[key] && (
//                                         <p className="text-red-600 text-sm mt-1">
//                                             {fieldErrors[key]}
//                                         </p>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <Button
//                         onClick={handleSubmit}
//                         className="md:col-span-2 bg-[#8dccc7]"
//                     >
//                         {editingId ? "Update Grain" : "Submit"}
//                     </Button>
//                 </div>
//             ) : (
//                 <ProductTable
//                     headers={headers}
//                     products={grains.map((g) => ({
//                         id: g.id,
//                         name: g.grainName,
//                         description: g.grainDesc,
//                         price: g.actualPrice,
//                         stock: g.available ? "In Stock" : "Out of Stock",
//                         image: g.image,
//                         nutrientContent: g.nutrientContent,
//                     }))}
//                     onEdit={handleEdit}
//                     onDelete={handleDelete}
//                 />
//             )}
//         </div>
//     );
// };

// export default GrainsPage;
