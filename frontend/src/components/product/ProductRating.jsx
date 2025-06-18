import { FaStar } from "react-icons/fa";

const ProductRating = ({ rating }) => (
  <div className="flex items-center gap-2 text-yellow-500">
    {[...Array(rating)].map((_, i) => <FaStar key={i} />)}
    <span className="text-sm text-gray-600 ml-2">342 Reviews</span>
  </div>
);

export default ProductRating;
