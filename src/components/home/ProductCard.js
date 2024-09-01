import React from 'react';

const ProductCard = () => {
  return (
    <>
    <div>
        
    </div>

    {/* product card here */}
    <div className="max-w-xs mx-auto bg-white shadow-md overflow-hidden rounded-lg my-4">
      <div className="relative">
        <img
          className="w-full h-60 object-cover"
          src="https://via.placeholder.com/150" // Replace with your image source
          alt="Ceramic Blue Vase"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <div className="flex space-x-1">
            {/* Star Ratings */}
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.357 7.242h7.615c.969 0 1.371 1.24.588 1.81l-6.169 4.448 2.357 7.242c.3.921-.755 1.688-1.538 1.117L12 17.011l-6.169 4.448c-.783.57-1.838-.196-1.538-1.117l2.357-7.242-6.169-4.448c-.783-.57-.381-1.81.588-1.81h7.615l2.357-7.242z"
              ></path>
            </svg>
            {/* Repeat the above SVG for each star */}
          </div>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-gray-800">Ceramic Blue Vase</h3>
        <p className="mt-1 text-lg font-bold text-gray-900">$33.50</p>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
