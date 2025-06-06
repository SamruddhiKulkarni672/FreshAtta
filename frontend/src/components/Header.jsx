"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/images/kisan-basket-image1.jpg";
import { ChevronDown, Search, User, ShoppingCart } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  // Dummy placeholders
  const isAdmin = false; // Replace with real admin check if needed
  const user = { role: "USER" }; // Replace with real user object
  const products = [{}, {}, {}]; // Dummy cart product list

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const toggleDropdownCat = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  const handleProfileClick = () => {
    setIsOpen(false);
    if (user?.role === "ADMIN") {
      router.push("/admin");
    } else {
      router.push("/profile");
    }
  };

  const handleLogout = () => {
    setIsOpen(false);
    router.push("/login");
  };

  const handleSearch = () => {
    setShowSearch(true);
    router.push("/filter");
  };

  const categories = {
    Vegetables: ["Tomato", "Potato", "Carrot"],
    Dairy: ["Milk", "Cheese"],
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="w-[180px]">
          <Link href="/">
            <Image src={logo} alt="Kisan Basket logo" />
          </Link>
        </div>

        {/* Category Links - Hidden for Admin */}
        {!isAdmin && (
          <div className="lg:flex items-center space-x-6 text-[14px] font-black hidden">
            <Link
              href="/fresh-fruits"
              className="text-gray-700 hover:text-leem_green hover:underline"
            >
              FRESH FRUITS
            </Link>

            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="relative">
                <button
                  className="text-gray-700 flex items-center hover:text-leem_green"
                  onClick={() => toggleDropdownCat(category)}
                >
                  <Link
                    href={`/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {category.toUpperCase()}
                  </Link>
                  <ChevronDown className="w-5 h-5 mt-1 ml-1 text-black" />
                </button>

                {openCategory === category && (
                  <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <ul className="py-2">
                      {items.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={`/${category
                              .toLowerCase()
                              .replace(/\s/g, "-")}/${item
                              .toLowerCase()
                              .replace(/\s/g, "-")}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Right Section */}
        <div className="register flex space-x-4">
          {/* Search Bar */}
          {!isAdmin && (
            <div className="md:flex items-center gap-2 hidden border px-3 py-2 rounded-md">
              <input
                type="text"
                placeholder="search.."
                defaultValue=""
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none border-none bg-transparent text-sm"
              />

              {!showSearch && (
                <button onClick={handleSearch} className="hover:bg-gray-100">
                  <Search className="w-5 h-5 text-black" />
                </button>
              )}
              {showSearch && (
                <button
                  onClick={() => setShowSearch(false)}
                  className="text-sm text-gray-500 hover:text-red-500"
                >
                  X
                </button>
              )}
            </div>
          )}

          {/* User Icon with Dropdown */}
          <button
            className="flex items-center px-1 py-2"
            onClick={toggleDropdown}
          >
            <User className="w-5 h-5 text-black" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-0 m-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {user ? (
                <>
                  <div
                    onClick={handleProfileClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Profile
                  </div>

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          )}

          {/* Cart */}
          {!isAdmin && (
            <Link href="/cart">
              <button className="relative p-2 rounded-md text-gray-700 hover:text-black">
                <ShoppingCart className="w-6 h-6" />
                {products.length > 0 && (
                  <span className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full bg-cartBackgroundColor">
                    {products.length}
                  </span>
                )}
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
