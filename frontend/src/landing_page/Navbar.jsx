import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/media/images/logo.svg"
            alt="Logo"
            className="w-32 md:w-40 lg:w-48"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/signup" className="text-gray-700 no-underline hover:text-blue-600">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 no-underline hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/product" className="text-gray-700 no-underline hover:text-blue-600">
              Product
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="text-gray-700 no-underline hover:text-blue-600">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/support" className="text-gray-700 no-underline hover:text-blue-600">
              Support
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden flex items-center p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Font Awesome icons */}
          {isOpen ? (
            <i class="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-bars" aria-hidden="true"></i>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-3 p-4 text-gray-700 font-medium">
            <li>
              <a href="#" className="text-gray-700 no-underline hover:text-blue-600">
                Signup
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 no-underline hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 no-underline hover:text-blue-600">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 no-underline hover:text-blue-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 no-underline hover:text-blue-600">
                Support
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
