"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Regex validations
  const isValidMobile = (number) => /^[6-9]\d{9}$/.test(number);
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  // Handle input change with real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobileNumber" && /[^0-9]/.test(value)) return; // prevent non-numeric

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Field-specific validation
    let error = "";
    if (name === "email" && value && !isValidEmail(value)) {
      error = "Invalid email format";
    } else if (name === "mobileNumber" && value && !isValidMobile(value)) {
      error = "Mobile number must be 10 digits.";
    } else if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters";
    } else if (name === "confirmPassword" && value !== formData.password) {
      error = "Passwords do not match";
    } else if (value.trim() === "") {
      error = "This field is required";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    console.log(formData);
      toast.success("Registration successful!");
      router.push("/");
    // Final validation before submission
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!isValidEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!isValidMobile(formData.mobileNumber))
      newErrors.mobileNumber = "Invalid mobile number";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (formData.password.length < 6) newErrors.password = "Password too short";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // try {
    //   setLoading(true);
    //   const response = await fetch("/api/register-user", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();
    //   if (!response.ok) throw new Error(data.message || "Registration failed");

      // alert(data.message || "Registration successful!");
      // router.push("/login");

    //   // Reset
    //   setFormData({
    //     fullName: "",
    //     email: "",
    //     mobileNumber: "",
    //     address: "",
    //     password: "",
    //     confirmPassword: "",
    //     role: "USER",
    //   });
    //   setErrors({});
    // } catch (err) {
    //   setSubmitError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen bg-[url('/images/backgroundimagelogin.jpg')] bg-cover flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Create Your Account
        </h2>

        {submitError && (
          <p className="text-red-600 mb-4 text-sm text-center">{submitError}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input fields */}
          {[
            {
              label: "Full Name",
              name: "fullName",
              type: "text",
              placeholder: "Enter your Full Name",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "Enter your Email",
            },
            {
              label: "Mobile Number",
              name: "mobileNumber",
              type: "text",
              placeholder: "Enter your Mobile Number",
              maxLength: 10,
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              placeholder: "Enter your Password",
            },
            {
              label: "Confirm Password",
              name: "confirmPassword",
              type: "password",
              placeholder: "Confirm your Password",
            },
          ].map(({ label, name, type, placeholder, maxLength }) => (
            <div
              key={name}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 items-start"
            >
              <label
                htmlFor={name}
                className="text-gray-700 hidden md:block text-sm font-medium"
              >
                {label}
              </label>
              <div className="md:col-span-2 w-full max-w-[350px]">
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  maxLength={maxLength}
                  required
                  aria-label={label}
                  className={`px-4 py-2 border rounded-md focus:border-black focus:outline-none w-full ${
                    errors[name] ? "border-red-500" : ""
                  }`}
                />
                {errors[name] && (
                  <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
                )}
              </div>
            </div>
          ))}

          {/* Address Textarea */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
            <label
              htmlFor="address"
              className="text-gray-700 hidden md:block text-sm font-medium"
            >
              Address
            </label>
            <div className="md:col-span-2 w-full max-w-[350px]">
              <textarea
                id="address"
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your Address"
                required
                aria-label="Address"
                className={`px-4 py-2 border rounded-md focus:border-black focus:outline-none w-full ${
                  errors.address ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.address && (
                <p className="text-sm text-red-500 mt-1">{errors.address}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cartBackgroundColor text-white py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// //import axios from "axios";

// export default function Register() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobileNumber: "",
//     addressLine1: "",
//     addressLine2: "",
//     password: "",
//     confirmPassword: "",
//     role: "USER", // Assuming 'USER' as default role; update as necessary
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (formData.password === formData.confirmPassword) {
//       setLoading(true);
//       setError("");

//       // "http://localhost:8080/auth/register-user",
//       try {
//         const res = await axios.post("/api/register-user", {
//           fullName: formData.fullName,
//           email: formData.email,
//           mobileNumber: formData.mobileNumber,
//           password: formData.password,
//           role: formData.role, // Add role here
//           addressLine1: formData.addressLine1,
//           addressLine2: formData.addressLine2,
//         });

//         alert(res.data.message);
//         router.push("/login");
//       } catch (err) {
//         setError("Registration failed.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//       console.log(formData);
//       // router.push("/login");
//       setFormData({
//         fullName: "",
//         email: "",
//         mobileNumber: "",
//         addressLine1: "",
//         addressLine2: "",
//         password: "",
//         confirmPassword: "",
//         role: "USER", // Reset role
//       });
//     } else {
//       return alert("Password and confirm password must be equal");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[url('/images/backgroundimagelogin.jpg')] bg-cover flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md">
//         <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
//           Create Your Account
//         </h2>

//         {error && (
//           <p className="text-red-600 mb-4 text-sm text-center">{error}</p>
//         )}

//         <form onSubmit={submitHandler} className="space-y-4">
//           {/* Grid wrapper */}
//           {[
//             {
//               label: "Full Name",
//               name: "fullName",
//               type: "text",
//               placeholder: "Enter your Full Name",
//             },
//             {
//               label: "Email",
//               name: "email",
//               type: "email",
//               placeholder: "Enter your Email",
//             },
//             {
//               label: "Mobile Number",
//               name: "mobileNumber",
//               type: "text",
//               placeholder: "Enter your Mobile Number",
//             },
//             {
//               label: "Address ",
//               name: "addressLine",
//               type: "text",
//               placeholder: "Enter your Address Line ",
//             },

//             {
//               label: "Password",
//               name: "password",
//               type: "password",
//               placeholder: "Enter your Password",
//             },
//             {
//               label: "Confirm Password",
//               name: "confirmPassword",
//               type: "password",
//               placeholder: "Confirm your Password",
//             },
//           ].map(({ label, name, type, placeholder }) => (
//             <div
//               key={name}
//               className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
//             >
//               <label
//                 htmlFor={name}
//                 className="text-gray-700 hidden md:block text-sm font-medium"
//               >
//                 {label}
//               </label>
//               <input
//                 id={name}
//                 name={name}
//                 type={type}
//                 value={formData[name]}
//                 onChange={handleChange}
//                 placeholder={placeholder}
//                 required
//                 suppressHydrationWarning
//                 className="md:col-span-2 px-4 py-2 border rounded-md focus:border-black focus:outline-none w-full max-w-[350px]"
//               />
//             </div>
//           ))}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-cartBackgroundColor text-white py-2 rounded-md hover:bg-green-700 transition"
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
