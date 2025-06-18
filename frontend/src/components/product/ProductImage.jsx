import Image from "next/image";

const ProductImage = ({ src, alt }) => (
  <div className="w-full h-[500px] relative rounded-sm overflow-hidden shadow-md">
    <Image src={src} alt={alt} fill className="object-cover rounded-sm" />
  </div>
);

export default ProductImage;
