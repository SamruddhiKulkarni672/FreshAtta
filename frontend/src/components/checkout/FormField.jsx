"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const FormField = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  className = "",
  textarea = false,
  rows = 3,
  placeholder = "",
}) => {
  const commonProps = {
    id,
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    disabled,
    className: `w-full ${error ? "border-red-500" : ""} ${className}`,
  };

  return (
    <div className="space-y-2 w-full">
      <Label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {textarea ? (
        <textarea
          {...commonProps}
          rows={rows}
          placeholder="House number, street name, Area, Soicety"
          className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-red-500" : ""
          } ${className}`}
        />
      ) : (
        <Input type={type} {...commonProps} className="text-sm" />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

// "use client";

// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export const FormField = ({
//   id,
//   name,
//   label,
//   type = "text",
//   value,
//   onChange,
//   onBlur,
//   error,
//   required = false,
//   disabled = false,
//   className = "",
//   textarea = false,
//   rows = 2,
// }) => {
//   const commonProps = {
//     id,
//     name,
//     value,
//     onChange,
//     onBlur,
//     disabled,
//     className: `w-full ${error ? "border-red-500" : ""} ${className}`,
//   };

//   return (
//     <div className="space-y-2">
//       <Label htmlFor={id}>
//         {label} {required && <span className="text-red-500">*</span>}
//       </Label>
//       {textarea ? (
//         <textarea
//           {...commonProps}
//           rows={rows}
//           className={`rounded-md border p-2 ${
//             error ? "border-red-500" : "border-gray-300"
//           } focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent ${className}`}
//         />
//       ) : (
//         <Input type={type} {...commonProps} />
//       )}
//       {error && <p className="text-sm text-red-500">{error}</p>}
//     </div>
//   );
// };
