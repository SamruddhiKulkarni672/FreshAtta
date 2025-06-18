const ProductPrice = ({ product }) => (
  <div className="flex items-center gap-4">
    <span className="text-2xl font-semibold text-green-700">₹{product.discountedPrice}</span>
    <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
    <span className="text-sm text-white bg-green-500 px-2 py-1 rounded">
      {product.discountPercent}% OFF
    </span>
  </div>
);

export default ProductPrice;
