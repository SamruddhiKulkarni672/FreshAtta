"use client";

import Image from "next/image";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = () => {
  let rating = 4;
  return (
    <div className="w-[232px] h-[315px] rounded-[34px] p-2 bg-productBackground">
      <div className="product flex flex-col h-full">
        <div className="image h-1/2 rounded-[15px] pt-[22px] flex items-center justify-center">
          <Image
            src="/images/aata1.svg"
            alt="Atta Product"
            width={163}
            height={143}
          />
        </div>
        <div className="content h-1/2 mt-4 mx-3">
          <h4 className="text-[17px] leading-[1.2] text-productPriceColor">
            multigrain atta
          </h4>
          <div className="flex space-x-1 text-black text-xs mt-2">
            {[...Array(5)].map((_, i) =>
              i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
            )}
            <span>
              <LuMessageSquareMore />
            </span>
          </div>
          <div className="flex  mt-4">
            <div className="text-[20px] flex line-through leading-[1.2] text-productTextOriginal">
              <FaIndianRupeeSign />
              999
            </div>
            <div className="text-[14px] ml-8 flex items-center leading-[1.2] bg-disocountBg text-discountColor">
              <p>-10%</p>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="leading-[1.2] flex mt-2 text-[28px] font-semibold text-productPriceColor">
              <FaIndianRupeeSign />
              899.90
            </div>
            <div className="w-[55px] rounded-[13px] h-[50px] bg-cartBackgroundColor flex items-center justify-center">
              <FiShoppingCart className="text-white h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
