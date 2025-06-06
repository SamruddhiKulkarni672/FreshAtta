"use client";

import Image from "next/image";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="w-full max-w-[232px] h-auto rounded-[20px] sm:rounded-[28px] md:rounded-[34px] p- sm:p-4 bg-productBackground"
    >
      <div className="flex flex-col h-full">
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
            <LuMessageSquareMore className="ml-1 text-xs sm:text-sm" />
          </div>

          <div className="flex mt-4 items-center justify-between">
            <div className="text-sm sm:text-base flex line-through leading-[1.2] text-productTextOriginal items-center gap-1">
              <FaIndianRupeeSign />
              {product.originalPrice}
            </div>
            <div className="text-xs sm:text-sm px-2 py-1 rounded bg-disocountBg text-discountColor">
              -{product.discountPercent}%
            </div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-1 text-xl sm:text-2xl font-semibold text-productPriceColor">
              <FaIndianRupeeSign />
              {product.discountedPrice}
            </div>
            <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[50px] rounded-[10px] sm:rounded-[13px] bg-cartBackgroundColor flex items-center justify-center">
              <FiShoppingCart className="text-white text-lg sm:text-xl" />
            </div>
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
// import { FaStar, FaRegStar } from "react-icons/fa";
// import { LuMessageSquareMore } from "react-icons/lu";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { FiShoppingCart } from "react-icons/fi";

// const ProductCard = ({ product }) => {
//   return (
//     <div
//       key={product.id}
//       className="w-[232px] h-[315px] rounded-[34px] p-2 bg-productBackground"
//     >
//       <div className="product flex flex-col h-full">
//         <div className="image h-1/2 rounded-[15px] pt-[22px] flex items-center justify-center">
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={163}
//             height={143}
//           />
//         </div>
//         <div className="content h-1/2 mt-4 mx-3">
//           <h4 className="text-[17px] leading-[1.2] text-productPriceColor">
//             {product.name.toLowerCase()}
//           </h4>
//           <div className="flex space-x-1 text-black text-xs mt-2">
//             {[...Array(5)].map((_, i) =>
//               i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
//             )}
//             <span>
//               <LuMessageSquareMore />
//             </span>
//           </div>
//           <div className="flex mt-4">
//             <div className="text-[20px] flex line-through leading-[1.2] text-productTextOriginal">
//               <FaIndianRupeeSign />
//               {product.originalPrice}
//             </div>
//             <div className="text-[14px] ml-8 flex items-center leading-[1.2] bg-disocountBg text-discountColor">
//               <p>-{product.discountPercent}%</p>
//             </div>
//           </div>
//           <div className="flex justify-between">
//             <div className="leading-[1.2] flex mt-2 text-[28px] font-semibold text-productPriceColor">
//               <FaIndianRupeeSign />
//               {product.discountedPrice}
//             </div>
//             <div className="w-[55px] rounded-[13px] h-[50px] bg-cartBackgroundColor flex items-center justify-center">
//               <FiShoppingCart className="text-white h-6" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
