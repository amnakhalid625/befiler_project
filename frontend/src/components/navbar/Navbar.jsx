import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/logo.png';
import usa from '../../assets/usa-flag.png';
import { FaLockOpen, FaSignInAlt } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} className="h-10" alt="Logo" />
        </Link>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`hamburger ${isOpen ? 'hamburger-active' : ''} focus:outline-none`}
          >
            {isOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <IoMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-mono">
          <a href="#taxtool" className="text-black hover:text-red-600">TAX TOOLS</a>
          <a href="#resources" className="text-black hover:text-red-600">RESOURCES</a>
          <a href="#services" className="text-black hover:text-red-600">BUSINESS SERVICES</a>
          <a href="#tax" className="text-black hover:text-red-600">SALES TAX</a>

          {/* USA Services */}
          <a href="#usaservices" className="flex items-center space-x-2 text-black hover:text-red-600">
            <img src={usa} alt="USA Flag" className="w-5 h-5 rounded-full" />
            <span>USA SERVICES</span>
          </a>

          {/* Auth Buttons */}
          <Link to="/auth/signin" className="flex items-center gap-2 navbar-button hover:bg-red-700 text-white text-sm px-4 py-2 rounded-lg transition">
            <FaSignInAlt />
            Sign In
          </Link>
          <Link to="/auth/signup" className="flex items-center gap-2 navbar-button hover:bg-red-700 text-white text-sm px-4 py-2 rounded-lg transition">
            <FaLockOpen />
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <a href="#taxtool" className="text-black hover:text-red-600">TAX TOOLS</a>
            <a href="#resources" className="text-black hover:text-red-600">RESOURCES</a>
            <a href="#services" className="text-black hover:text-red-600">BUSINESS SERVICES</a>
            <a href="#tax" className="text-black hover:text-red-600">SALES TAX</a>

            <a href="#usaservices" className="flex items-center space-x-2 text-black hover:text-red-600">
              <img src={usa} alt="USA Flag" className="w-5 h-5 rounded-full" />
              <span>USA SERVICES</span>
            </a>

            <Link to="/auth/signin" className="flex items-center gap-2 navbar-button text-white px-4 py-2 rounded-full">
              <FaSignInAlt /> Sign In
            </Link>
            <Link to="/auth/signup" className="flex items-center gap-2 navbar-button text-white px-4 py-2 rounded-full">
              <FaLockOpen /> Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;