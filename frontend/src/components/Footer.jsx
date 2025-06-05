import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001d35] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">KisanBasket</h2>
          <p className="text-sm text-gray-300">
            Fresh produce and natural products directly from our trusted farmers
            to your doorstep. Eat fresh, live healthy!
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="/why-kisanbasket" className="hover:text-white">
                Why KisanBasket?
              </a>
            </li>
          </ul>
        </div>

        {/* Social media  */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/shop"
                className="text-sm hover:text-green-400 transition duration-200"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-sm hover:text-green-400 transition duration-200"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-sm hover:text-green-400 transition duration-200"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-sm hover:text-green-400 transition duration-200"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">
            <strong>KisanBasket Corporate Office</strong>
            <br />
            74 Downtown, Office No. 302,
            <br />
            3rd Floor, Baner Road,
            <br />
            Baner, Pune-411045
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} KisanBasket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
