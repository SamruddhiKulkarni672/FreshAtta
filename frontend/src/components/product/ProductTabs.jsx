const ProductTabs = ({ description }) => (
  <div className="mt-10 border-t pt-6">
    <div className="flex gap-6 border-b">
      <button className="pb-2 border-b-2 border-green-600 font-medium text-green-700">
        Description
      </button>
      <button className="pb-2 text-gray-500">Specifications</button>
      <button className="pb-2 text-gray-500">Reviews</button>
      <button className="pb-2 text-gray-500">Shipping Info</button>
    </div>
    <div className="mt-4 text-gray-700">
      <h2 className="text-lg font-semibold mb-2">Product Description</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default ProductTabs;
