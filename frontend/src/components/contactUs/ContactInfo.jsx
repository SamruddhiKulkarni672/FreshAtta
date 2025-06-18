import React from "react";

const ContactInfo = () => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
    <div className="space-y-4 text-gray-700 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2">
        <span>📞</span>
        <span className="font-medium">
          Toll Free & WhatsApp: +919730752125 (Monday - Saturday from 10am - 6pm)
        </span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span>✉️</span>
        <span>
          Email - <a href="mailto:info@twobrothersindia.com" className="text-blue-600 hover:underline">info@kisanbasket.com</a>
        </span>
      </div>
    </div>
  </div>
);

export default ContactInfo;