"use client";

import React from "react";
import ProductTable from "../../../components/ProductTable";

// import { useGetcategoriesQuery } from "../../../features/rtkQuery/categories";

const Page = () => {
  //const { data, error, isLoading } = useGetcategoriesQuery();

  return (
    <div className="p-6 space-y-6">
      {/* {isLoading && (
        <p className="text-muted-foreground">Loading categories...</p>
      )}
      {error && <p className="text-destructive">Error: {error.message}</p>} */}

     
        <>
          <div className="rounded-xl border bg-white shadow-sm p-4">
            <ProductTable
              products={[
                {
                  id: 1,
                  name: "Apple iPhone 15",
                  description: "Latest iPhone model",
                  price: 79999,
                  stock: 20,
                  image: "/images/iphone.jpg",
                },
                {
                  id: 2,
                  name: "Samsung Galaxy S24",
                  description: "Flagship Android phone",
                  price: 69999,
                  stock: 15,
                  image: "",
                },
              ]}
              onEdit={(id) => console.log("Edit product", id)}
              onDelete={(id) => console.log("Delete product", id)}
              title="products"
              limit={6}
            />
          </div>
        </>
      
    </div>
  );
};

export default Page;
