 import GrainComboPage from"@/components/admin/grainCombo/GrainComboPage";

export default function ContactUs() {
  return <GrainComboPage />;
}



// "use client";

// import React, { useEffect, useState } from "react";
// import {
//     useGetGrainsQuery,
//     useGetGrainCombosQuery,
//     useAddGrainComboMutation,
//     useUpdateGrainComboMutation,
//     useDeleteGrainComboMutation,
// } from "@/rtk/grainApi";
// import ProductTable from "@/components/ProductTable";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const GrainComboPage = () => {
//     const { data: grains = [], error: fetchError } = useGetGrainsQuery();
//     const { data: combos = [] } = useGetGrainCombosQuery();
//     const [addGrainCombo] = useAddGrainComboMutation();
//     const [updateGrainCombo] = useUpdateGrainComboMutation();
//     const [deleteGrainCombo] = useDeleteGrainComboMutation();

//     const [showForm, setShowForm] = useState(false);
//     const [editingId, setEditingId] = useState(null);
//     const [localCombos, setLocalCombos] = useState([]);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [fieldErrors, setFieldErrors] = useState({});

//     const [form, setForm] = useState({
//         grainId: "",
//         name: "",
//         weight: "",
//         actualPrice: "",
//         sellingPrice: "",
//         discountedPrice: "",
//     });

//     useEffect(() => {
//         const areEqual =
//             localCombos.length === combos.length &&
//             localCombos.every((c, i) => c.id === combos[i]?.id);

//         if (!areEqual) {
//             setLocalCombos(combos);
//         }
//     }, [combos]);

//     const resetForm = () => {
//         setForm({
//             grainId: "",
//             name: "",
//             weight: "",
//             actualPrice: "",
//             sellingPrice: "",
//             discountedPrice: "",
//         });
//         setEditingId(null);
//         setShowForm(false);
//         setErrorMessage("");
//         setFieldErrors({});
//     };

//     const validateForm = () => {
//         const errors = {};
//         if (!form.grainId) errors.grainId = "Grain is required.";
//         if (!form.name.trim()) errors.name = "Combo name is required.";
//         if (!form.weight || isNaN(form.weight)) errors.weight = "Weight must be a number.";
//         if (!form.actualPrice || isNaN(form.actualPrice)) errors.actualPrice = "Actual price must be a number.";
//         if (!form.sellingPrice || isNaN(form.sellingPrice)) errors.sellingPrice = "Selling price must be a number.";
//         if (!form.discountedPrice || isNaN(form.discountedPrice)) errors.discountedPrice = "Discounted price must be a number.";
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

//         try {
//             const payload = {
//                 ...form,
//                 id: editingId,
//                 grainId: parseInt(form.grainId),
//                 weight: parseFloat(form.weight),
//                 actualPrice: parseFloat(form.actualPrice),
//                 sellingPrice: parseFloat(form.sellingPrice),
//                 discountedPrice: parseFloat(form.discountedPrice),
//             };

//             if (editingId) {
//                 const updated = await updateGrainCombo({ id: editingId, ...payload }).unwrap();
//                 setLocalCombos((prev) =>
//                     prev.map((combo) => (combo.id === editingId ? updated : combo))
//                 );
//             } else {
//                 const added = await addGrainCombo(payload).unwrap();
//                 setLocalCombos((prev) => [...prev, added]);
//             }

//             resetForm();
//         } catch (error) {
//             console.error("Error submitting combo:", error);
//             setErrorMessage("Failed to submit combo. Please try again.");
//         }
//     };

//     const handleDelete = async (id) => {
//         const confirmDelete = window.confirm("Are you sure you want to delete this combo?");
//         if (!confirmDelete) return;

//         try {
//             await deleteGrainCombo(id).unwrap();
//             setLocalCombos((prev) => prev.filter((g) => g.id !== id));
//         } catch {
//             setErrorMessage("Failed to delete grain combo. Try again later.");
//         }
//     };

//     const handleEdit = (id) => {
//         const combo = localCombos.find((c) => c.id === id);
//         if (!combo) return;

//         setForm({
//             grainId: combo.grainId.toString(),
//             name: combo.name,
//             weight: combo.weight.toString(),
//             actualPrice: combo.actualPrice.toString(),
//             sellingPrice: combo.sellingPrice.toString(),
//             discountedPrice: combo.discountedPrice.toString(),
//         });

//         setEditingId(id);
//         setShowForm(true);
//         setErrorMessage("");
//         setFieldErrors({});
//     };

//     const headers = ["Combo Name", "Grain ID", "Price"];

//     return (
//         <div className="p-6 space-y-6 mb-40">
//             <div className="flex justify-end">
//                 <Button
//                     className="bg-[#dbd8d3]"
//                     onClick={() => {
//                         if (showForm && editingId) resetForm();
//                         else setShowForm(!showForm);
//                     }}
//                 >
//                     {showForm ? "Cancel" : "Add Grain Combo"}
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
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border p-4 rounded-xl shadow-sm">
//                     <div>
//                         <label className="block text-sm font-medium mb-1">Select Grain *</label>
//                         <select
//                             className="border p-2 rounded w-full"
//                             value={form.grainId}
//                             onChange={(e) => setForm({ ...form, grainId: e.target.value })}
//                         >
//                             <option value="">Select Grain *</option>
//                             {grains.map((g) => (
//                                 <option key={g.id} value={g.id}>
//                                     {g.grainName}
//                                 </option>
//                             ))}
//                         </select>
//                         {fieldErrors.grainId && (
//                             <p className="text-red-600 text-sm mt-1">{fieldErrors.grainId}</p>
//                         )}
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium mb-1">Combo Name *</label>
//                         <Input
//                             placeholder="Combo Name"
//                             value={form.name}
//                             onChange={(e) => setForm({ ...form, name: e.target.value })}
//                         />
//                         {fieldErrors.name && (
//                             <p className="text-red-600 text-sm mt-1">{fieldErrors.name}</p>
//                         )}
//                     </div>

//                     {[
//                         { label: "Weight (g)", key: "weight" },
//                         { label: "Actual Price", key: "actualPrice" },
//                         { label: "Selling Price", key: "sellingPrice" },
//                         { label: "Discounted Price", key: "discountedPrice" },
//                     ].map(({ label, key }) => (
//                         <div key={key}>
//                             <label className="block text-sm font-medium mb-1">{label} *</label>
//                             <Input
//                                 type="number"
//                                 placeholder={label}
//                                 value={form[key]}
//                                 onChange={(e) =>
//                                     setForm((prev) => ({ ...prev, [key]: e.target.value }))
//                                 }
//                             />
//                             {fieldErrors[key] && (
//                                 <p className="text-red-600 text-sm mt-1">{fieldErrors[key]}</p>
//                             )}
//                         </div>
//                     ))}

//                     <Button onClick={handleSubmit} className="md:col-span-2 bg-[#8dccc7]">
//                         {editingId ? "Update Combo" : "Submit"}
//                     </Button>
//                 </div>
//             ) : (
//                 <ProductTable
//                     headers={headers}
//                     products={localCombos.map((c) => ({
//                         id: c.id,
//                         name: c.name,
//                         description: `Grain ID: ${c.grainId}`,
//                         price: `₹${c.discountedPrice}`,
//                     }))}
//                     onEdit={handleEdit}
//                     onDelete={handleDelete}
//                     showNutrients={false}
//                 />
//             )}
//         </div>
//     );
// };

// export default GrainComboPage;
