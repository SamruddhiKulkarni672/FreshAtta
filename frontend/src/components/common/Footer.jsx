"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLeaf,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-[#0F172A] text-white py-10 px-6 md:px-16 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            {/* <FaLeaf className="text-green-500 text-2xl" /> */}
            <h2 className="text-xl font-semibold">Kisan Basket</h2>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Bringing fresh, quality produce directly from farmers to your
            doorstep.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/kisan_basket?igsh=MThtcTh0eWx4Mmo3ZA=="
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                Office No. 302, 3rd Floor, <br /> 74 Downtown, Baner Road,
                <br />
                Baner, Pune-411045
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <FaPhoneAlt className="mt-1" />
              <span>+919730752125</span>
            </li>
            <li className="flex items-start space-x-2">
              <FaEnvelope className="mt-1" />
              <span>info@kisanbasket.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to get updates on fresh produce and special offers.
          </p>
          <form className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="px-3 py-2 rounded-l-md text-sm text-black w-full focus:outline-none"
              suppressHydrationWarning
              required
            />
            <button
              type="submit"
              className="bg-green-600 px-4 py-2 rounded-r-md text-sm hover:bg-green-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kisan Basket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#e4e3e2] text-black py-10 px-6 md:px-16 w-full border border-t-2 border-[#bbb7b7]">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {/* Logo & About */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">KisanBasket</h2>
//           <p className="text-sm text-[#4E4B4B]">
//             Fresh produce and natural products directly from our trusted farmers
//             to your doorstep. Eat fresh, live healthy.
//           </p>
//         </div>

//         {/* Menu */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Menu</h3>
//           <ul className="space-y-2 text-sm text-[#4E4B4B]">
//             <li>
//               <a href="/" className=" hover:text-[#D2874D]">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/about" className="hover:text-[#D2874D]">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="hover:text-[#D2874D]">
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               <a href="/faqs" className="hover:text-[#D2874D]">
//                 FAQs
//               </a>
//             </li>
//             <li>
//               <a href="/why-kisanbasket" className="hover:text-[#D2874D]">
//                 Why KisanBasket?
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Follow Us */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#"
//                 className="text-sm hover:text-[#D2874D] transition duration-200"
//               >
//                 Facebook
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com/kisan_basket?igsh=MThtcTh0eWx4Mmo3ZA=="
//                 className="text-sm hover:text-[#D2874D] transition duration-200"
//               >
//                 Instagram
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="text-sm hover:text-[#D2874D] transition duration-200"
//               >
//                 YouTube
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="text-sm hover:text-[#D2874D] transition duration-200"
//               >
//                 Linkdlen
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
//           <p className="text-sm text-[#4E4B4B]">
//             <strong>KisanBasket Corporate Office</strong>
//             <br />
//             Office No. 302,
//             <br />
//             3rd Floor, 74 Downtown,
//             <br />
//             Baner Road,
//             <br />
//             Baner, Pune-411045
//             <br />
//             Contact.+919730752125
//           </p>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-[#4E4B4B]">
//         © {new Date().getFullYear()} KisanBasket. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
