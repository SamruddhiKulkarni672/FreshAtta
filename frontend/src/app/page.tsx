import Image from "next/image";
import Carousel from "../components/Carousel";
import ProductCard from "./../components/ProductCard";
import products from "../assets/products.js";
export default function Home() {
  return (
    <div className=" flex flex-col bg-[#FFFFFF] text-3xl h-auto min-h-[360px]">
      <div className=" flex flex-col bg-[#FFFFFF] text-3xl h-auto min-h-[360px]">
        <div className="flex justify-center  w-full">
          <Carousel />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-2 sm:px-8 md:pl-16 mb-[120px] mt-[60px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="bg-[#cddae1] text-3xl h-auto min-h-[360px] flex items-center justify-center">
  //     <ProductCard />
  //   </div>
  // );
}
