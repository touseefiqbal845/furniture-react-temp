import React, { useState } from "react";

const BillingSummary = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (  
    <div className="p-6 rounded-lg shadow-md ">
      <h3 className="text-heading  mb-4">Billing Summary</h3>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {["#HOLIDAY40", "#HOLIDAY40"].map((code, index) => (
          <div
            key={index}
            className="relative flex justify-between p-3 border border-gray-300 rounded-lg text-sm bg-white"
          >
            <span className="font-bold">{code}</span>
            <span
              className="text-secondary cursor-pointer relative"
              onClick={() => handleCopy(code, index)}
            >
              Copy Code
              {copiedIndex === index && (
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-4 bg-white p-2 rounded-lg">
        <input
          type="text"
          placeholder="Enter Coupon Code Here..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button className="bg-mainText text-heading px-4 py-2 rounded-lg">
          Apply now
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-heading">Sub Total</span>
          <span className="text-mainText">$29.25</span>
        </div>
        <div className="flex justify-between">
          <span className="text-heading">Shipping</span>
          <span className="text-mainText">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-heading">Tax</span>
          <span className="text-mainText">$1.46</span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-heading font-semibold">Points</span>
            <p className="text-heading text-xs">
              Would you prefer to pay using points?
            </p>
          </div>
          <input
            type="checkbox"
            className="w-4 h-4 text-primary bg-gray-200 border-gray-300 rounded focus:ring-primary"
          />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-heading font-semibold">Wallet Balance</span>
            <p className="text-heading text-xs">
              Would you prefer to pay using wallet?
            </p>
          </div>
          <input type="checkbox" className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-heading font-bold">
          <span>Total</span>
          <span className="text-mainText">$30.71</span>
        </div>
        <button className="w-full bg-mainText text-white py-3 mt-4 rounded-lg font-semibold">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BillingSummary;
