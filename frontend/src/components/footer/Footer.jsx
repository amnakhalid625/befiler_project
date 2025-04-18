// src/components/Footer.jsx
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Stay Connected */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-red-600 p-3 rounded"><FaFacebookF className="text-white" /></a>
            <a href="#" className="bg-red-600 p-3 rounded"><FaYoutube className="text-white" /></a>
            <a href="#" className="bg-red-600 p-3 rounded"><FaTwitter className="text-white" /></a>
            <a href="#" className="bg-red-600 p-3 rounded"><FaLinkedinIn className="text-white" /></a>
          </div>
        </div>

        {/* Need Support */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Need Support?</h2>
          <div className="flex items-center space-x-2 mb-1">
            <FaPhoneAlt className="text-red-600" />
            <span>+92 (0) 21 38228222</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-red-600" />
            <span>+92 331 1111070, +92 340 2021111</span>
          </div>
        </div>

        {/* Locate Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaMapMarkerAlt className="text-red-600 mr-2" />
            Locate us
          </h2>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto px-4 mt-8 text-sm text-gray-600">
        <p>
          Befiler is a joint initiative of team of leading tax professionals and technology enthusiasts. 
          The initiative aims to simplify tax return filing process for individuals; especially salaried class, 
          and promote the culture of documentation. It aims to enhance the number of tax filers in the interest 
          of enhancing tax base of the country, at the same time, reduce huge cost to ordinary citizens who have 
          to suffer cost of being non-filers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
