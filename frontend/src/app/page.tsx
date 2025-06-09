import Image from "next/image";
import Carousel from "../components/Carousel";
import ProductCard from "./../components/ProductCard";
import products from "../assets/products.js";
export default function Home() {
  return (
    <>
      <div className=" flex flex-col bg-[#FFFFFF] text-3xl h-auto min-h-[360px]">
        <div className="flex justify-center  w-full">
          <Carousel />
        </div>
        <div className="px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-2 gap-y-8 px-2 xl:px-10 lg:px-6  mt-[26px] mb-[26px] lg:mb-[120px] lg:mt-[30px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //   <div className="bg-[#cddae1] text-3xl h-auto min-h-[360px] flex items-center justify-center">
  //     <ProductCard />
  //   </div>
  // );
}
