"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, User, ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const user = { role: "USER" };
  const products = [{}, {}, {}];

  const handleSearch = () => {
    setShowSearch(true);
    router.push("/filter");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md text-headerTextColor">
      <div className="w-full   px-4 py-2 md:py-5 flex items-center justify-between ">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="relative w-24 md:w-32 lg:w-40 h-8 ">
            <Link href="/">
              <Image
                src="/images/kisanbasketLogo.svg"
                alt="Kisan Basket logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex    space-x-6 lg:space-x-12 text-sm  font-semibold  ">
            <Link href="/" className="hover:text-green-700 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-700 transition">
              About
            </Link>
            <Link href="/about" className="hover:text-green-700 transition">
              Market
            </Link>
            <Link href="/services" className="hover:text-green-700 transition">
              Services
            </Link>
            <Link href="/blog" className="hover:text-green-700 transition">
              Blog
            </Link>
          </div>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex lg:mr-4 space-x-2 items-center">
          <div className="border px-2 py-2 bg-serachBackgroundColor rounded-md flex items-center">
            <button onClick={handleSearch} className="hover:bg-gray-100">
              <Search className="w-4 h-4 text-black" />
            </button>
          </div>
          <div className="relative border px-2 py-2 flex items-center bg-serachBackgroundColor rounded-md">
            <Link href="/cart">
              <div className="relative w-4 h-4">
                {" "}
                {/* You can use w-5 or w-8 depending on icon size */}
                <Image
                  src="/images/Shopping-bag.svg"
                  alt="Shopping Bag Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <Link href="/login">
            <Button
              variant="default"
              className="px-2 py-1 text-white rounded-[6px] bg-cartBackgroundColor"
            >
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-sm  font-semibold text-headerTextColor px-4 py-3 space-y-3 bg-white shadow border-t border-gray-200">
          <Link
            href="/"
            className="block text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/about"
            className="block text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Market
          </Link>
          <Link
            href="/services"
            className="block text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="block text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-2 text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart className="w-5 h-5" /> Cart ({products.length})
          </Link>
          <div className="mt-1 text-white">
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="destructive" className="w-full">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import logo from "../../public/images/kisan-basket-image1.jpg";
// import { ChevronDown, Search, User, ShoppingCart } from "lucide-react";

// const Header = () => {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [openCategory, setOpenCategory] = useState(null);
//   const [showSearch, setShowSearch] = useState(false);
//   const [search, setSearch] = useState("");

//   // Dummy placeholders
//   const isAdmin = false; // Replace with real admin check if needed
//   const user = { role: "USER" }; // Replace with real user object
//   const products = [{}, {}, {}]; // Dummy cart product list

//   const toggleDropdown = () => setIsOpen((prev) => !prev);
//   const toggleDropdownCat = (category) => {
//     setOpenCategory((prev) => (prev === category ? null : category));
//   };

//   const handleProfileClick = () => {
//     setIsOpen(false);
//     if (user?.role === "ADMIN") {
//       router.push("/admin");
//     } else {
//       router.push("/profile");
//     }
//   };

//   const handleLogout = () => {
//     setIsOpen(false);
//     router.push("/login");
//   };

//   const handleSearch = () => {
//     setShowSearch(true);
//     router.push("/filter");
//   };

//   const categories = {
//     Vegetables: ["Tomato", "Potato", "Carrot"],
//     Dairy: ["Milk", "Cheese"],
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="w-[180px]">
//           <Link href="/">
//             <Image src={logo} alt="Kisan Basket logo" />
//           </Link>
//         </div>

//         {/* Category Links - Hidden for Admin */}
//         {!isAdmin && (
//           <div className="lg:flex items-center space-x-6 text-[14px] font-black hidden">
//             <Link
//               href="/fresh-fruits"
//               className="text-gray-700 hover:text-leem_green hover:underline"
//             >
//               FRESH FRUITS
//             </Link>

//             {Object.entries(categories).map(([category, items]) => (
//               <div key={category} className="relative">
//                 <button
//                   className="text-gray-700 flex items-center hover:text-leem_green"
//                   onClick={() => toggleDropdownCat(category)}
//                 >
//                   <Link
//                     href={`/${category.toLowerCase().replace(/\s+/g, "-")}`}
//                   >
//                     {category.toUpperCase()}
//                   </Link>
//                   <ChevronDown className="w-5 h-5 mt-1 ml-1 text-black" />
//                 </button>

//                 {openCategory === category && (
//                   <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
//                     <ul className="py-2">
//                       {items.map((item, index) => (
//                         <li key={index}>
//                           <Link
//                             href={`/${category
//                               .toLowerCase()
//                               .replace(/\s/g, "-")}/${item
//                               .toLowerCase()
//                               .replace(/\s/g, "-")}`}
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             {item}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Right Section */}
//         <div className="register flex space-x-4">
//           {/* Search Bar */}
//           {!isAdmin && (
//             <div className="md:flex items-center gap-2 hidden border px-3 py-2 rounded-md">
//               <input
//                 type="text"
//                 placeholder="search.."
//                 defaultValue=""
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="outline-none border-none bg-transparent text-sm"
//               />

//               {!showSearch && (
//                 <button onClick={handleSearch} className="hover:bg-gray-100">
//                   <Search className="w-5 h-5 text-black" />
//                 </button>
//               )}
//               {showSearch && (
//                 <button
//                   onClick={() => setShowSearch(false)}
//                   className="text-sm text-gray-500 hover:text-red-500"
//                 >
//                   X
//                 </button>
//               )}
//             </div>
//           )}

//           {/* User Icon with Dropdown */}
//           <button
//             className="flex items-center px-1 py-2"
//             onClick={toggleDropdown}
//           >
//             <User className="w-5 h-5 text-black" />
//           </button>
//           {isOpen && (
//             <div className="absolute right-0 mt-0 m-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//               {user ? (
//                 <>
//                   <div
//                     onClick={handleProfileClick}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Profile
//                   </div>

//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     href="/login"
//                     onClick={() => setIsOpen(false)}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     href="/register"
//                     onClick={() => setIsOpen(false)}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Register
//                   </Link>
//                 </>
//               )}
//             </div>
//           )}

//           {/* Cart */}
//           {!isAdmin && (
//             <Link href="/cart">
//               <button className="relative p-2 rounded-md text-gray-700 hover:text-black">
//                 <ShoppingCart className="w-6 h-6" />
//                 {products.length > 0 && (
//                   <span className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full bg-cartBackgroundColor">
//                     {products.length}
//                   </span>
//                 )}
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
