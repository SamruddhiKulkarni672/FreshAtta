const QuantitySelector = ({ quantity, setQuantity }) => (
  <div className="flex items-center gap-4 mt-4">
    <button
      onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
    >
      -
    </button>
    <span>{quantity}</span>
    <button
      onClick={() => setQuantity((prev) => prev + 1)}
      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
    >
      +
    </button>
  </div>
);

export default QuantitySelector;
