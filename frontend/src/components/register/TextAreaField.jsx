export default function TextAreaField({ label, name, value, onChange, error, placeholder }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
      <label htmlFor={name} className="text-gray-700 hidden md:block text-sm font-medium">
        {label}
      </label>
      <div className="md:col-span-2 w-full max-w-[350px]">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          rows={3}
          className={`px-4 py-2 border rounded-md focus:border-black focus:outline-none w-full ${
            error ? "border-red-500" : ""
          }`}
        ></textarea>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    </div>
  );
}
