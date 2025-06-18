"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa6";
import products from "@/assets/products";
import { notFound } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity } from "@/rtk/cartSlice";
import ProductImage from "@/components/product/ProductImage";
import ProductTabs from "@/components/product/ProductTabs";
const ProductDetailPage = ({ slug }) => {
  const dispatch = useDispatch();
  const product = products.find((p) => p.slug === slug);
  const cart = useSelector((state) => state.cart);
  const [added, setAdded] = useState(false);
  const [quantityOfProduct, setQuantityfOfProduct] = useState(0);
  const [image, setImage] = useState(product.image);

  //console.log(product.id);
  // console.log(cart.products)
  //console.log('total quantity of Product : ', quantityOfProduct)

  useEffect(() => {
    const productPresentInCart = cart.products.map((p) => {
      if (p.id === product.id) {
        console.log(p);
        setQuantityfOfProduct(p.quantity);
      }
    });
    //console.log(productPresentInCart)
  }, [image]);

  const handleImage = (imageUrl) => {
    //setImage(imageUrl)
    // console.log('image clicked')
    console.log(imageUrl);
  };
  const handleAddToCart = () => {
    if (!added) {
      dispatch(addToCart(product));
    }
    setAdded(true);
  };

  if (!product) return notFound();
  return (
    <div className="bg-[#E5E2E2] py-6 px-4 lg:py-20 md:px-8 lg:px-28">
      <div className="flex flex-col md:flex-row justify-center lg:gap-24 items-start gap-10">
        {/* Left Image Section */}
        <div className="w-full lg:w-[418px]">
          {/* Main Image */}
          <div className="relative w-full h-[350px] md:h-[380px] lg:h-[424px] aspect-[4/5] rounded-[36px] overflow-hidden">
            {/* <Image
              src="/images/wheatimg.png"
              alt="Golden Wheat Flour"
              fill
              className="object-cover rounded-2xl"
            /> */}
            <ProductImage src={image} alt={product.name} />
          </div>

          {/* Sub Images */}
          <div className="hidden md:grid grid-cols-3 gap-2 py-4 lg:mt-2">
            {product.subimages.map((image, i) => (
              <div
                onClick={handleImage(image)}
                key={i}
                className="relative w-full aspect-[3/2]"
              >
                <Image
                  src={`${image}`}
                  alt={` ${image}`}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Details Section */}
        <div className="w-full lg:w-[418px]">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold leading-none tracking-tight text-productDetailPageText">
            {product.name}
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl mt-3 flex items-center gap-1  font-bold leading-none tracking-tight text-black">
            <FaIndianRupeeSign />
            {product.originalPrice}
          </h3>

          <h3 className="font-bold mt-3 md:mt-4 text-productDetailDescriptionText text-base md:text-lg lg:text-xl leading-[120%] font-raleway">
            Description:
          </h3>
          <p className="font-normal lg:mt-4 mt-2 text-sm md:text-base text-productDetailContentText leading-[130%] font-clash">
            {product.description}
          </p>

          <h4 className="font-bold lg:mt-6 mt-4 text-productDetailDescriptionText text-base md:text-lg lg:text-xl leading-[120%] font-raleway">
            Size
          </h4>
          <div className="flex gap-4 mt-2 lg:mt-4">
            {["1kg", "5kg"].map((size) => (
              <button
                key={size}
                className="w-[120px] h-[40px] border border-productDetailSizeborder rounded-full font-semibold text-sm md:text-base text-productDetailTextItem hover:bg-productDetalbgOfButton"
              >
                {size}
              </button>
            ))}
          </div>

          <h3 className="font-bold lg:mt-6 mt-4 text-productDetailDescriptionText text-base md:text-lg lg:text-xl leading-[120%] font-raleway">
            Quantity
          </h3>
          <div className="mt-2 lg:mt-4 flex items-center justify-center gap-6 w-[120px] h-[34px] rounded-full shadow-md bg-white  text-productDetailTextItem font-bold text-base">
            <button
              onClick={() => {
                dispatch(decreaseQuantity(product.id));

                setQuantityfOfProduct(quantityOfProduct - 1);
              }}
            >
              -
            </button>
            <span>{quantityOfProduct > 1 ? quantityOfProduct : 1}</span>
            <button
              onClick={() => {
                dispatch(increaseQuantity(product.id));
                setQuantityfOfProduct(quantityOfProduct + 1);
              }}
            >
              +
            </button>
          </div>

          <div
            onClick={handleAddToCart}
            className="cursor-pointer mt-4 lg:mt-6 w-[200px] md:w-[327px] h-[40px] md:h-[50px] rounded-full shadow-[4px_4px_4px_#00000040] bg-cartBackgroundColor  text-white font-semibold text-base md:text-xl flex items-center justify-center"
          >
            Add to Cart
          </div>
        </div>
      </div>
      <div>
        {" "}
        <ProductTabs description={product.description} />
      </div>
    </div>
  );
};

export default ProductDetailPage;

// import React from "react";
// import Image from "next/image";
// const ProductDetailPage = () => {
//   return (
//     <div>
//       <div className="flex bg-[#E5E2E2] px-2 md:px-8 lg:px-28 py-4 md:py-6 lg:py-12  justify-center items-center min-h-[300px]">
//         <div className="md:flex justify-between gap-8">
//           <div className="flex  flex-col md:w-[600px] w-[50%]">
//             <div>
//               {/* main image */}
//               <div className="flex w-full max-w-xs sm:max-w-sm lg:max-w-md h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
//                 <Image
//                   src="/images/wheatimg.png"
//                   alt="Golden Wheat Flour"
//                   width={400}
//                   height={500}
//                   className="rounded-2xl w-full object-cover"
//                 />
//               </div>
//             </div>
//             {/* sub images */}
//             <div className="flex justify-between  py-2 md:py-4  items-center">
//               {/* subimage 1 */}
//               <div>
//                 <Image
//                   src="/images/wheatimg.png"
//                   alt="Golden Wheat Flour"
//                   width={130}
//                   height={80}
//                   className="rounded-2xl  object-cover"
//                 />
//               </div>
//               {/* subimage 2 */}
//               <div>
//                 <Image
//                   src="/images/wheatimg.png"
//                   alt="Golden Wheat Flour"
//                   width={130}
//                   height={80}
//                   className="rounded-2xl  object-cover"
//                 />
//               </div>
//               {/* subimage 3 */}
//               <div>
//                 <Image
//                   src="/images/wheatimg.png"
//                   alt="Golden Wheat Flour"
//                   width={130}
//                   height={80}
//                   className="rounded-2xl  object-cover"
//                 />
//               </div>
//               <div></div>
//             </div>
//           </div>
//           <div className=" w-[50%]">
//             <h2 className="leading-[100%]  tracking-[0%] font-semibold text-[16px] md:text-[26px] lg:text-[36px]  text-productDetailPageText">
//               Wheat Flour
//             </h2>
//             <h3 className="font-bold mt-2 md:mt-4 text-productDetailDescriptionText text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] tracking-[0%] align-bottom font-raleway">
//               Description:
//             </h3>
//             <p className="font-normal mt-2 text-[14px] text-productDetailContentText md:text-[16px] leading-[130%] tracking-[0%] align-bottom font-clash">
//               Boba etiam ut bulla tea est potus dilectus singulari compositione
//               saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba
//               refert ad pilas masticas tapiocas in fundo potus inventas, quae
//               typice lacte tea nigro sapiuntur. Boba phaenomenon.{" "}
//             </p>
//             <h4 className="font-bold mt-2 md:mt-4 text-productDetailDescriptionText text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] tracking-[0%] align-bottom font-raleway">
//               Size
//             </h4>
//             <div className="flex gap-4 mt-2 md:mt-4">
//               <button className="w-[119.61px] hover:bg-productDetalbgOfButton h-[40.11px] border border-solid rounded-[22px] border-productDetailSizeborder font-semibold md:text-[16px] text-productDetailTextItem text-[14px]">
//                 1kg
//               </button>
//               <button className="w-[119.61px] hover:bg-[#A0D4A39C] h-[40.11px] border border-solid rounded-[22px] border-productDetailSizeborder font-semibold md:text-[16px] text-productDetailTextItem text-[14px]">
//                 5kg
//               </button>
//             </div>
//             <h3 className="font-bold mt-2 md:mt-4 text-productDetailDescriptionText text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] tracking-[0%] align-bottom font-raleway">
//               Quantity
//             </h3>
//             <div className="mt-2 font-bold flex items-center justify-center gap-4 md:mt-4 w-[119.61px] shadow-[0_4px_4px_#00000040] bg-white hover:bg-productDetalbgOfButton h-[33.11px]   rounded-[16.5px]   md:text-[16px] text-productDetailTextItem text-[16px]">
//               <button className="">-</button>
//               <button className="">1</button>
//               <button className="">+</button>
//             </div>
//             <div className="mt-2 leading-[100%] tracking-[0%] w-[200px] md:w-[327px] md:h-[50px] h-[40px] text-white font-bold flex items-center justify-center gap-4 md:mt-4 shadow-[4px_4px_4px_0px_#00000040] bg-cartBackgroundColor hover:bg-productDetalbgOfButton   rounded-[20.5px]   md:text-[20px]  text-[16px]">
//               Add to Cart
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;
//! old product detail page
// import React, { useState } from "react";

// import { notFound } from "next/navigation";

// import products from "@/assets/products";

// import ProductImage from "@/components/product/ProductImage";
// import ProductPrice from "@/components/product/ProductPrice";
// import ProductRating from "@/components/product/ProductRating";
// import QuantitySelector from "@/components/product/QuantitySelector";
// import ProductActions from "@/components/product/ProductActions";
// import ProductHighlights from "@/components/product/ProductHighlights";
// import ProductTabs from "@/components/product/ProductTabs";

// const ProductDetailPage = ({ slug }) => {
//   const [quantity, setQuantity] = useState(1);
//   const product = products.find((p) => p.slug === slug);

//   if (!product) return notFound();

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <div className="grid md:grid-cols-2 gap-8">
//         <ProductImage src={product.image} alt={product.name} />

//         <div className="flex flex-col gap-4">
//           <h1 className="text-2xl font-bold">{product.name}</h1>
//           <ProductPrice product={product} />
//           <ProductRating rating={product.rating} />

//           <ul className="list-disc list-inside text-gray-700">
//             <li>100% Natural Premium Quality Wheat Flour</li>
//             <li>Stone-ground using traditional chakki method</li>
//             <li>Rich in fiber and proteins</li>
//           </ul>

//           <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
//           <ProductActions />
//           <ProductHighlights />
//         </div>
//       </div>

//       <ProductTabs description={product.description} />
//     </div>
//   );
// };

// export default ProductDetailPage;
