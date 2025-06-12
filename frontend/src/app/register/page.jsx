"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
//import axios from "axios";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    addressLine1: "",
    addressLine2: "",
    password: "",
    confirmPassword: "",
    role: "USER", // Assuming 'USER' as default role; update as necessary
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setLoading(true);
      setError("");

      // "http://localhost:8080/auth/register-user",
      try {
        const res = await axios.post("/api/register-user", {
          fullName: formData.fullName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          password: formData.password,
          role: formData.role, // Add role here
          addressLine1: formData.addressLine1,
          addressLine2: formData.addressLine2,
        });

        alert(res.data.message);
        router.push("/login");
      } catch (err) {
        setError("Registration failed.");
        console.error(err);
      } finally {
        setLoading(false);
      }
      console.log(formData);
      // router.push("/login");
      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        addressLine1: "",
        addressLine2: "",
        password: "",
        confirmPassword: "",
        role: "USER", // Reset role
      });
    } else {
      return alert("Password and confirm password must be equal");
    }
  };

  return (
    <div className="min-h-screen bg-[url('/images/loginbg.jpg')] bg-cover flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Create Your Account
        </h2>

        {error && (
          <p className="text-red-600 mb-4 text-sm text-center">{error}</p>
        )}

        <form onSubmit={submitHandler} className="space-y-4">
          {/* Grid wrapper */}
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
            },
            {
              label: "Address ",
              name: "addressLine",
              type: "text",
              placeholder: "Enter your Address Line ",
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
          ].map(({ label, name, type, placeholder }) => (
            <div
              key={name}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
            >
              <label
                htmlFor={name}
                className="text-gray-700 hidden md:block text-sm font-medium"
              >
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                suppressHydrationWarning
                className="md:col-span-2 px-4 py-2 border rounded-md focus:border-black focus:outline-none w-full max-w-[350px]"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cartBackgroundColor text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
