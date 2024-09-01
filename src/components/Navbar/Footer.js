import React from 'react';
import logo from '../media/logoo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#582707] text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="mb-4 h-auto w-auto" />
          <p className="text-center md:text-left">
            Cherish your memories and handle the ceramics with love and care
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul>
            <li><a href="#" className="hover:font-semibold">Our Branding Partner</a></li>
            <li><a href="#" className="hover:font-semibold">Our Portfolio</a></li>
          </ul>
        </div>

        {/* Shortcut Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
          <ul>
            <li><a href="#" className="hover:font-semibold">About Us</a></li>
            <li><a href="#" className="hover:font-semibold">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <div className="flex items-center justify-center space-x-4 text-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebookF} size="xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
