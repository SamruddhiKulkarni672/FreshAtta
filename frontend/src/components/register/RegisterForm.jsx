"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

export default function RegisterForm() {
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

  const isValidMobile = (number) => /^[6-9]\d{9}$/.test(number);
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobileNumber" && /[^0-9]/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    let error = "";
    if (name === "email" && value && !isValidEmail(value))
      error = "Invalid email format";
    else if (name === "mobileNumber" && value && !isValidMobile(value))
      error = "Mobile number must be 10 digits.";
    else if (name === "password" && value.length < 6)
      error = "Password must be at least 6 characters";
    else if (name === "confirmPassword" && value !== formData.password)
      error = "Passwords do not match";
    else if (value.trim() === "") error = "This field is required";

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

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

    toast.success("Registration successful!");
    router.push("/");

    // Optional API call logic here (currently commented in your original)
  };

  return (
    <div className="h-auto md:py-12 py-16 lg:py-20 bg-[url('/images/backgroundimagelogin.jpg')] bg-cover flex items-center justify-center px-4  ">
      <div className="w-full max-w-xl bg-white lg:p-8 p-4 rounded-xl shadow-md">
        <h2 className="lg:text-3xl md:text-xl text-lg font-semibold text-center mb-6 text-gray-800">
          Create Your Account
        </h2>

        {submitError && (
          <p className="text-red-600 mb-4 text-sm text-center">{submitError}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder="Enter your Full Name"
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your Email"
          />
          <InputField
            label="Mobile Number"
            name="mobileNumber"
            type="text"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={errors.mobileNumber}
            maxLength={10}
            placeholder="Enter your Mobile Number"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Enter your Password"
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="Confirm your Password"
          />

          <TextAreaField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            placeholder="Enter your Address"
          />

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
