// components/order/ShippingInfo.jsx
"use client";

export const ShippingInfo = ({ customerInfo, trackingNumber }) => {
  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-semibold text-lg mb-4">Shipping Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-semibold">Delivery Address</h3>
          <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
            {customerInfo.name}
            <br />
            {customerInfo.address.street}
            <br />
            {customerInfo.address.city}, {customerInfo.address.state}{" "}
            {customerInfo.address.zip}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Shipping Method</h3>
          <p className="text-sm text-gray-600 mt-1">
            Standard Shipping
            <br />
            Tracking Number:{" "}
            <span className="font-medium text-black">
              {trackingNumber || "1Z999AA1234567890"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};