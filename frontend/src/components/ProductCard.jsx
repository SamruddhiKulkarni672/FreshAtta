"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/rtk/cartSlice";

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);
  const dispath = useDispatch();
  const handleAddToCart = () => {
    setAdded(true);
    dispath(addToCart(product));
    //router.push("/cart");
  };
  const router = useRouter();

  const handleNavigate = () => {
    if (product.navigate) {
      router.push(product.navigate);
    }
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer relative w-full max-w-[300px] xl:w-[280px] h-auto rounded-[20px] sm:rounded-[20px] md:rounded-[20px] p- sm:p-4 bg-productBackground"
    >
      {/* Discount badge */}
      <div className="absolute top-2 right-1 md:right-2 px-2 py-1 rounded bg-disocountBg text-white text-xs sm:text-sm font-semibold shadow">
        -{product.discountPercent}
      </div>

      <div className="flex flex-col h-full pt-4 sm:pt-0">
        {/* Image */}
        <div className="h-[140px] sm:h-[160px] md:h-[180px] rounded-[12px] sm:rounded-[15px] flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={163}
            height={143}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="mt-4 px-2 flex flex-col justify-between flex-1">
          <h4 className="text-base sm:text-lg md:text-[17px] font-medium leading-[1.2] text-productPriceColor capitalize">
            {product.name}
          </h4>

          <div className="flex space-x-1 text-black text-xs mt-2 items-center">
            {[...Array(5)].map((_, i) =>
              i < product.rating ? (
                <FaStar key={i} className="text-xs sm:text-sm" />
              ) : (
                <FaRegStar key={i} className="text-xs sm:text-sm" />
              )
            )}
          </div>
          <div>
            <p className="text-sm text-gray-600 mt-2">
              {product.description.length > 40
                ? product.description.slice(0, 30) + "..."
                : product.description}
            </p>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <div className="text-sm sm:text-base flex line-through leading-[1.2] text-productTextOriginal items-center gap-1">
              <FaIndianRupeeSign />
              {product.originalPrice}
            </div>
            {/* <div className="text-xs sm:text-sm px-2 py-1 rounded bg-disocountBg text-discountColor">
              -{product.discountPercent}%
            </div> */}
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-1 text-xl sm:text-2xl font-semibold text-productPriceColor">
              <FaIndianRupeeSign />
              {product.discountedPrice}
            </div>
            {product.isCustomizedProduct && (
              <div className="w-[85px]   h-[45px] sm:h-[45px] rounded-[10px]  sm:rounded-[13px] ml-2 bg-cartBackgroundColor flex items-center justify-center">
                {/* <FiShoppingCart className="text-white text-lg sm:text-xl" /> */}
                <span className=" text-white text-sm font-semibold px-2">
                  checkout
                </span>
              </div>
            )}
            {!product.isCustomizedProduct && (
              <>
                {added ? (
                  <Link
                    href="/cart"
                    className="inline-flex w-[90px] sm:w-[110px] h-[45px] sm:h-[50px] rounded-[10px] sm:rounded-[13px] bg-cartBackgroundColor text-white text-sm font-semibold items-center justify-center cursor-pointer whitespace-nowrap hover:bg-cartHoverBackground transition-colors duration-300"
                  >
                    Go to Cart
                  </Link>
                ) : (
                  <div
                    onClick={handleAddToCart}
                    className="w-[45px] sm:w-[55px] h-[45px] sm:h-[50px] rounded-[10px] sm:rounded-[13px] bg-cartBackgroundColor flex items-center justify-center cursor-pointer"
                  >
                    <FiShoppingCart className="text-white text-lg sm:text-xl" />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// "use client";

// import Image from "next/image";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import { LuMessageSquareMore } from "react-icons/lu";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { FiShoppingCart } from "react-icons/fi";

// const ProductCard = ({ product }) => {
//   const router = useRouter();

//   const handleNavigate = () => {
//     if (product.navigate) {
//       router.push(product.navigate);
//     }
//   };

//   return (
//     <div
//       onClick={handleNavigate}
//       className="cursor-pointer w-full max-w-[232px] h-auto rounded-[20px] sm:rounded-[20px] md:rounded-[20px] p- sm:p-4 bg-productBackground"
//     >
//       {/* Discount badge */}
//       <div className="absolute top-2 right-1 md:right-3 px-1 py-1 rounded bg-[#41bf6d] text-white text-xs sm:text-sm font-semibold shadow">
//         -{product.discountPercent} 1%
//       </div>

//       <div className="flex flex-col h-full pt-4 sm:pt-0">
//         {/* Image */}
//         <div className="h-[140px] sm:h-[160px] md:h-[180px] rounded-[12px] sm:rounded-[15px] flex items-center justify-center">
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={163}
//             height={143}
//             className="object-contain"
//           />
//         </div>

//         {/* Content */}
//         <div className="mt-4 px-2 flex flex-col justify-between flex-1">
//           <h4 className="text-base sm:text-lg md:text-[17px] font-medium leading-[1.2] text-productPriceColor capitalize">
//             {product.name}
//           </h4>

//           <div className="flex space-x-1 text-black text-xs mt-2 items-center">
//             {[...Array(5)].map((_, i) =>
//               i < product.rating ? (
//                 <FaStar key={i} className="text-xs sm:text-sm" />
//               ) : (
//                 <FaRegStar key={i} className="text-xs sm:text-sm" />
//               )
//             )}
//           </div>
//           <div>
//             <p className="text-sm text-gray-600 mt-2">
//               {product.description.length > 40
//                 ? product.description.slice(0, 30) + "..."
//                 : product.description}
//             </p>
//           </div>
//           <div className="flex mt-2 items-center justify-between">
//             <div className="text-sm sm:text-base flex line-through leading-[1.2] text-productTextOriginal items-center gap-1">
//               <FaIndianRupeeSign />
//               {product.originalPrice}
//             </div>
//             {/* <div className="text-xs sm:text-sm px-2 py-1 rounded bg-disocountBg text-discountColor">
//               -{product.discountPercent}%
//             </div> */}
//           </div>

//           <div className="flex justify-between items-center mt-2">
//             <div className="flex items-center gap-1 text-xl sm:text-2xl font-semibold text-productPriceColor">
//               <FaIndianRupeeSign />
//               {product.discountedPrice}
//             </div>
//             {product.isCustomizedProduct &&(
//                     <div className="w-[85px]   h-[45px] sm:h-[45px] rounded-[10px] sm:rounded-[13px] ml-2 bg-cartBackgroundColor flex items-center justify-center">
//                 {/* <FiShoppingCart className="text-white text-lg sm:text-xl" /> */}
//                 <span className=" text-white text-sm font-semibold ">checkout</span>
//               </div>
//             )}
//             {!product.isCustomizedProduct && (
//               <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[50px] rounded-[10px] sm:rounded-[13px] bg-cartBackgroundColor flex items-center justify-center">
//                 <FiShoppingCart className="text-white text-lg sm:text-xl" />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
