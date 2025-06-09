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

  const products = [{}, {}, {}]; // Dummy cart product list

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSearch = () => {
    setShowSearch(true);
    router.push("/filter");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm text-headerTextColor">
      <div className="w-full max-w-screen-2xl mx-auto px-4 py-2 xl:px-24  md:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-24 md:w-32 lg:w-40 h-8">
          <Link href="/">
            <Image
              src="/images/kisanbasketLogo.svg"
              alt="Kisan Basket logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>
        {/* Nav + Right Section Wrapper */}
        <div className="hidden md:flex items-center  space-x-8 justify-end flex-1 xl:pr-8">
          {/* Desktop Nav */}
          <nav className="flex space-x-8 text-sm font-semibold text-headerTextColor">
            <Link href="/" className="hover:text-green-700 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-700 transition">
              About
            </Link>
            <Link href="/market" className="hover:text-green-700 transition">
              Market
            </Link>
            <Link href="/services" className="hover:text-green-700 transition">
              Services
            </Link>
            <Link href="/blog" className="hover:text-green-700 transition">
              Blog
            </Link>
          </nav>

          {/* Right Section Desktop */}
          <div className="flex items-center space-x-4 ">
            {/* Cart */}
            <div className="relative border px-2 py-2 flex items-center bg-serachBackgroundColor rounded-md">
              <Link href="/cart">
                <div className="relative w-6 h-6">
                  <Image
                    src="/images/Shopping-bag.svg"
                    alt="Shopping Bag Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Sign In */}
            <Link href="/login">
              <Button
                variant="destructive"
                className="px-2 py-1 text-white rounded-lg"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md font-semibold text-headerTextColor hover:text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white font-semibold text-headerTextColor shadow-md px-4 pb-4 space-y-2">
          <Link
            href="/"
            className="block py-1  hover:text-green-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-1  hover:text-green-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/market"
            className="block py-1  hover:text-green-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Market
          </Link>
          <Link
            href="/services"
            className="block py-1  hover:text-green-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="block py-1  hover:text-green-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>

          <Link
            href="/cart"
            className="block py-1  hover:text-green-700 transition"
          >
            Cart ({products.length})
          </Link>
          <Link href="/login">
            <Button
              variant="destructive"
              className="px-2 py-1 text-white rounded-lg"
            >
              Sign In
            </Button>
          </Link>
        </nav>
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
// import { Button } from "@/components/ui/button";
// import { ChevronDown, Search, User, ShoppingCart, Menu, X } from "lucide-react";

// const Header = () => {
//   const router = useRouter();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [search, setSearch] = useState("");

//   const user = { role: "USER" };
//   const products = [{}, {}, {}];

//   const handleSearch = () => {
//     setShowSearch(true);
//     router.push("/filter");
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md text-headerTextColor">
//       <div className="w-full   px-4 py-2 md:py-5 flex items-center justify-between ">
//         <div className="flex items-center space-x-8">
//           {/* Logo */}
//           <div className="relative w-24 md:w-32 lg:w-40 h-8 ">
//             <Link href="/">
//               <Image
//                 src="/images/kisanbasketLogo.svg"
//                 alt="Kisan Basket logo"
//                 fill
//                 className="object-contain"
//               />
//             </Link>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex    space-x-6 lg:space-x-12 text-sm  font-semibold  ">
//             <Link href="/" className="hover:text-green-700 transition">
//               Home
//             </Link>
//             <Link href="/about" className="hover:text-green-700 transition">
//               About
//             </Link>
//             <Link href="/about" className="hover:text-green-700 transition">
//               Market
//             </Link>
//             <Link href="/services" className="hover:text-green-700 transition">
//               Services
//             </Link>
//             <Link href="/blog" className="hover:text-green-700 transition">
//               Blog
//             </Link>
//           </div>
//         </div>

//         {/* Desktop Right Section */}
//         <div className="hidden md:flex lg:mr-4 space-x-2 items-center">
//           <div className="border px-2 py-2 bg-serachBackgroundColor rounded-md flex items-center">
//             <button onClick={handleSearch} className="hover:bg-gray-100">
//               <Search className="w-4 h-4 text-black" />
//             </button>
//           </div>
//           <div className="relative border px-2 py-2 flex items-center bg-serachBackgroundColor rounded-md">
//             <Link href="/cart">
//               <div className="relative w-4 h-4">
//                 {" "}
//                 {/* You can use w-5 or w-8 depending on icon size */}
//                 <Image
//                   src="/images/Shopping-bag.svg"
//                   alt="Shopping Bag Icon"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </Link>
//           </div>

//           <Link href="/login">
//             <Button
//               variant="default"
//               className="px-2 py-1 text-white rounded-[6px] bg-cartBackgroundColor"
//             >
//               Sign In
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden text-sm  font-semibold text-headerTextColor px-4 py-3 space-y-3 bg-white shadow border-t border-gray-200">
//           <Link
//             href="/"
//             className="block text-gray-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="block text-gray-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             href="/about"
//             className="block text-gray-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Market
//           </Link>
//           <Link
//             href="/services"
//             className="block text-gray-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Services
//           </Link>
//           <Link
//             href="/blog"
//             className="block text-gray-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Blog
//           </Link>
//           <Link
//             href="/cart"
//             className="flex items-center gap-2 text-gray-700"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             <ShoppingCart className="w-5 h-5" /> Cart ({products.length})
//           </Link>
//           <div className="mt-1 text-white">
//             <Link href="/login" onClick={() => setIsMenuOpen(false)}>
//               <Button variant="destructive" className="w-full">
//                 Sign In
//               </Button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
