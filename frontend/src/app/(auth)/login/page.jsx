"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
//import axios from "axios";
//import { login } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux"; // Import useDispatch

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/"; // Get redirect param if exists

  const [formData, setFormData] = useState({
    username: "", // Changed 'email' to 'username'
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

    // if (loading) return;

    // setLoading(true);
    // setError("");
     console.log(formData);
     toast.success("Registration successful!");
          router.push("/");
    // try {
    //   const response = await axios.post(
    //     "/api/login-user", // Your backend URL for generating the token
    //     {
    //       username: formData.username,
    //       password: formData.password,
    //     }
    //   );

    //   // console.log(response);
    //   // const { token } = response.data;/// get token from response

    //   // Extract the token from the Authorization header
    //   const authHeader = response.headers["authorization"]; // or use response.headers['Authorization']
    //   const token = authHeader ? authHeader.split(" ")[1] : null;
    //   if (token) {
    //     const userResponse = await axios.get("/api/getuserdata", {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     const userData = userResponse.data;
    //     // console.log(userData);
    //     alert("Login Successful!");

    //     // Save the token in localStorage (or use HttpOnly cookies if possible)
    //     localStorage.setItem("authToken", token);
    //     localStorage.setItem("user", JSON.stringify(userData));
    //     dispatch(login({ user: userData, token: token }));
    //     const role = userData.role;
    //     // Redirect to the dashboard using Next.js router
    //     if (role === "ADMIN") {
    //       router.push("/admin");
    //     } else {
    //       router.push("/");
    //     }
    //     // Example: Navigate to the dashboard page
    //   } else {
    //     setError("Token not received from server.");
    //   }
    // } catch (err) {
    //   console.error(
    //     "Login Error:",
    //     err.response ? err.response.data : err.message
    //   );
    //   console.log(err);
    //   setError("Login failed. Please check your credentials.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="">
      <div className="relative bg-[url('/images/backgroundimagelogin.jpg')] bg-no-repeat bg-cover   z-0 bg-center w-full   ">
        <div className="flex justify-center items-center min-h-screen  px-4">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            <form onSubmit={submitHandler} className="space-y-4">
              <input
                type="text" // Changed from 'email' to 'text' for username input
                name="username" // Changed from 'email' to 'username'
                value={formData.username}
                onChange={handleChange}
                suppressHydrationWarning
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                required
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                suppressHydrationWarning
                placeholder="Enter your Password"
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
                className="w-full bg-cartBackgroundColor text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
