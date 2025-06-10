"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus } from "lucide-react";

const ProductTable = ({
  products = [],
  title = "Products",
  onEdit,
  onDelete,
  onAddProduct,
}) => {
  const router = useRouter();

  const handleAddProduct = () => {
    if (onAddProduct) {
      onAddProduct();
    } else {
      router.push("/add-product");
    }
  };

  return (
    <div className="mt-10 w-full overflow-x-auto">
      <div className="p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
          <div className="w-full md:w-auto md:ml-auto">
            <Button
              className="w-full md:w-auto flex items-center justify-center gap-2 px-3 py-2 text-sm md:text-base md:px-5 md:py-3"
              onClick={handleAddProduct}
            >
              <Plus className="w-4 h-4" />
              Add Product
            </Button>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-600 text-sm">Image</TableHead>
            <TableHead className="text-gray-600 text-sm">
              Product Name
            </TableHead>
            <TableHead className="text-gray-600 text-sm hidden md:table-cell">
              Description
            </TableHead>
            <TableHead className="text-gray-600 text-sm">Price</TableHead>
            <TableHead className="text-gray-600 text-sm">Stock</TableHead>
            <TableHead className="text-gray-600 text-sm">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-md object-cover border"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center border rounded-md text-xs text-gray-400">
                    No Image
                  </div>
                )}
              </TableCell>

              <TableCell className="max-w-[180px] truncate text-sm font-medium text-gray-800">
                {product.name}
              </TableCell>

              <TableCell className="hidden md:table-cell text-sm text-gray-600 max-w-[300px] break-words">
                {product.description}
              </TableCell>

              <TableCell className="text-sm text-gray-700">
                ₹{product.price}
              </TableCell>

              <TableCell className="text-sm text-gray-700">
                {product.stock ?? "N/A"}
              </TableCell>

              <TableCell>
                <div className="flex gap-3">
                  <button
                    onClick={() => onEdit?.(product.id)}
                    className="text-gray-400 hover:text-black"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => onDelete?.(product.id)}
                    className="text-gray-400 hover:text-black"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
