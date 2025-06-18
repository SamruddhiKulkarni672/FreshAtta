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