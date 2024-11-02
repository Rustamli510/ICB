import React from 'react';
import { Link } from 'react-router-dom';

//Icons
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#363636] text-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Campus Barcelona */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Campus Barcelona</h3>
          <p>Carrer de Guillem Tell, 27, 08006 Barcelona, España</p>
          <div className="mt-4">
            <p className="flex items-center space-x-2">
              <span role="img" aria-label="phone">📞</span>
              <span>+34 93 515 11 74</span>
            </p>
            <p className="flex items-center space-x-2">
              <span role="img" aria-label="email">✉️</span>
              <span>info@nlcollege.es</span>
            </p>
          </div>
        </div>

        {/* Campus Madrid */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Campus Madrid</h3>
          <p>Plaza Puerta del Sol 11, Segunda Planta, 28013 Madrid, España</p>
          <div className="mt-4">
            <p className="flex items-center space-x-2">
              <span role="img" aria-label="phone">📞</span>
              <span>+34 91 737 66 33</span>
            </p>
            <p className="flex items-center space-x-2">
              <span role="img" aria-label="email">✉️</span>
              <span>info@nlcollege.es</span>
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow us on social Media</h3>
          <p>We have fun over here!</p>
          <div className="flex space-x-4 text-xl">
            <Link className="hover:mt-4 hover:bg-[#f81e15] transition-all text-gray-800 flex items-center justify-center mt-6 w-9 h-9 bg-[#f9423a] rounded-full">
              <FaInstagram />
            </Link>
            <Link className="hover:mt-4 hover:bg-[#f81e15] transition-all text-gray-800 flex items-center justify-center mt-6 w-9 h-9 bg-[#f9423a] rounded-full">
              <FaYoutube />
            </Link>
            <Link className="hover:mt-4 hover:bg-[#f81e15] transition-all text-gray-800 flex items-center justify-center mt-6 w-9 h-9 bg-[#f9423a] rounded-full">
              <FaLinkedin />
            </Link>
            <Link className="hover:mt-4 hover:bg-[#f81e15] transition-all text-gray-800 flex items-center justify-center mt-6 w-9 h-9 bg-[#f9423a] rounded-full">
              <FaFacebook />
            </Link>
            <Link className="hover:mt-4 hover:bg-[#f81e15] transition-all text-gray-800 flex items-center justify-center mt-6 w-9 h-9 bg-[#f9423a] rounded-full">
              <FaTiktok />
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Let's keep in touch!</h3>
          <p>If you don’t want to miss any of our news, exclusive offers, activities and special events, subscribe to our Newsletter!</p>
          <button className="inline mt-4 mb-2 py-2 px-6 bg-[#902923]  text-gray-900 font-semibold rounded-md hover:scale-105 transition-all">SUBSCRIBE</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
        <a href="#" className="hover:text-gray-100 transition">Legal Disclaimer</a>
        <p className="mt-2 md:mt-0">Copyright © NL College 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
