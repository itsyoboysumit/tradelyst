import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + Copy */}
          <div>
            <img
              src="media/images/logo.svg"
              alt="Logo"
              className="w-1/2 mb-3"
            />
            <p className="text-sm text-gray-600">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="font-semibold mb-3 ">Company</p>
            <ul className="space-y-1 text-gray-600">
              <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Referral programme</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Careers</Link></li>
              <li><Link to="/product" className="hover:text-blue-600">Products</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Zerodha.tech</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Press & media</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Zerodha cares (CSR)</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <p className="font-semibold mb-3 ">Support</p>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600">Support portal</a></li>
              <li><a href="#" className="hover:text-blue-600">Z-Connect blog</a></li>
              <li><a href="#" className="hover:text-blue-600">List of charges</a></li>
              <li><a href="#" className="hover:text-blue-600">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <p className="font-semibold mb-3 7\">Account</p>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Open an account</a></li>
              <li><a href="#" className="hover:text-blue-600">Fund transfer</a></li>
              <li><a href="#" className="hover:text-blue-600">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-10 text-gray-500 text-xs space-y-4 leading-relaxed">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
