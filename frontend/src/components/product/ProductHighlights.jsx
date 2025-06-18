import { FaTruck, FaShieldAlt, FaLeaf } from "react-icons/fa";

const ProductHighlights = () => (
  <div className="flex flex-col gap-2 mt-6 text-sm text-gray-700">
    <div className="flex items-center gap-2">
      <FaTruck className="text-green-600" />
      Free delivery on orders above ₹499
    </div>
    <div className="flex items-center gap-2">
      <FaShieldAlt className="text-green-600" />
      100% authentic products
    </div>
    <div className="flex items-center gap-2">
      <FaLeaf className="text-green-600" />
      100% natural and organic
    </div>
  </div>
);

export default ProductHighlights;
