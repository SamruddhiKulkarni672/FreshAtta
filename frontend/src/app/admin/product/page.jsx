

 import  ProductPage from"@/components/admin/product/ProductPage";

export default function ContactUs() {
  return <ProductPage />;
}




// "use client";

// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Pencil, Trash2 } from "lucide-react";
// import {
//   useGetProductsQuery,
//   useAddProductMutation,
//   useDeleteProductMutation,
// } from "@/rtk/grainApi";

// const ProductPage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     images: [],
//   });

//   const { data: products = [], refetch } = useGetProductsQuery();
//   const [addProduct] = useAddProductMutation();
//   const [deleteProduct] = useDeleteProductMutation();

//   const handleImageChange = (e) => {
//     const newFiles = Array.from(e.target.files);
//     const mergedFiles = [...form.images, ...newFiles].slice(0, 3);
//     setForm({ ...form, images: mergedFiles });
//   };

//   const removeImage = (index) => {
//     const updatedImages = [...form.images];
//     updatedImages.splice(index, 1);
//     setForm({ ...form, images: updatedImages });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", form.name);
//     formData.append("description", form.description);
//     form.images.forEach((file) => formData.append("images", file));

//     try {
//       await addProduct(formData).unwrap();
//       setForm({ name: "", description: "", images: [] });
//       setShowForm(false);
//       refetch();
//     } catch (error) {
//       console.error("Failed to add product:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteProduct(id).unwrap();
//       refetch();
//     } catch (error) {
//       console.error("Failed to delete product:", error);
//     }
//   };

//   return (
//     <div className="p-6 space-y-8">
//       {!showForm && (
//         <>
//           <div className="flex justify-end">
//             <Button className="bg-[#dbd8d3]" onClick={() => setShowForm(true)}>
//               Add New Product
//             </Button>
//           </div>

//           <div className="mt-6">
//              <div className="overflow-x-auto rounded-lg shadow">
//               <table className="min-w-full text-sm text-left text-gray-700">
//                 <thead className="bg-[#eeedeb] text-gray-800">
//                   <tr>
//                     <th className="px-4 py-2">Image</th>
//                     <th className="px-4 py-2">Name</th>
//                     <th className="px-4 py-2">Description</th>
//                     <th className="px-4 py-2">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.length > 0 ? (
//                     products.map((prod) => (
//                       <tr key={prod.id} className="border-b border-gray-200">
//                         <td className="px-4 py-2">
//                           <img
//                             src={prod.imageEntityStringList?.[0]}
//                             alt={prod.name}
//                             className="h-12 w-12 object-cover rounded"
//                           />
//                         </td>
//                         <td className="px-4 py-2">{prod.name}</td>
//                         <td className="px-4 py-2">{prod.description}</td>
//                         <td className="px-4 py-2">
//                           <div className="flex gap-2">
//                             <button onClick={() => alert("Edit Coming Soon!")}>
//                               <Pencil size={16} />
//                             </button>
//                             <button onClick={() => handleDelete(prod.id)}>
//                               <Trash2 size={16} />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan={4} className="text-center text-gray-400 py-4">
//                         No products available.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}

//       {showForm && (
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-gray-200 rounded-xl"
//         >
//           <div className="col-span-1">
//             <label className="block text-sm font-medium mb-1">Product Name</label>
//             <Input
//               placeholder="e.g. Multigrain Atta"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium mb-1">Description</label>
//             <Textarea
//               placeholder="A healthy blend of wheat, oats, maize, and barley for better nutrition."
//               value={form.description}
//               onChange={(e) => setForm({ ...form, description: e.target.value })}
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium mb-1">Upload Images (max 3)</label>
//             <Input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleImageChange}
//             />
//             <div className="flex gap-2 mt-2">
//               {form.images.map((img, idx) => (
//                 <div key={idx} className="relative">
//                   <img
//                     src={URL.createObjectURL(img)}
//                     alt={`preview-${idx}`}
//                     className="h-16 w-16 object-cover rounded"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeImage(idx)}
//                     className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="md:col-span-2 flex justify-between">
//             <Button type="submit" className="bg-[#dbd8d3]">
//               Submit Product
//             </Button>
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => setShowForm(false)}
//             >
//               Cancel
//             </Button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ProductPage;
