import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logoo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export class Header extends Component {
  render() {
    return (
      <header className="bg-white shadow-md p-2">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo here */}
          <div className="flex items-center flex-shrink-0">
            <Link to='/'>
              <img src={logo} alt="Logo" className="h-8 w-auto sm:h-16" />
            </Link>
          </div>
          {/* Nav bar here */}
          <nav className="flex-1 text-center text-lg">
            <ul className="flex justify-center space-x-7 font-semibold">
              <li>
                <Link
                  to='/allproducts'
                  className="text-[#582707] hover:text-[#391f0d] transition-colors duration-200"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className="text-[#582707] hover:text-[#391f0d] transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className="text-[#582707] hover:text-[#391f0d] transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {/* Cart and login here */}
          <div className="flex items-center space-x-4 text-lg">
            <button className="p-2 bg-[#582707] text-white rounded hover:bg-[#391f0d] transition-colors flex items-center">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="ml-2">Cart</span>
            </button>
            <Link
              to='/login'
              className="text-[#582707] hover:text-[#391f0d] transition-colors duration-200 text-lg font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
