import Image from "next/image";
import Carousel from "../components/Carousel";

import products from "../assets/products.js";
import MissionValues from "@/components/common/MissionValues";
import AllProductsGrid from "@/components/product/AllProductsGrid";
export default function Home() {
  return (
    <>
      <div className=" flex flex-col bg-[#FFFFFF] text-3xl h-auto min-h-[360px]">
        <div className=" justify-center  w-full hidden lg:flex">
          <Carousel />
        </div>
        <div className="flex justify-center  w-full">
          <MissionValues />
        </div>
        <div>
          <AllProductsGrid products={products} />
        </div>
      </div>
    </>
  );
}
