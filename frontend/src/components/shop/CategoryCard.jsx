
import Image from "next/image";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg p-4 shadow hover:shadow-md transition">
      <div className="w-20 h-20 relative mb-2">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <p className="text-gray-700 font-medium text-sm">{title}</p>
    </div>
  );
};

export default CategoryCard;