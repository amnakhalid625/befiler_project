import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaBell, FaTh, FaUser } from 'react-icons/fa';
import logoImage from '../../assets/logo.png'; 

const DashboardNavbar = () => {
  return (
    <>
    <div className="bg-white shadow-sm py-4 px-4 flex items-center justify-between border-b border-gray-200">
      {/* Logo - Left Side */}
      <div className="flex items-center">
        <Link to="/dashboard" className="flex items-center">
          <img 
            src={logoImage} 
            alt="Befiler Logo" 
            className="h-8" 
          />
        </Link>
      </div>

      {/* Navigation Icons - Right Side */}
      <div className="flex items-center space-x-6">
        <Link to="/dashboard" className="text-gray-600 hover:text-red-700">
          <FaHome size={18} />
        </Link>
        <Link to="/cart" className="text-gray-600 hover:text-red-700">
          <FaShoppingCart size={18} />
        </Link>
        <Link to="/notifications" className="text-gray-600 hover:text-red-700">
          <FaBell size={18} />
        </Link>
        <Link to="/apps" className="text-gray-600 hover:text-red-700">
          <FaTh size={18} />
        </Link>
        <Link to="/profile" className="text-gray-600 hover:text-red-700">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
            <FaUser size={16} className="text-orange-500" />
          </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default DashboardNavbar;