"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
// import axios from "axios";
// import { login } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(formData);
    toast.success("Login successful!");
    router.push("/");

    // Uncomment and configure backend API integration here
    // try {
    //   setLoading(true);
    //   setError("");
    //   const response = await axios.post("/api/login-user", formData);
    //   const token = response.headers["authorization"]?.split(" ")[1];
    //   if (token) {
    //     const userResponse = await axios.get("/api/getuserdata", {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     const userData = userResponse.data;
    //     localStorage.setItem("authToken", token);
    //     localStorage.setItem("user", JSON.stringify(userData));
    //     dispatch(login({ user: userData, token }));
    //     router.push(userData.role === "ADMIN" ? "/admin" : redirect);
    //   } else {
    //     setError("Token not received from server.");
    //   }
    // } catch (err) {
    //   setError("Login failed. Please check your credentials.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="relative bg-[url('/images/backgroundimagelogin.jpg')] bg-no-repeat bg-cover bg-center w-full">
      <div className="flex justify-center items-center py-32  lg:min-h-screen px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <form onSubmit={submitHandler} className="space-y-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your Email"
              autoComplete="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              autoComplete="current-password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => router.push("/forgot-password")}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cartBackgroundColor text-white py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   FaPhoneAlt,
//   FaShieldAlt,
//   FaLock,
//   FaCheckCircle,
//   FaTruck,
//   FaLeaf,
// } from "react-icons/fa";

// export default function LoginForm() {
//   const router = useRouter();
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");

//   const isValidMobile = (num) => /^[6-9]\d{9}$/.test(num);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isValidMobile(mobile)) {
//       setError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     setError("");
//     // simulate OTP flow
//     console.log("Sending OTP to", mobile);
//     router.push("/verify-otp");
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 md:p-8">
//         <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
//           Welcome to Kisan Basket
//         </h1>
//         <p className="text-center text-sm text-gray-500 mb-6">
//           Fresh groceries delivered to your doorstep
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Enter Mobile Number
//             </label>
//             <div className="relative">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 <FaPhoneAlt />
//               </span>
//               <input
//                 type="text"
//                 maxLength={10}
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
//                   error ? "border-red-500" : "border-gray-300"
//                 }`}
//                 placeholder="Enter your 10-digit mobile number"
//               />
//             </div>
//             {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
//           >
//             Get OTP
//           </button>

//           <p className="text-center text-xs text-gray-500 mt-2">
//             By continuing, you agree to our
//             <span className="text-green-600 font-medium cursor-pointer">
//               {" "}
//               Terms of Service
//             </span>
//             &
//             <span className="text-green-600 font-medium cursor-pointer">
//               {" "}
//               Privacy Policy
//             </span>
//           </p>
//         </form>

//         <div className="flex justify-around items-center mt-6 border-t pt-4 text-sm text-gray-600">
//           <div className="flex flex-col items-center">
//             <FaShieldAlt className="text-green-600 mb-1" />
//             Secure Login
//           </div>
//           <div className="flex flex-col items-center">
//             <FaLock className="text-green-600 mb-1" />
//             Data Protection
//           </div>
//           <div className="flex flex-col items-center">
//             <FaCheckCircle className="text-green-600 mb-1" />
//             Verified Sellers
//           </div>
//         </div>

//         <div className="flex justify-around mt-4 text-sm text-gray-600">
//           <div className="flex items-center gap-1">
//             <FaTruck className="text-green-600" /> Free Delivery
//           </div>
//           <div className="flex items-center gap-1">
//             <FaLeaf className="text-green-600" /> Fresh Products
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
