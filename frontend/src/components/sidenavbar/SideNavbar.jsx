import React from 'react';
import logoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="hidden md:flex justify-between items-center px-6 py-4 bg-white text-white shadow-md border-b border-gray-200">  
      {/* Logo on the left */}
      <div>
        <img src={logoImg} alt="logo" className="w-24 h-auto" />
      </div>

      {/* Button on the right */}
      <div>
        <Link to="/">
        <button className="bg-red-400 hover:bg-blue-700 px-4 py-2 rounded transition duration-300">
          Go Back Home
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
