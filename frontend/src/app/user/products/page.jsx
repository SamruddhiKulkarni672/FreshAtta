import products from "@/assets/products";

import AllProductsGrid from "@/components/product/AllProductsGrid";
const page = () => {
  return (
    <div>
      <AllProductsGrid products={products} />
    </div>
  );
};

export default page;

{
  /* <div className="px-4 sm:px-8 lg:px-16 lg:py-10">
        <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-2 gap-y-8 px-2 xl:px-10 lg:px-6  mt-[26px] mb-[26px] lg:mb-[120px] lg:mt-[30px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div> */
}
