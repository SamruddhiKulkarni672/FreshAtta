import Image from "next/image";
import Carousel from '../components/Carousel'

export default function Home() {
  return <div className=" flex bg-[#FFFFFF] text-3xl h-auto min-h-[360px]">
    <div className="flex justify-center  w-full"> 
    <Carousel/>
    </div>
  </div>;
}
