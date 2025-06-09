import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#e4e3e2] text-[#4E4B4B] py-10 px-6 md:px-16 w-full border border-t-2 border-[#bbb7b7]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo & About */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">KisanBasket</h2>
                    <p className="text-sm text-[#4E4B4B]">
                        Fresh produce and natural products directly from our trusted farmers
                        to your doorstep. Eat fresh, live healthy!
                    </p>
                </div>

                {/* Menu */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Menu</h3>
                    <ul className="space-y-2 text-sm text-[#4E4B4B]">
                        <li><a href="/" className=" hover:text-[#D2874D]">Home</a></li>
                        <li><a href="/about" className="hover:text-[#D2874D]">About Us</a></li>
                        <li><a href="/contact" className="hover:text-[#D2874D]">Contact Us</a></li>
                        <li><a href="/faqs" className="hover:text-[#D2874D]">FAQs</a></li>
                        <li><a href="/why-kisanbasket" className="hover:text-[#D2874D]">Why KisanBasket?</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm hover:text-[#D2874D] transition duration-200">Facebook</a></li>
                        <li><a href="#" className="text-sm hover:text-[#D2874D] transition duration-200">Instagram</a></li>
                        <li><a href="#" className="text-sm hover:text-[#D2874D] transition duration-200">YouTube</a></li>
                        <li><a href="#" className="text-sm hover:text-[#D2874D] transition duration-200">Twitter</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-sm text-[#4E4B4B]">
                        <strong>KisanBasket Corporate Office</strong><br />
                        74 Downtown, Office No. 302,<br />
                        3rd Floor, Baner Road,<br />
                        Baner, Pune-411045
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-[#4E4B4B]">
                © {new Date().getFullYear()} KisanBasket. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
