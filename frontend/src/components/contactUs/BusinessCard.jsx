import React from "react";
import Image from "next/image";
import contactImage from "@/assets/images/contact.png";

const BusinessCard = () => (
  <div className="space-y-6">
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={contactImage}
        alt="Kisan Basket"
        fill
        className="lg:object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Kisan Basket</h3>
      <div className="space-y-2 text-gray-700">
        <p>📍Office No. 302, 3rd Floor, 74 Downtown, Banner Road, Banner</p>
        <p>District - Pune, Maharashtra 413103</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm font-medium">4.3</span>
          <span className="text-sm text-gray-600">325 reviews</span>
        </div>
      </div>
    </div>
  </div>
);

export default BusinessCard;