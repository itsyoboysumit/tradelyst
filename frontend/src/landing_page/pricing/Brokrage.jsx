import React from "react";

function Brokerage() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row p-5 mt-5 text-center border-t">
        {/* Left Section */}
        <div className="md:w-2/3 w-full p-4">
          <a href="#" className="no-underline">
            <h3 className="text-base font-semibold">Brokerage calculator</h3>
          </a>
          <ul className="text-left leading-7 text-xs text-gray-600 mt-3  lg:ml-50">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 w-full p-4">
          <a href="#" className="no-underline">
            <h3 className="text-base font-semibold">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
